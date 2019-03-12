const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../src/server');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('API', function() {    
	before(function(){
		return runServer();
	});

	after(function(){
		return closeServer();
    });
    
    it('should 200 on GET requests', function() {
        return chai.request(app)
        .get('/api/races')
        .then(function(res) {
            res.should.have.status(200);
            res.should.be.json;
        });
    });
});