let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

let server = require('../index');

describe('Transaction', () => {
 describe('/POST pay', () => {
     it('it should POST the response', (done) => {
      
      let payload = {
          "product":"Product-1",
          "payment_method":"card",
          "email":"user-3@gmail.com",
          "price":100
      }

      chai.request(server)
        .post('/pay')
        .send(payload)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
            done();
          });
       });
  });describe('/GET transaction/all', () => {
     it('it should GET a message', (done) => {
     chai.request(server)
         .get('/transaction/all')
         .end((err, res) => {
               res.should.have.status(201);
               res.body.should.be.a('array');
               done();
            });
         });
     });
});