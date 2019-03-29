'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

require('../strategy/jwt.strategy')(passport);

const Trait = require('../models/trait.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    Trait
      .find()
      .then(traits => {
        console.log(traits);
        res.json(traits.map(trait => {
          return {
            id: trait._id,
            URL:trait.URL,
            'Name-Original':trait['Name-Original'],
            Type:trait.Type,
            Category:trait.Category,
            Name:trait.Name,
            'Req-Race1':trait['Req-Race1'],
            'Req-Race2':trait['Req-Race2'],
            'Req-Class':trait['Req-Class'],
            'Req-Align':trait['Req-Align'],
            'Req-Other':trait['Req-Other'],
            'Req-Faith':trait['Req-Faith'],
            'Req-Place':trait['Req-Place'],
            Description:trait.Description,
            Source:trait.Source,
          };
        }));
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      });
  });

module.exports = router;