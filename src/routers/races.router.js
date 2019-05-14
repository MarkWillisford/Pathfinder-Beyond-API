'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

require('../strategy/jwt.strategy')(passport);

const Race = require('../models/race.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    Race
    .find()
    .then(races => {
      res.json(races.map(race => {
        return {
          id: race._id,
          name: race.name,
          expand: race.expand,
          standardRacialTraits: race.standardRacialTraits,
        };
      }));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    });
  });

module.exports = router;