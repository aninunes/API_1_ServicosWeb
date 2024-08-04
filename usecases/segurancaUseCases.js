import Usuario from '../entities/usuario.js';

const autenticaUsuarioDB = async (body) => {
    try {
        const { email, senha } = body;
        console.log('Tentando autenticar usuário com email:', email, 'e senha:', senha);
        const usuario = await Usuario.findOne({ where: { email, senha } });
        if (!usuario) {
            console.log('Usuário não encontrado ou senha inválida');
            throw "Usuário ou senha inválidos";
        }
        console.log('Usuário autenticado:', usuario.dataValues);
        return usuario;
    } catch (err) {
        console.log('Erro ao autenticar usuário:', err);
        throw "Erro ao autenticar o usuário: " + err;
    }
}

export { autenticaUsuarioDB };
