import chai from 'chai';
import chaiHttp from 'chai-http';
import { setToken } from './token.js';

chai.use(chaiHttp);

const { expect } = chai;

describe('API Login', () => {
    it('Deve realizar o login e retornar um token', (done) => {
        const user = {
            email: 'admin@ifsul.edu.br',
            senha: '123456'
        };
        chai.request('http://localhost:3003')
            .post('/login')
            .send(user)
            .end((err, res) => {
                if (err) {
                    console.log('Erro na requisição:', err);
                    return done(err);
                }
                console.log('Resposta do servidor:', res.body);
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('auth').eql(true);
                expect(res.body).to.have.property('token');
                setToken(res.body.token);
                done();
            });
    });
});
