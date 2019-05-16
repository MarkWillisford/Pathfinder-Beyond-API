'use strict';

const express = require('express');					 
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('../config/main.config');
const errorsParser = require('../helpers/errorParser.helper');
const disableWithToken = require('../middlewares/disableWithToken.middleware').disableWithToken;
const requiredFields = require('../middlewares/requiredFields.middleware');

const router = express.Router();

const User = require('../models/user.model');
const Character = require('../models/character.model');

// This will accept a user and create a new token
const createAuthToken = function(user) {
/*   return jwt.sign({user}, config.SECRET, {
    subject: user.username,
    expiresIn: config.EXPIRATION,
    //algorithm: 'HS256'
  }); */
  const tokenPayload = {
    _id: user._id,
    email: user.email,
    username: user.username,
    role: user.role,
    firstName:user.firstName,
    lastName: user.lastName,
  }; // send it off in a token
  const token = jwt.sign(tokenPayload, config.SECRET, {
      expiresIn: config.EXPIRATION,
  }); // and return it
  return { token: token, _id: tokenPayload._id };
};

// This is our post to the /users endpoint
router.route('/')
	// first it tries the middleware function disableWithToken, which checks to see if 
	// there is an authorization token in the header, if so it returns with an error
	// if we pass that, we call the requiredFields middleware which checks 
	.post(disableWithToken, requiredFields('email', 'username', 'password', 'firstName' ,'lastName'), (req, res) => {
		// assuming it passes all tests, we create a user from the req data
		User.create({
			email: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			password: req.body.password,
			username: req.body.username,
		})
		// assuming no errors we return a 201 created code

        .then(user => {
            // if we got here, create a token payload (user)
            const tokenPayload = {
                _id: user._id,
                email: user.email,
                username: user.username,
                role: user.role,
            }; // send it off in a token
            const token = jwt.sign(tokenPayload, config.SECRET, {
                expiresIn: config.EXPIRATION,
            }); // and return it
            return res.status(201).json({ token: token, _id: tokenPayload._id });
        })
		// if there are errors we catch them and send a 400 code and generate an error
		.catch(report => res.status(400).json(errorsParser.generateErrorResponse(report)));
	})
	// finally we get the passport we need to set the session and return 200
	.get(passport.authenticate('jwt', { session: false }), (req, res) => {
		res.status(200).json(req.user);
});

// To access the login page, we run through the disableWithToken
// and the requiredFields
router.post('/login', disableWithToken, requiredFields('email', 'password'), (req, res) => {
  console.log("logging in");
  // Assuming you have both we look for a user with that email
    User.findOne({ email: req.body.email })
    .then((foundResult) => {
    	// if we didn't find it
        if (!foundResult) {
          console.log("bad user name");
          return res.status(400).json({
              generalMessage: 'Email or password is incorrect',       
          });                                                         
        }
        // if we did we continue
        return foundResult.comparePassword(req.body.password);
    })
    //.then((foundUser) => {
      //console.log(foundUser);

    	// okay we found a user, compare the password
        //foundUser.comparePassword(req.body.password)
        .then((foundUser) => {
          console.log(foundUser+" comparing passwords");
        	// if false
            if (!foundUser) {
              console.log(req.body.password);
              console.log("bad password");
            	// return an error, exiting the chain
                return res.status(400).json({
                    generalMessage: 'Email or password is incorrect',
                });
            }
            // if we got here, create a token payload (user)
            const tokenPayload = {
                _id: foundUser._id,
                email: foundUser.email,
                username: foundUser.username,
                role: foundUser.role,
                firstName:foundUser.firstName,
                lastName: foundUser.lastName,
            }; // send it off in a token
            const token = jwt.sign(tokenPayload, config.SECRET, {
                expiresIn: config.EXPIRATION,
            }); // and return it
            return res.json({ token: token, _id: tokenPayload._id });
        })
    //})
    .catch(report => res.status(400).json(errorsParser.generateErrorResponse(report)));
});

const jwtAuth = passport.authenticate('jwt', {session: false});
// The user exchanges a valid JWT for a new one with a later expiration
router.post('/refresh', jwtAuth, (req, res) => {
  console.log("refreshing token");
  const authToken = createAuthToken(req.user);
  console.log(`sending back `);
  console.log(authToken);
  res.json(authToken);
});

// This route is to save ( post ) and load (get) finished characters
router.route('/characters')
  // the .post()
  .post(passport.authenticate('jwt', { session: false }), requiredFields('user_id', 'characterStats', 
    'charClass', 'featSlots', 'traitSlots', 'preferences', 'race', 'details', 'goldMethod', 'gold',
    'availableGold', 'gear', 'abilityScoreGenerationMethod'),(req, res) => {
    // assuming it passes all tests, we find a user from the req data
    User.findById(req.body.user_id)
    .then(user => {
      if(user){
        Character.create({
          //id: req.body._id,
          userID:req.body.user_id,
          characterStats: req.body.characterStats,
          charClass: req.body.charClass,
          featSlots: req.body.featSlots,
          traitSlots: req.body.traitSlots,
          preferences: req.body.preferences,
          race: req.body.race,
          details: req.body.details,
          goldMethod: req.body.goldMethod,
          gold: req.body.gold,
          availableGold: req.body.availableGold,
          gear: req.body.gear,
          abilityScoreGenerationMethod: req.body.abilityScoreGenerationMethod,
        })
        .then(character => res.status(201).json({
          id: character._id,
          characterStats: character.characterStats,
          charClass: character.charClass,
          featSlots: character.featSlots,
          traitSlots: character.traitSlots,
          preferences: character.preferences,
          race: character.race,
          details: character.details,
          goldMethod: character.goldMethod,
          gold: character.gold,
          availableGold: character.availableGold,
          gear: character.gear,
          abilityScoreGenerationMethod: character.abilityScoreGenerationMethod,
        }))
        .catch(err => {
          console.error(err);
          res.status(500).json({ message: "Internal server error" });
        });
      } else {
        const message = `User not found`;
        console.error(message);
        return res.status(400).send(message);
      }
    })    
		// if there are errors we catch them and send a 400 code and generate an error
		.catch(report => res.status(400).json(errorsParser.generateErrorResponse(report)));
  })

    // first the .get()
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findById(req.user._id)
  .then(user => {
    if(user){
      // turn the id into the right data type to search for
      let myObjectID = mongoose.Types.ObjectId(user._id);
      const filters = { 
        userID: user._id,
      };
      Character.find(filters)
      .then(characters => res.json(characters))
      .catch(err => {
        console.error(err);
        res.status(500).json({error: "something went terribly wrong"});
      });
    } else {      
      const message = `User not found which should never happen, contact your system admin`;
      console.error(message);
      return res.status(400).send(message);
    }
  })
  
  
/*   Character.find().then(characters => {
    res.json(characters.map(character => {
      return {
        id: character._id,
        characterStats: character.characterStats,
        charClass: character.charClass,
        featSlots: character.featSlots,
        traitSlots: character.traitSlots,
        preferences: character.preferences,
        race: character.race,
        details: character.details,
        goldMethod: character.goldMethod,
        gold: character.gold,
        availableGold: character.availableGold,
        gear: character.gear,
        abilityScoreGenerationMethod: character.abilityScoreGenerationMethod,
      };
    }));
  }) */
  .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
  })
});
module.exports = { router }; 