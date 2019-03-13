const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Bloodlines} = require('../models/bloodline.model');

// we're going to add some races to Races
// so there's some data to look at
Bloodlines.create();
Bloodlines.create();

// send back JSON representation of all races
// on GET requests to root
router.get('/', (req, res) => {
  res.json(Bloodlines.get());
});

module.exports = router;