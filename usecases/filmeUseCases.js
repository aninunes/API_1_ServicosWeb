import Filme from '../entities/filme.js';
import Genero from '../entities/genero.js';

const getFilmesDB = async () => {
    try {
        return await Filme.findAll({
            include: [{
                model: Genero,
                as: 'genero'
            }]
        });
    } catch (err) {
        throw "Erro: " + err;
    }
}

const addFilmeDB = async (body) => {
    try {
        const filme = await Filme.create(body);
        return filme;
    } catch (err) {
        throw "Erro: " + err;
    }
}

const updateFilmeDB = async (body) => {
    try {
        const filme = await Filme.findByPk(body.id);
        if (!filme) throw `Nenhum registro encontrado com o ID ${body.id} para ser alterado`;

        await filme.update(body);
        return filme;
    } catch (err) {
        throw "Erro ao alterar: " + err;
    }
}

const deleteFilmeDB = async (id) => {
    try {
        const filme = await Filme.findByPk(id);
        if (!filme) throw `Nenhum registro encontrado com o ID ${id} para ser removido`;

        await filme.destroy();
        return "Filme removido com sucesso";
    } catch (err) {
        throw "Erro ao remover: " + err;
    }
}

const getFilmePorIdDB = async (id) => {
    try {
        const filme = await Filme.findByPk(id, {
            include: [{
                model: Genero,
                as: 'genero'
            }]
        });
        if (!filme) throw `Nenhum registro encontrado com o ID ${id}`;

        return filme;
    } catch (err) {
        throw "Erro ao recuperar: " + err;
    }
}

export { getFilmesDB, addFilmeDB, updateFilmeDB, deleteFilmeDB, getFilmePorIdDB };
