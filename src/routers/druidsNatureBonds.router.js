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
















/*       // Load domains
    Domain.find().then(domains => {
      return(domains.map(domain => {
        console.log("in domains pushing . . .    ")
        druidNaturalBondOptions.push({
          id: domain._id,
          type: domain.type,
          name: domain.name,
          description: domain.description,
          grantedPowers: domain.grantedPowers,
          domainSpells: domain.domainSpells,
          subdomains: domain.subdomains,
        });
      }))
    })
    .then(() => {
      // Load animalCompanion
      AnimalCompanion.find().then(animalCompanions => {
        return(animalCompanions.map(animalCompanion => {
          console.log("in animal companions pushing . . .    ")
          druidNaturalBondOptions.push({
            id: animalCompanion._id,
            name: animalCompanion.name,
          })
        }));
      })
    }) 
    .then(() => {
      console.log(druidNaturalBondOptions.length);
    }); */

















   /*  async.parallel(tasks, function(err) { //This function gets called after the two tasks have called their "task callbacks"
      if (err) return next(err); //If an error occurred, let express handle it by calling the `next` function
      // Here `locals` will be an object with `users` and `colors` keys
      // Example: `locals = {users: [...], colors: [...]}`
      console.log(druidNaturalBondOptions);
    }); */



    /* Domain
    .find()
    .then(domains => {
      res.json(domains.map(domain => {
        druidNaturalBondOptions.push({
          id: domain._id,
          type: domain.type,
          name: domain.name,
          description: domain.description,
          grantedPowers: domain.grantedPowers,
          domainSpells: domain.domainSpells,
          subdomains: domain.subdomains,
        });
      }));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    });
    AnimalCompanion
    .find()
    .then(animalCompanions => {
      res.json(animalCompanions.map(animalCompanion => {
        druidNaturalBondOptions.push({
          id: animalCompanion._id,
          name: animalCompanion.name,
        })
      }));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }); */
    // return( druidNaturalBondOptions );
  });






  

module.exports = router;