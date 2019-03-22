'use strict';

const express = require('express');					
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/main.config');
const mongoose = require('mongoose');
const errorsParser = require('../helpers/errorParser.helper');
const disableWithToken = require('../middlewares/disableWithToken.middleware').disableWithToken;
const requiredFields = require('../middlewares/requiredFields.middleware');

require('../strategy/jwt.strategy')(passport);
const router = express.Router();

const { AasimarHeritage } = require('../models/aasimarHeritage.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    
  console.log("In get function");
  AasimarHeritage
    .find()
    .then(aasimarHeritages => {
      console.log(aasimarHeritages);
      res.json(aasimarHeritages.map(aasimarHeritage => {
        return {
          id: aasimarHeritage._id,
          name:aasimarHeritage.name,
          standardRacialTraits: aasimarHeritage.standardRacialTraits
        };
      }));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    });
  });

module.exports = router;