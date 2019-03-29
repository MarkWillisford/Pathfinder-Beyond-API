'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

require('../strategy/jwt.strategy')(passport);

const Feat = require('../models/feat.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    Feat
      .find()
      .then(feats => {
        res.json(feats.map(feat => {
          return {
            id: feat._id,
            name: feat.name,
            specialization: feat.specialization,
            type: feat.type,
            description: feat.description,
            benefit: feat.benefit,
            progromaticBenefit: feat.progromaticBenefit,
            normal: feat.normal,
            special: feat.special,
            repeatable: feat.repeatable,
            selections: feat.selections,
            source: feat.source,
          };
        }));
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      });
  });

module.exports = router;