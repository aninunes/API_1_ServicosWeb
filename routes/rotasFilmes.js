import { Router } from 'express';
import { verificaJWT } from '../controllers/segurancaController.js';
import { getFilmes, addFilme, updateFilme, deleteFilme, getFilmePorId } from '../controllers/filmeController.js';

const rotasFilmes = Router();

rotasFilmes.route('/filme')
    .get(verificaJWT, getFilmes)
    .post(verificaJWT, addFilme)
    .put(verificaJWT, updateFilme);

rotasFilmes.route('/filme/:id')
    .get(verificaJWT, getFilmePorId)
    .delete(verificaJWT, deleteFilme);

export { rotasFilmes };
