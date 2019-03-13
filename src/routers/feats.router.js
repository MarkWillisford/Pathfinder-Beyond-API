const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Feats} = require('../models/feat.model');

// we're going to add some races to Races
// so there's some data to look at
Feats.create();
Feats.create();

// send back JSON representation of all races
// on GET requests to root
router.get('/', (req, res) => {
  res.json(Feats.get());
});

module.exports = router;