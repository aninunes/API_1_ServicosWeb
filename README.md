# API de Filmes e Gêneros

## Descrição

Este projeto visa desenvolver uma API RESTful para gerenciar filmes e gêneros utilizando Express.js, Sequelize e PostgreSQL. O trabalho inclui a definição, implementação, teste e documentação da API, de acordo com o padrão Open API.

## Tecnologias Utilizadas

- **Framework de Comunicação HTTP:** Express.js
- **Framework de Persistência de Dados:** Sequelize
- **Sistema de Gerenciamento de Banco de Dados (SGBD):** PostgreSQL
- **Ferramentas de Teste:** Postman, Mocha, Chai

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:

- **`src/`**: Contém o código-fonte da API, incluindo os serviços e a configuração do banco de dados.
- **`config/`**: Configurações do banco de dados e variáveis de ambiente.
- **`models/`**: Modelos do Sequelize para Filmes e Gêneros.
- **`routes/`**: Rotas da API para Filmes e Gêneros.
- **`tests/`**: Testes unitários e de integração para a API.
- **`docs/`**: Documentação da API gerada pelo Swagger.

## Documentação da API

A documentação da API está disponível através do Swagger UI. Para acessar a documentação:

1. Inicie o servidor localmente:
    ```bash
    npm start
    ```

2. Acesse a documentação em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints da API

### Filmes

- **GET /filme**: Lista todos os filmes.
- **POST /filme**: Adiciona um novo filme.
- **GET /filme/{id}**: Recupera um filme pelo ID.
- **PUT /filme/{id}**: Atualiza um filme.
- **DELETE /filme/{id}**: Remove um filme.

### Gêneros

- **GET /genero**: Lista todos os gêneros.
- **POST /genero**: Adiciona um novo gênero.
- **GET /genero/{id}**: Recupera um gênero pelo ID.
- **PUT /genero/{id}**: Atualiza um gênero.
- **DELETE /genero/{id}**: Remove um gênero.

## Instalação e Configuração

1. Clone o repositório:
    ```bash
    git clone https://github.com/aninunes/API_1_ServicosWeb.git
    cd API_1_ServicosWeb
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados no arquivo `.env`:
    ```
    DB_HOST=localhost
    DB_USER=usuario
    DB_PASSWORD=senha
    DB_NAME=api_filmes
    ```

4. Inicie o servidor:
    ```bash
    npm start
    ```

## Testes

Para rodar os testes, utilize o comando:
```bash
npm test
