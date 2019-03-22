const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');
const { TEST_DATABASE_URL } = require('../src/config/main.config');

const User = require('../src/models/user.model');
const AasimarHeritage = require('../src/models/aasimarHeritage.model');
const {app, runServer, closeServer} = require('../src/server');
const expect = chai.expect;

chai.use(chaiHttp);

let user = null;
let token = null;
let userCredentials = { }

describe('tests', function() {    
	before(function(){
		return runServer(TEST_DATABASE_URL);
	});

	after(function(){
		return closeServer();
    });

    describe('API calls', function(){
        beforeEach(function(){
			return seedUser()
				.then(function(userData){
					user = userData;	
					const tokenPayload = {
		                _id: user._id
		            }; 
		            token = jwt.sign(tokenPayload, config.SECRET, {
		                expiresIn: config.EXPIRATION,
		            });	
		            return seedAasimarHeritagesData()
		            .then(function(res){
/* 		            	return seedChecks(user._id)
		            	.then(function(res){
		            	}); */
		            	console.log(res);
		            });
                });
		});

		afterEach(function(){
			return tearDownDb();
        });
        
        describe('aasimarHeritages GET endpoint', function(){
            it('should 200 on GET requests', function() {
                return chai.request(app)
                .get('/api/aasimarHeritages')
                .set('Authorization', `Bearer ${token}`)
                .then(function(res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a("object");
                    expect(res.body.length).to.be.at.least(1);
                });
            });
        });
    });

/*         it('should 200 on GET requests', function() {
            return chai.request(app)
            .get('/api/bloodlines')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
        });

        it('should 200 on GET requests', function() {
            return chai.request(app)
            .get('/api/classes')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
        });

        it('should 200 on GET requests', function() {
            return chai.request(app)
            .get('/api/deities')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
        });

        it('should 200 on GET requests', function() {
            return chai.request(app)
            .get('/api/domains')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
        });

        it('should 200 on GET requests', function() {
            return chai.request(app)
            .get('/api/druidsNatureBonds')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
        });

        it('should 200 on GET requests', function() {
            return chai.request(app)
            .get('/api/feats')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
        });

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

        it('should 200 on GET requests', function() {
            return chai.request(app)
            .get('/api/spells')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
        });

        it('should 200 on GET requests', function() {
            return chai.request(app)
            .get('/api/traits')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                expect(res.body.length).to.be.at.least(1);
            });
        }); */
});

// used to put randomish documents in db
// so we have data to work with and assert about.
// we use the Faker library to automatically
// generate placeholder values
// and then we insert that data into mongo
function seedUser(){
	console.info('seeding user data');

    let seedUserData = generateUserData();
	userCredentials.email = seedUserData.email;
    userCredentials.password = seedUserData.password;
    return User.create(seedUserData);                           // <-- this line times out. 
}
// generates a fake User object for testing
function generateUserData(){
	return {
		email: faker.internet.email(),
		username: faker.internet.userName(),
		password: faker.internet.password(8),
		role: generateRole(),
	};
}
// used by generateUserData to create a random role
function generateRole(){
	const roles = ['user', 'content creator', 'admin'];
	const role = roles[Math.floor(Math.random() * roles.length)];
	return role;	
}

function seedAasimarHeritagesData() {
    console.info('seeding aasimarHeritages data');
    const seedData = [];
  
    for (let i=1; i<=10; i++) {
      seedData.push(generateAasimarHeritagesData());
    }
    // this will return a promise
    return AasimarHeritage.insertMany(seedData);
}

// generate an object represnting a heritage.
// can be used to generate seed data for db
// or request.body data
function generateAasimarHeritagesData() {
    return {
        name: faker.company.companyName(),
        standardRacialTraits: {
            blurb: faker.lorem.sentence(),
            base: {
                abilityScoreRacialBonuses: faker.lorem.sentence(),
                abilityScoreRacialBonusArray: generateBonusArray(['str', 'dex', 'con', 'int', 'wis', 'cha'], 3),
                skillRacialBonusArray: generateBonusArray(['acrobatics', 'bluff', 'climb', 'intimidate', 'spellcraft'], 2),
                age: "normal",
                size: "medium",
                type: "outsider (native)",
                speed: "30",
                Languages: {
                    start:['Aasimar', 'Starting', 'Languages'],
                    learn:['Aasimar', 'Learnable', 'Languages'],
                }
            },
            racial: generateArrayNameAndDescription(),
        },
    };
}

function generateBonusArray(abilities, num){
    let array = [];
    for(let i=0;i<num;i++){
        const ability = abilities[Math.floor(Math.random() * abilities.length)];
        array.push({
            stat: ability,
            value: faker.random.number({min:-2, max:4}),
        })
    };
    return array;
}

function generateArrayNameAndDescription(){
    let array = [];
    let num = faker.random.number({min:1, max:5});
    for(let i=0;i<num;i++){
        array.push({
            name:faker.lorem.sentence(),
            description:faker.lorem.text,
        })
    };
    return array;
}

// this function deletes the entire database.
// we'll call it in an `afterEach` block below
// to ensure data from one test does not stick
// around for next one
function tearDownDb() {
    console.warn('Deleting database');
    return mongoose.connection.dropDatabase();
}