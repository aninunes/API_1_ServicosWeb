import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

chai.should();
chai.use(chaiHttp);

describe('API Gêneros', () => {
    let token = '';

    before((done) => {
        chai.request(app)
            .post('/login')
            .send({ email: 'admin@ifsul.edu.br', senha: '123456' })
            .end((err, res) => {
                res.should.have.status(200);
                token = res.body.token;
                done();
            });
    });

    it('Deve listar todos os gêneros', (done) => {
        chai.request(app)
            .get('/genero')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it('Deve adicionar um novo gênero', (done) => {
        const genero = {
            nome: 'Novo Gênero',
            descricao: 'Descrição do novo gênero'
        };
        chai.request(app)
            .post('/genero')
            .set('Authorization', `Bearer ${token}`)
            .send(genero)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('nome').eql('Novo Gênero');  // Verifica se a resposta possui a propriedade 'nome'
                done();
            });
    });
});
