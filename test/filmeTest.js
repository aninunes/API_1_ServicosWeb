import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js'; 

chai.should();
chai.use(chaiHttp);

describe('API Filmes', () => {
    let token = '';

    before((done) => {
        process.env.PORT = 3004; 
        chai.request(app)
            .post('/login')
            .send({ email: 'admin@ifsul.edu.br', senha: '123456' })
            .end((err, res) => {
                res.should.have.status(200);
                token = res.body.token;
                done();
            });
    });

    it('Deve listar todos os filmes', (done) => {
        chai.request(app)
            .get('/filme')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it('Deve adicionar um novo filme', (done) => {
        const filme = {
            titulo: 'Novo Filme',
            descricao: 'Descrição do novo filme',
            ano_lancamento: 2023,
            genero_id: 1
        };
        chai.request(app)
            .post('/filme')
            .set('Authorization', `Bearer ${token}`)
            .send(filme)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('titulo').eql('Novo Filme');
                done();
            });
    });
});
