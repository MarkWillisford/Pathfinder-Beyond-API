const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Races} = require('../models/race.model');

// we're going to add some races to Races
// so there's some data to look at
Races.create('Elf');
Races.create('Human');

// send back JSON representation of all races
// on GET requests to root
router.get('/', (req, res) => {
  res.json(Races.get());
});

module.exports = router;