import Genero from '../entities/genero.js';

const getGeneros = async (req, res) => {
    try {
        const generos = await Genero.findAll();
        res.status(200).json(generos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addGenero = async (req, res) => {
    try {
        const { nome, descricao } = req.body;
        if (!nome || !descricao) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }
        const novoGenero = await Genero.create(req.body);
        res.status(200).json(novoGenero);  // Retorna o objeto completo do novo gênero criado
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




const updateGenero = async (request, response) => {
    await updateGeneroDB(request.body)
        .then(data => response.status(200).json({
            status: 'success',
            message: 'Gênero alterado',
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const deleteGenero = async (request, response) => {
    await deleteGeneroDB(request.params.id)
        .then(data => response.status(200).json({
            status: 'success',
            message: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const getGeneroPorId = async (request, response) => {
    await getGeneroPorIdDB(request.params.id)
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

export { getGeneros, addGenero, updateGenero, deleteGenero, getGeneroPorId };
