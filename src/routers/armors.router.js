'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

require('../strategy/jwt.strategy')(passport);

const Armor = require('../models/armor.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    Armor
      .find()
      .then(armors => {
        res.json(armors.map(armor => {
          return {
            id: armor._id,
            name: armor.name,
            expand: armor.expand, 
            description:armor.description, 
            use:armor.use, 
            cost:armor.cost, 
            bonus:armor.bonus,
            maxDexBonus:armor.maxDexBonus,
            armorCheckPenalty:armor.armorCheckPenalty,
            arcaneSpellFailureChance:armor.arcaneSpellFailureChance,
            speed:armor.speed,
            weight:armor.weight,
            material:armor.material,
            masterwork:armor.masterwork,
          };
        }));
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      });
  });

  module.exports = router;