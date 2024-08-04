import jwt from 'jsonwebtoken';

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

export { verificaJWT };
