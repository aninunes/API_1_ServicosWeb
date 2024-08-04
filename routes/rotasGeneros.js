import { Router } from 'express';
import { verificaJWT } from '../controllers/segurancaController.js';
import { getGeneros, addGenero } from '../controllers/generoController.js';

const rotasGeneros = Router();

rotasGeneros.route('/genero')
    .get(verificaJWT, getGeneros)
    .post(verificaJWT, addGenero);

export { rotasGeneros };
