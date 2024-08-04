import Filme from '../entities/filme.js';

const getFilmes = async (req, res) => {
    try {
        const filmes = await Filme.findAll();
        res.status(200).json(filmes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addFilme = async (req, res) => {
    try {
        const { titulo, descricao, ano_lancamento, genero_id } = req.body;
        if (!titulo || !descricao || !ano_lancamento || !genero_id) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }
        const novoFilme = await Filme.create(req.body);
        res.status(200).json(novoFilme);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateFilme = async (request, response) => {
    await updateFilmeDB(request.body)
        .then(data => response.status(200).json({
            status: 'success',
            message: 'Filme alterado',
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const deleteFilme = async (request, response) => {
    await deleteFilmeDB(request.params.id)
        .then(data => response.status(200).json({
            status: 'success',
            message: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const getFilmePorId = async (request, response) => {
    await getFilmePorIdDB(request.params.id)
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

export { getFilmes, addFilme, updateFilme, deleteFilme, getFilmePorId };
