import Genero from '../entities/genero.js';

const getGenerosDB = async () => {
    try {
        return await Genero.findAll();
    } catch (err) {
        throw "Erro: " + err;
    }
}

const addGeneroDB = async (body) => {
    try {
        const genero = await Genero.create(body);
        return genero;
    } catch (err) {
        throw "Erro: " + err;
    }
}

const updateGeneroDB = async (body) => {
    try {
        const genero = await Genero.findByPk(body.id);
        if (!genero) throw `Nenhum registro encontrado com o ID ${body.id} para ser alterado`;

        await genero.update(body);
        return genero;
    } catch (err) {
        throw "Erro ao alterar: " + err;
    }
}

const deleteGeneroDB = async (id) => {
    try {
        const genero = await Genero.findByPk(id);
        if (!genero) throw `Nenhum registro encontrado com o ID ${id} para ser removido`;

        await genero.destroy();
        return "Gênero removido com sucesso";
    } catch (err) {
        throw "Erro ao remover: " + err;
    }
}

const getGeneroPorIdDB = async (id) => {
    try {
        const genero = await Genero.findByPk(id);
        if (!genero) throw `Nenhum registro encontrado com o ID ${id}`;

        return genero;
    } catch (err) {
        throw "Erro ao recuperar: " + err;
    }
}

export { getGenerosDB, addGeneroDB, updateGeneroDB, deleteGeneroDB, getGeneroPorIdDB };
