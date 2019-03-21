'use strict';

const express = require('express');					
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/main.config');
const User = require('../models/user.model');
//const mongoose = require('mongoose');
const errorsParser = require('../helpers/errorParser.helper');
const disableWithToken = require('../middlewares/disableWithToken.middleware').disableWithToken;
const requiredFields = require('../middlewares/requiredFields.middleware');

//require('../strategy/jwt.strategy')(passport);

const router = express.Router();

// This is our post to the /users endpoint
router.route('/')
	// first it tries the middleware function disableWithToken, which checks to see if 
	// there is an authorization token in the header, if so it returns with an error
	// if we pass that, we call the requiredFields middleware which checks 
	.post(disableWithToken, requiredFields('email', 'username', 'password'), (req, res) => {
		// assuming it passes all tests, we create a user from the req data
		User.create({
			email: req.body.email,
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
	// Assuming you have both we look for a user with that email
    User.findOne({ email: req.body.email })
    .then((foundResult) => {
    	// if we didn't find it
        if (!foundResult) {
            return res.status(400).json({
                generalMessage: 'Email or password is incorrect',       // <!-- if this is returned the following
            });                                                         // then statement breaks
        }
        // if we did we continue
        return foundResult;
    })
    .then((foundUser) => {
    	// okay we found a user, compare the password
        foundUser.comparePassword(req.body.password)
        .then((comparingResult) => {
        	// if false
            if (!comparingResult) {
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
                monthlyIncomeGoal: foundUser.monthlyIncomeGoal,
                monthlyHourlyGoal: foundUser.monthlyHourlyGoal,
                hourlyWage: foundUser.hourlyWage
            }; // send it off in a token
            const token = jwt.sign(tokenPayload, config.SECRET, {
                expiresIn: config.EXPIRATION,
            }); // and return it
            return res.json({ token: token, _id: tokenPayload._id });
        });
    })
    .catch(report => res.status(400).json(errorsParser.generateErrorResponse(report)));
}); 

/* // This route is for the home page summery. It returns both shifts and paychecks within the last period of time. 
router.route('/summery')
    .get(passport.authenticate('jwt', { session: false }), (req, res) => {
        let obj = {};
        User.findById(req.user._id)
            .then(user => {
                if(user){
                    // turn the id into the right data type to search for
                    let myObjectID = mongoose.Types.ObjectId(user._id);
                    const filters = { 
                        user_id: user._id,
                    };
                    // adding the ability to search for an optional range
                    if(req.query['start']){
                        filters['date'] = {
                            $gte: req.query.start,
                            $lt: req.query.end
                        };                        
                    };

                    Shift.find(filters)  
                        .then(shifts => {
                            obj.shifts = shifts;
                            const filters = { 
                                user_id: user._id,
                            };
                            // adding the ability to search for an optional range
                            if(req.query['start']){
                                filters['dateOfCheck'] = {
                                    $gte: req.query.start,
                                    $lt: req.query.end
                                };                        
                            };

                            Paycheck.find(filters)
                                .then(paychecks => {
                                    obj.paychecks = paychecks;
                                    res.json(obj);
                                })
                                .catch(err => {
                                    console.error(err);
                                    res.status(500).json({ error: 'something went terribly wrong with Paychecks' });
                                });
                        })
                        .catch(err => {
                            console.error(err);
                            res.status(500).json({ error: 'something went terribly wrong with shifts' });
                        });  
                } else {
                const message = `User not found which should never happen, contact your system admin`;
                console.error(message);
                return res.status(400).send(message);
                }
            })
        // if there are errors we catch them and send a 400 code and generate an error
        .catch(report => res.status(400).json(errorsParser.generateErrorResponse(report)));
    }); */

module.exports = { router }; 