'use strict';

const express = require('express');		
const passport = require('passport');
const router = express.Router();	

require('../strategy/jwt.strategy')(passport);

const CharClass = require('../models/charClass.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    CharClass
    .find()
    .then(charClasses => {
      res.json(charClasses.map(charClass => {
        return {
          _id: charClass._id,
          name: charClass.name,
          classFeatures: charClass.classFeatures,          
        };
      }));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    });
  });

module.exports = router;