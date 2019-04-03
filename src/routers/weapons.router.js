'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

require('../strategy/jwt.strategy')(passport);

const Weapon = require('../models/weapon.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    Weapon
    .find()
    .then(weapons => {
      res.json(weapons.map(weapon => {
        return {
          id: weapon._id,
          name: weapon.name,
          expand: weapon.expand,
          description: weapon.description,
          category: weapon.category,
          use: weapon.use,
          cost: weapon.cost,
          dmgS: weapon.dmgS,
          dmgM: weapon.dmgM,
          critical: weapon.critical,
          range: weapon.range,
          weight: weapon.weight,
          type: weapon.type,
          special: weapon.special,
          material: weapon.material,
          masterwork: weapon.masterwork,
        };
      }));
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    });
  });

  module.exports = router;