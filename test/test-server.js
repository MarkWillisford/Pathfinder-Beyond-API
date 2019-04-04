const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');
const { TEST_DATABASE_URL } = require('../src/config/main.config');
const jwt = require('jsonwebtoken');
const config = require('../src/config/main.config');
const express = require('express');
const request = require("supertest")(express);

const User = require('../src/models/user.model');
const AnimalCompanion = require('../src/models/animalCompanion.model');
const AasimarHeritage = require('../src/models/aasimarHeritage.model');
const Bloodline = require('../src/models/bloodline.model');
const CharClass = require('../src/models/charClass.model');
const Deity = require('../src/models/deity.model');
const Domain = require('../src/models/domain.model');
const Feat = require('../src/models/feat.model');
const Race = require('../src/models/race.model');
const Spell = require('../src/models/spell.model');
const Trait = require('../src/models/trait.model');
const Armor = require('../src/models/armor.model');
const GoodsAndService = require('../src/models/goodsAndServices.model');
const TradeGoods = require('../src/models/tradeGoods.model');
const Weapon = require('../src/models/weapon.model');
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
        return seedUser()   // <--
        .then(function(userData){ 
          user = userData;	
          const tokenPayload = {
              _id: user._id
          }; 
          token = jwt.sign(tokenPayload, config.SECRET, {
              expiresIn: config.EXPIRATION,
          });	  // <-- 
          return seedAasimarHeritagesData()
          .then(function(res){
            return seedBloodlinesData()
            .then(function(res){
              return seedCharClassesData()
              .then(function(res){
                return seedDeitiesData()
                .then(function(res){
                  return seedDomainsData()
                  .then(function(res){
                    return seedFeatsData()
                    .then(function(res){
                      return seedRacesData()
                      .then(function(res){
                        return seedSpellsData()
                        .then(function(res){
                          return seedTraitsData()
                          .then(function(res){                            
                            return seedArmorData()
                            .then(function(res){
                              return seedGoodsAndServicesData()
                              .then(function(res){
                                return seedTradeGoodsData()
                                .then(function(res){
                                  return seedWeaponData()
                                  .then(function(res){
                                    return seedDruidData()
                                    .then(function(res){

                                    })
                                  })
                                })
                              })
                            })
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        }); // <--
		  }); 

		  afterEach(function(){
			return tearDownDb();
      });
    describe('User GET endpoint', function(){
			it('should return user with correct fields', function(){
				// strategy
				// 1. get back all users returned by Get request to /users
				// 2. prove res has right status and data type
				// 3. prove res has the correct key / values

				let res;			
				return chai.request(app)
					.get('/api/users')
					.set('Authorization', `Bearer ${token}`)
					.then(function(_res){
                        res = _res;
						expect(res).to.have.status(200);
                        expect(res).to.be.a('object');
						return User.findById(res.body._id);
					})
					.then(function(resUser){
						expect(resUser.id).to.equal(user.id);
						expect(resUser.email).to.equal(user.email);
						expect(resUser.username).to.equal(user.username);
						expect(resUser.password).to.equal(user.password);
						expect(resUser.role).to.equal(user.role);
					});				
			});
        });        
		describe('User Post endpoint', function(){
			it('should return 201 code with matching data', function(){
				let testUser = generateUserData();		
				return chai.request(app)
					.post('/api/users')
					.send(testUser)
					.then(function(res){
						// had to find the data in the res.
						expect(res).to.have.status(201);
					    expect(res).to.be.json;
					    expect(res.body).to.be.a('object');
					    expect(res.request._data).to.include.keys(
					      'email', 'username', 'password');
					    expect(res.request._data.email.toLowerCase()).to.equal(testUser.email.toLowerCase());
					    expect(res.request._data.username).to.equal(testUser.username);
					    expect(res.request._data.password).to.not.be.null;
	    									
	    				return User.findById(res.body.id);
					});
            });
            //it('should return ')
		});

        describe('User/login Post endpoint', function (){
            it('should retrieve the auth token', () => {
               //TODO!
            }); 
            it('should not login with the correct user and wrong password', () => {

            });
        });

        // strategy for all get calls:
			// make a get call
			// determine that status and return data type are correct
			// determine that number of returned objects is equal to 
            // the number known to be in the DB (10)
            // determine that the results have the expected keys and values

        describe('aasimarHeritages GET endpoint', function(){
            it('should return heritage objects with the correct key/value pairs', function() {
                return chai.request(app)
			    // make a get call
                .get('/api/aasimarHeritages')
                .set('Authorization', `Bearer ${token}`)
                .then(function(res) {
                    // determine that status and return data type are correct
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a("array");
                    // the number known to be in the DB 
                    expect(res.body.length).to.equal(10);
                    // determine that the results have the expected keys
                    res.body.forEach((heritage => {
                        expect(heritage).to.be.a('object');
                        expect(heritage).to.include.keys('id', 'name', 'standardRacialTraits');
                        expect(heritage.standardRacialTraits).to.include.keys('blurb', 'base', 'racial');
                    }))
                });
            });
        });
        describe('bloodlines GET endpoint', function(){
            it('should return bloodline objects with the correct key/value pairs', function() {
                return chai.request(app)
			    // make a get call
                .get('/api/bloodlines')
                .set('Authorization', `Bearer ${token}`)
                .then(function(res) {
                    // determine that status and return data type are correct
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a("array");
                    // the number known to be in the DB 
                    expect(res.body.length).to.equal(10);
                    // determine that the results have the expected keys
                    res.body.forEach((bloodline => {
                        expect(bloodline).to.be.a('object');
                        expect(bloodline).to.include.keys('id', 'type', 'name', 'description', 'classSkill', 
                        'bonusSpells', 'bonusFeats', 'bloodlineArcana', 'bloodlinePowers');
                    }))
                });
            });
        });
        describe('char class GET endpoint', function(){
            it('should return charClass objects with the correct key/value pairs', function() {
                return chai.request(app)
			    // make a get call
                .get('/api/charClasses')
                .set('Authorization', `Bearer ${token}`)
                .then(function(res) {
                    // determine that status and return data type are correct
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a("array");
                    // the number known to be in the DB 
                    expect(res.body.length).to.equal(10);
                    // determine that the results have the expected keys
                    res.body.forEach((bloodline => {
                        expect(bloodline).to.be.a('object');
                        expect(bloodline).to.include.keys('id', 'name', 'classFeatures');
                        expect(bloodline.classFeatures).to.include.keys('blurb', 'alignment', 'hd', 'wealth',
                            'skills', 'classSkills', 'bab', 'goodSaves', 'proficiency', 'table');
                    }))
                });
            });
        });
        describe('deities GET endpoint', function(){
            it('should return deity objects with the correct key/value pairs', function() {
                return chai.request(app)
			    // make a get call
                .get('/api/deities')
                .set('Authorization', `Bearer ${token}`)
                .then(function(res) {
                    // determine that status and return data type are correct
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a("array");
                    // the number known to be in the DB 
                    expect(res.body.length).to.equal(10);
                    // determine that the results have the expected keys
                    res.body.forEach((deity => {
                        expect(deity).to.be.a('object');
                        expect(deity).to.include.keys('id', 'name', 'overview');
                        expect(deity.overview).to.include.keys('titles', 'home', 'alignment', 'areasOfConcern',
                            'worshipers', 'clericAlignments', 'domains', 'subdomains', 'favoredWeapon', 'symbol',
                            'sacredAnimal', 'sacredColors');
                    }))
                });
            });
        });
        describe('domains GET endpoint', function(){
            it('should return domain objects with the correct key/value pairs', function() {
                return chai.request(app)
			    // make a get call
                .get('/api/domains')
                .set('Authorization', `Bearer ${token}`)
                .then(function(res) {
                    // determine that status and return data type are correct
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a("array");
                    // the number known to be in the DB 
                    expect(res.body.length).to.equal(10);
                    // determine that the results have the expected keys
                    res.body.forEach((domain => {
                        expect(domain).to.be.a('object');
                        expect(domain).to.include.keys('id', 'name', 'type', 'description', 
                            'grantedPowers', 'domainSpells', 'subdomains');
                    }))
                });
            });
        });
        describe('feats GET endpoint', function(){
            it('should return feats objects with the correct key/value pairs', function() {
                return chai.request(app)
			    // make a get call
                .get('/api/feats')
                .set('Authorization', `Bearer ${token}`)
                .then(function(res) {
                    // determine that status and return data type are correct
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a("array");
                    // the number known to be in the DB 
                    expect(res.body.length).to.equal(10);
                    // determine that the results have the expected keys
                    res.body.forEach((feat => {
                        expect(feat).to.be.a('object');
                        expect(feat).to.include.keys('id', 'name', 'type', 'description', 
                            'specialization', 'benefit', 'progromaticBenefit', 'normal',
                            'special', 'repeatable', 'selections', 'source');
                    }))
                });
            });
        });
        describe('Races GET endpoint', function(){
            it('should return races objects with the correct key/value pairs', function() {
                return chai.request(app)
			    // make a get call
                .get('/api/races')
                .set('Authorization', `Bearer ${token}`)
                .then(function(res) {
                    // determine that status and return data type are correct
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a("array");
                    // the number known to be in the DB 
                    expect(res.body.length).to.equal(10);
                    // determine that the results have the expected keys
                    res.body.forEach((race => {
                        expect(race).to.be.a('object');
                        expect(race).to.include.keys('id', 'name', 'expand', 'standardRacialTraits');
                    }))
                });
            });
        });
        describe('Spells GET endpoint', function(){
            it('should return spells objects with the correct key/value pairs', function() {
                return chai.request(app)
			    // make a get call
                .get('/api/spells')
                .set('Authorization', `Bearer ${token}`)
                .then(function(res) {
                    // determine that status and return data type are correct
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a("array");
                    // the number known to be in the DB 
                    expect(res.body.length).to.equal(10);
                    // determine that the results have the expected keys
                    res.body.forEach((spell => {
                        expect(spell).to.be.a('object');
                        expect(spell).to.include.keys('id', 'name', 'school', 'level', 'casting', 'effect', 'description');
                    }))
                });
            });
        });
        describe('Traits GET endpoint', function(){
            it('should return traits objects with the correct key/value pairs', function() {
                return chai.request(app)
			    // make a get call
                .get('/api/traits')
                .set('Authorization', `Bearer ${token}`)
                .then(function(res) {
                    // determine that status and return data type are correct
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a("array");
                    // the number known to be in the DB 
                    expect(res.body.length).to.equal(10);
                    // determine that the results have the expected keys
                    res.body.forEach((trait => {
                        expect(trait).to.be.a('object');
                        expect(trait).to.include.keys('id', 'URL', 'Name-Original', 'Type', 'Category', 'Name', 
                            'Req-Race1', 'Req-Race2', 'Req-Class', 'Req-Align', 'Req-Other', 'Req-Faith', 'Req-Place',
                            'Description', 'Source');
                    }))
                });
            });
        });
        describe('Equipment GET endpoint', function(){
          describe('Armor GET endpoint', function(){  
            it('should return armor objects with the correct key/value pairs', function() {
              return chai.request(app)
              // make a get call
              .get('/api/armors')
              .set('Authorization', `Bearer ${token}`)
              .then(function(res) {
                // determine that status and return data type are correct
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                // the number known to be in the DB 
                expect(res.body.length).to.equal(10);
                // determine that the results have the expected keys
                res.body.forEach((armor => {
                  expect(armor).to.be.a('object');
                  expect(armor).to.include.keys('id', 'name', 'expand', 'description', 'use', 'cost', 
                    'bonus', 'maxDexBonus', 'armorCheckPenalty', 'arcaneSpellFailureChance', 'speed', 
                    'weight', 'material', 'masterwork');
                }))
              });
            });
          });
          describe('Goods and Services GET endpoint', function(){  
            it('should return G&S objects with the correct key/value pairs', function() {
              return chai.request(app)
              // make a get call
              .get('/api/goodsAndServices')
              .set('Authorization', `Bearer ${token}`)
              .then(function(res) {
                // determine that status and return data type are correct
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                // the number known to be in the DB 
                expect(res.body.length).to.equal(10);
                // determine that the results have the expected keys
                res.body.forEach((gs => {
                  expect(gs).to.be.a('object');
                  expect(gs).to.include.keys('id', 'name', 'expand', 'description', 'type', 'isCollection', 
                    'cost', 'weight');
                }))
              });
            });
          });
          describe('Trade Goods GET endpoint', function(){  
            it('should return trade goods objects with the correct key/value pairs', function() {
              return chai.request(app)
              // make a get call
              .get('/api/tradeGoods')
              .set('Authorization', `Bearer ${token}`)
              .then(function(res) {
                // determine that status and return data type are correct
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                // the number known to be in the DB 
                expect(res.body.length).to.equal(10);
                // determine that the results have the expected keys
                res.body.forEach((tg => {
                  expect(tg).to.be.a('object');
                  expect(tg).to.include.keys('id', 'name', 'expand', 'description', 'cost', 'item');
                }))
              });
            });
          });
          describe('Weapons GET endpoint', function(){  
            it('should return trade goods objects with the correct key/value pairs', function() {
              return chai.request(app)
              // make a get call
              .get('/api/weapons')
              .set('Authorization', `Bearer ${token}`)
              .then(function(res) {
                // determine that status and return data type are correct
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.a("array");
                // the number known to be in the DB 
                expect(res.body.length).to.equal(10);
                // determine that the results have the expected keys
                res.body.forEach((weapon => {
                  expect(weapon).to.be.a('object');
                  expect(weapon).to.include.keys('id', 'name', 'expand', 'description', 'category', 'use', 
                    'cost', 'dmgS', 'dmgM', 'critical', 'range', 'weight', 'type', 'special', 'material', 'masterwork');
                }))
              });
            });
          });
        });
        describe('Druid GET endpoint', function(){  
          it('should return Druid option objects with the correct key/value pairs', function() {
            return chai.request(app)
            // make a get call
            .get('/api/druidsNatureBonds')
            .set('Authorization', `Bearer ${token}`)
            .then(function(res) {
              // determine that status and return data type are correct
              expect(res).to.have.status(200);
              expect(res).to.be.json;
              expect(res.body).to.be.a("array");
              // the number known to be in the DB 
              expect(res.body.length).to.equal(20);
              // determine that the results have the expected keys
              res.body.forEach((options => {
                expect(options).to.be.a('object');
                if(options.startingStatistics === undefined){
                  expect(options).to.include.keys('id', 'name', 'type', 'description', 
                    'grantedPowers', 'domainSpells', 'subdomains');
                } else {
                  expect(options).to.include.keys('id', 'name', 'type', 'startingStatistics', 'advancement');
                }
              }))
            });
          });
        });
    });

/*      it('should 200 on GET requests', function() {
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
    return User.create(seedUserData);
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

function seedBloodlinesData(){
    console.info('seeding bloodline data');
    const seedData = [];
  
    for (let i=1; i<=10; i++) {
      seedData.push(generateBloodlinesData());
    }
    // this will return a promise
    return Bloodline.insertMany(seedData);
}

function generateBloodlinesData(){
    return {
        type: "bloodline",
        name: faker.company.companyName(),
        description: faker.lorem.text,
        classSkill: faker.lorem.sentence,
        bonusSpells: generateSpellsArray(),
        bonusFeats: generateFeatsArray(8),
        bloodlineArcana: faker.lorem.sentence,
        bloodlinePowers: {
            description: faker.lorem.text,
            list: [{
                name:"bloodline",
                type:"powers",
                level:4,
                description:"everyone"
            },{
                name:"bloodline",
                type:"powers",
                level:4,
                description:"everyone"
            }],
        },
    };
}
function generateSpellsArray(){
    let array = [];
    let numbers = ["3rd", "5th", "7th", "9th", "11th", "13th", "15th", "17th", "19th"]
    for(let i = 0; i < numbers.length; i++){
        let spellObject = {};
        spellObject[numbers[i]] = faker.lorem.sentence;
        array.push(spellObject);
    }
    return array;
}
function generateFeatsArray(num){
    let array = [];
    for(let i=0;i<num;i++){
        array.push({
            name: faker.lorem.sentence,
        })
    };
    return array;
}
function generateAnArrayOfStrings(num){
    let array = [];
    for(let i=0;i<num;i++){
        let string = faker.lorem.sentence;
        array.push(string);
    };
    return array;
}

function seedCharClassesData(){
    console.info('seeding char class data');
    const seedData = [];
  
    for (let i=1; i<=10; i++) {
      seedData.push(generateCharClassesData());
    }
    // this will return a promise
    return CharClass.insertMany(seedData);
}
function generateCharClassesData(){
    return {
        name: faker.company.companyName(),
        classFeatures: {
            blurb: faker.lorem.sentence,
            alignment: faker.lorem.sentence,
            hd: faker.random.number({min:1, max:12}),
            wealth:{
                number:faker.random.number({min:1, max:10}),
                type:6,
            },
            skills:faker.random.number({min:2, max:8}),
            classSkills:generateAnArrayOfStrings(8),
            bab: faker.lorem.sentence,
            goodSaves:generateAnArrayOfStrings(2),
            proficiency:generateAnArrayOfStrings(10),
            table:generateAnArrayOfStrings(20),  // This is really a filler 
        }
    };
}

function seedDeitiesData(){
    console.info('seeding deities data');
    const seedData = [];
  
    for (let i=1; i<=10; i++) {
      seedData.push(generateDeitiesData());
    }
    // this will return a promise
    return Deity.insertMany(seedData);
}
function generateDeitiesData(){
    return {
        name: faker.company.companyName(),
        overview: {
            titles: generateAnArrayOfStrings(3),
            home: generateAnArrayOfStrings(2),
            alignment: faker.lorem.sentence,
            areasOfConcern:generateAnArrayOfStrings(5),
            worshipers:generateAnArrayOfStrings(5),
            clericAlignments:generateAnArrayOfStrings(3),
            domains:generateAnArrayOfStrings(5),
            subdomains:generateAnArrayOfStrings(5),
            favoredWeapon:generateAnArrayOfStrings(2),
            symbol:generateAnArrayOfStrings(2),
            sacredAnimal:generateAnArrayOfStrings(2),
            sacredColors:generateAnArrayOfStrings(2),
        }
    };
}

function seedDomainsData(){
    console.info('seeding domains data');
    const seedData = [];
  
    for (let i=1; i<=10; i++) {
      seedData.push(generateDomainsData());
    }
    // this will return a promise
    return Domain.insertMany(seedData);
}
function generateDomainsData(){
    return {
        type: faker.lorem.sentence,
        name: faker.company.companyName(),
        description: faker.lorem.text,
        grantedPowers: {
            name: faker.company.companyName(),
            type: faker.lorem.sentence,
            level: faker.random.number({min:1, max:10}),           
            description: faker.lorem.text,            
        },
        domainSpells:[
            
        ],
        subdomains:generateAnArrayOfStrings(4),
    };    
}

function seedFeatsData(){
    console.info('seeding feats data');
    const seedData = [];
  
    for (let i=1; i<=10; i++) {
      seedData.push(generateFeatsData());
    }
    // this will return a promise
    return Feat.insertMany(seedData);
}
function generateFeatsData(){
    return {
        name: faker.company.companyName(),
        specialization: faker.lorem.sentence,
        type: faker.lorem.sentence,
        description: faker.lorem.text,
        benefit: faker.lorem.sentence,
        progromaticBenefit: null,
        normal: faker.lorem.sentence,
        special: faker.lorem.sentence,
        repeatable: true,
        selections: generateAnArrayOfStrings(3),
        source: faker.lorem.sentence,
      };    
}

function seedRacesData(){
    console.info('seeding races data');
    const seedData = [];
  
    for (let i=1; i<=10; i++) {
      seedData.push(generateRacesData());
    }
    // this will return a promise
    return Race.insertMany(seedData);
}
function generateRacesData(){
    return {
        name: faker.company.companyName(),
        expand: false,
        type: faker.lorem.sentence,
        standardRacialTraits:{
            blurb:faker.lorem.sentence,
            base:{
                abilityScoreRacialBonuses:faker.lorem.sentence,
                abilityScoreRacialBonusArray:generateAnArrayOfBonusObjects(3), 
                skillRacialBonusArray:generateAnArrayOfBonusObjects(2),
                age:faker.lorem.sentence,
                size:faker.lorem.sentence,
                type:faker.lorem.sentence,
                speed:faker.lorem.sentence,
                languages:{
                    start:generateAnArrayOfStrings(3),
                    learn:generateAnArrayOfStrings(5),
                },
            },
            racial:generateAnArrayOfDoubleStringObjects(5),
            selections: false,
        }
    };
}
function generateAnArrayOfBonusObjects(num){
    let array = [];
    for(let i=0; i<num; i++){
        array.push(generateBonusObject());
    }
    return array;
}
function generateBonusObject(){
    return {
        stat: faker.lorem.sentence,
        value:faker.random.number({min:-2, max:2}),
    }
}
function generateAnArrayOfDoubleStringObjects(num){
    let array = [];
    for(let i=0; i<num; i++){
        array.push(generateDoubleStringObject());
    }
    return array;
}
function generateDoubleStringObject(){
    return{
        name:faker.lorem.sentence,
        description: faker.lorem.sentence,
    }
}

function seedSpellsData(){
    console.info('seeding spells data');
    const seedData = [];
  
    for (let i=1; i<=10; i++) {
      seedData.push(generateSpellsData());
    }
    // this will return a promise
    return Spell.insertMany(seedData);
}
function generateSpellsData(){
    return {
        name: faker.company.companyName(),
        school:{
            school:faker.lorem.sentence,
            subSchool:faker.lorem.sentence,
            descriptor:faker.lorem.sentence,
        },
        level:generateAnArrayOfStringNumberObjects(5),
        casting:{
            castingTime:faker.lorem.sentence,
            components:generateAnArrayOfStrings(2),
        },
        effect:{
            range:faker.lorem.sentence,
            target:faker.lorem.sentence,
            duration:faker.lorem.sentence,
            savingThrow:generateAnArrayOfStrings(1),
            spellResistance:faker.lorem.sentence,
        },
        description:generateAnArrayOfStrings(2),

    }
};
function generateAnArrayOfStringNumberObjects(num){
    let array = [];
    for(let i=0; i<num; i++){
        array.push({
            class:faker.lorem.sentence,
            num:faker.random.number({min:0, max:9}),
        });
    }
    return array;
}

function seedTraitsData(){
    console.info('seeding spells data');
    const seedData = [];
  
    for (let i=1; i<=10; i++) {
      let data = generateTraitsData();
      seedData.push(data);
    }
    // this will return a promise
    return Trait.insertMany(seedData);
}
function generateTraitsData(){
    return {
        URL:faker.lorem.sentence,
        'Name-Original':faker.lorem.sentence,
        Type:faker.lorem.sentence,
        Category:faker.lorem.sentence,
        Name:faker.lorem.sentence,
        'Req-Race1':faker.lorem.sentence,
        'Req-Race2':faker.lorem.sentence,
        'Req-Class':faker.lorem.sentence,
        'Req-Align':faker.lorem.sentence,
        'Req-Other':faker.lorem.sentence,
        'Req-Faith':faker.lorem.sentence,
        'Req-Place':faker.lorem.sentence,
        Description:faker.lorem.text,
        Source:faker.lorem.sentence,
    }
}

function seedEquipmentData(){
  console.info('seeding Equipment data');
}
function seedArmorData(){
  console.info('seeding Armor data');
  const seedData = [];

  for (let i=1; i<=10; i++) {
    let data = generateArmorData();
    seedData.push(data);
  }
  // this will return a promise
  return Armor.insertMany(seedData);
}
function seedGoodsAndServicesData(){
  console.info('seeding Goods and Services data');
  const seedData = [];

  for (let i=1; i<=10; i++) {
    let data = generateGoodsAndServicesData();
    seedData.push(data);
  }
  // this will return a promise
  return GoodsAndService.insertMany(seedData);
}
function seedTradeGoodsData(){
  console.info('seeding Trade Goods data');
  const seedData = [];

  for (let i=1; i<=10; i++) {
    let data = generateTradeGoodsData();
    seedData.push(data);
  }
  // this will return a promise
  return TradeGoods.insertMany(seedData);
}
function seedWeaponData(){
  console.info('seeding Weapons data');
  const seedData = [];

  for (let i=1; i<=10; i++) {
    let data = generateWeaponsData();
    seedData.push(data);
  }
  // this will return a promise
  return Weapon.insertMany(seedData);
}
function generateArmorData(){
  return{
    name: faker.company.companyName(),
    expand: false,
    description: faker.lorem.text,
    use: faker.lorem.sentence,
    cost: faker.random.number({min:1,max:100}),
    bonus:{
      armor:faker.random.number({min:1,max:10}),
    },
    maxDexBonus: faker.random.number({min:0,max:10}),
    armorCheckPenalty: faker.random.number({min:0,max:5}),
    arcaneSpellFailureChance:faker.random.number({min:0,max:100}),
    armorCheckPenalty: faker.random.number({min:0,max:5}),
    speed:{
      20:faker.random.number({min:5,max:20}),
      30:faker.random.number({min:5,max:30}),
    },
    weight:faker.random.number({min:1,max:15}),
    material:faker.lorem.sentence,
    masterwork:false,
  }
}
function generateGoodsAndServicesData(){
  return{
    name: faker.company.companyName(),
    expand: false,
    description: faker.lorem.text,
    type: faker.lorem.sentence,
    isCollection:{
      kit:false,
      included:[],
    },
    cost:faker.random.number({min:1,max:100}),
    weight:faker.random.number({min:1,max:15}),
  }
}
function generateTradeGoodsData(){
  return{  
    name: faker.company.companyName(),
    expand: false,
    description: faker.lorem.text,
    cost:faker.random.number({min:1,max:100}),
    item: faker.lorem.sentence,
  }
}
function generateWeaponsData(){
  return{
    name: faker.company.companyName(),
    expand: false,
    description: faker.lorem.text,
    category:faker.lorem.sentence,
    use: faker.lorem.sentence,
    cost: faker.random.number({min:1,max:100}),
    dmgS:['1d3'],
    dmgM:['1d4'],
    critical:faker.lorem.sentence,
    range:faker.random.number({min:10,max:100}),
    weight:faker.random.number({min:1,max:15}),
    type:faker.lorem.sentence,
    special:[],
    material:faker.lorem.sentence,
    masterwork:false,
  }
}

function seedDruidData(){
  console.info('seeding Druid Natural Bond data');
  const seedAnimalCompanionData = [];

  for(let i=0; i<10; i++){
    let data = {};
    // animal companion
    data = generateAnimalCompanionData();
    seedAnimalCompanionData.push(data);
  }

  return AnimalCompanion.insertMany(seedAnimalCompanionData);
}

function generateAnimalCompanionData(){
  return {
    type:"animal companion",
    name:faker.company.companyName(),
    startingStatistics:{
      size:faker.lorem.sentence,
      speed:"50",
      ac:{
        amount:faker.random.number({min:1,max:10}),
        type:faker.lorem.sentence,
      },
      attack:[{
        type:faker.lorem.sentence,
        damage:faker.lorem.sentence,
        special:faker.lorem.sentence,
      }],
      abilityScores:{
        strength:faker.random.number({min:7,max:18}),
        dexterity:faker.random.number({min:7,max:18}),
        constitution:faker.random.number({min:7,max:18}),
        intelligence:faker.random.number({min:7,max:18}),
        wisdom:faker.random.number({min:7,max:18}),
        charisma:faker.random.number({min:7,max:18}),
      },
      specialQualitites:["low-light vision", "scent"]
    },
    advancement:{
      level:7,
      size:faker.lorem.sentence,
      ac:{
        amount:faker.random.number({min:1,max:10}),
        type:faker.lorem.sentence,
      },
      attack:[{
        type:faker.lorem.sentence,
        damage:faker.lorem.sentence,
      }],
      abilityScores:{
        strength:faker.random.number({min:1,max:10}),
        dexterity:faker.random.number({min:1,max:10}),
        constitution:faker.random.number({min:-2,max:10}),
      }            
    }
  }
}





// this function deletes the entire database.
// we'll call it in an `afterEach` block below
// to ensure data from one test does not stick
// around for next one
function tearDownDb() {
    console.warn('Deleting database');
    return mongoose.connection.dropDatabase();
}