import { Router } from 'express';
import { rotasGeneros } from './rotasGeneros.js';
import { rotasFilmes } from './rotasFilmes.js';
import { login } from '../controllers/segurancaController.js';

const rotas = Router();

rotas.post("/login", login);

rotas.use(rotasGeneros);
rotas.use(rotasFilmes);

export default rotas;
