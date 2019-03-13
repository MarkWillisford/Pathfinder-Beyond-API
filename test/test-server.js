const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../src/server');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('tests', function() {    
	before(function(){
		return runServer();
	});

	after(function(){
		return closeServer();
    });

    describe('API calls', function(){
        // I'll go through and check each endpoint for basic return functionality
        it('should 200 on GET requests', function() {
            return chai.request(app)
            .get('/api/races')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
        });

    })
});

