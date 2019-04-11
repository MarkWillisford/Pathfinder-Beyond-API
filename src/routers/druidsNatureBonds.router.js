'use strict';

const express = require('express');
const passport = require('passport');
const async = require("async");
const router = express.Router();

require('../strategy/jwt.strategy')(passport);

const Domain = require('../models/domain.model');
const AnimalCompanion = require('../models/animalCompanion.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    let druidNaturalBondOptions = [];

    Domain.find().then((domains) => {
      // loaded
      domains.map(domain => {
        druidNaturalBondOptions.push({
          id: domain._id,
          type: domain.type,
          name: domain.name,
          description: domain.description,
          grantedPowers: domain.grantedPowers,
          domainSpells: domain.domainSpells,
          subdomains: domain.subdomains,
        });
      })
    }, () => {
      // failed
      console.log("Domains failed");
    });

    AnimalCompanion.find().then((animalCompanions) => {
      // loaded
      animalCompanions.map(animalCompanion => {
        druidNaturalBondOptions.push({
          id: animalCompanion._id,
          type: animalCompanion.type,
          name: animalCompanion.name,
          startingStatistics:animalCompanion.startingStatistics,
          advancement:animalCompanion.advancement,
        })
      })
    }, () => {
      // failed
      console.log("AnimalCompanions failed");
    });

    Promise.all([Domain.find(), AnimalCompanion.find()]).then(function() {
      // all loaded
      res.json(druidNaturalBondOptions);      
    }, function() {
      // one or more failed
      console.log("something failed"); 
    });
  });  

module.exports = router;