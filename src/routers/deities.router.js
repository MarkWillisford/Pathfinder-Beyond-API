'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

require('../strategy/jwt.strategy')(passport);

const Deity = require('../models/deity.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    Deity
      .find()
      .then(deities => {
        res.json(deities.map(deity => {
          return {
            id: deity._id,
            name: deity.name,
            overview: deity.overview,
          };
        }));
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      });
  });

module.exports = router;