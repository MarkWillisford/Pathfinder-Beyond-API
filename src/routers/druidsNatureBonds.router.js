const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {DruidNatureBonds} = require('../models/druidNatureBond.model');

// we're going to add some races to Races
// so there's some data to look at
DruidNatureBonds.create();
DruidNatureBonds.create();

// send back JSON representation of all races
// on GET requests to root
router.get('/', (req, res) => {
  res.json(DruidNatureBonds.get());
});

module.exports = router;