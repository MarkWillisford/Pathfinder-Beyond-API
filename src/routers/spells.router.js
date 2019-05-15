'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

require('../strategy/jwt.strategy')(passport);

const Spell = require('../models/spell.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    Spell
      .find()
      .then(spells => {
        res.json(spells.map(spell => {
          return {
            id: spell._id,
            name: spell.name,
            school: spell.school,
            level: spell.level,
            casting: spell.casting,
            effect: spell.effect,
            description: spell.description,
          };
        }));
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      });
  });

module.exports = router;