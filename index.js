import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv-safe';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import router from './routes/rotas.js'; // Certifique-se de que o caminho está correto
import { login } from './controllers/segurancaController.js';

dotenv.config();

const swaggerDocument = YAML.load('./swagger.yaml'); // Carregar o arquivo YAML do Swagger

const app = express();

app.use(cors());
app.use(express.json());

// Rota de login
app.post('/login', login);

// Uso das rotas
app.use(router);

// Rota do Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
