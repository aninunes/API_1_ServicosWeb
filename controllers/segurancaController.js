import { autenticaUsuarioDB } from '../usecases/segurancaUseCases.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv-safe';

dotenv.config();

const login = async (request, response) => {
    await autenticaUsuarioDB(request.body)
        .then(usuario => {
            const token = jwt.sign({ usuario: usuario.dataValues }, process.env.SECRET, {
                expiresIn: 300 // expira em 5 minutos
            });
            return response.json({ auth: true, token: token });
        })
        .catch(err => {
            response.status(401).json({ auth: false, message: err });
        });
}

const verificaJWT = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    console.log('Auth Header:', authHeader);
    if (!authHeader) {
        console.log('Nenhum token recebido');
        return response.status(401).json({ auth: false, message: 'Nenhum token recebido' });
    }

    const token = authHeader.split(' ')[1];
    console.log('Token recebido:', token);
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            console.log('Erro ao decodificar o token:', err);
            return response.status(401).json({ auth: false, message: 'Erro ao decodificar o token: ' + err });
        }
        console.log('Token decodificado:', decoded);
        request.usuario = decoded.usuario;
        next();
    });
}

export { login, verificaJWT };
