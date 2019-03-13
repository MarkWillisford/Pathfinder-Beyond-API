const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {AasimarHeritages} = require('../models/aasimarHeritage.model');

// we're going to add some races to Races
// so there's some data to look at
AasimarHeritages.create();
AasimarHeritages.create();

// send back JSON representation of all races
// on GET requests to root
router.get('/', (req, res) => {
  res.json(AasimarHeritages.get());
});

module.exports = router;