const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {AasimarHeritage} = require('../models/aasimarHeritage.model');

/* // we're going to add some races to Races
// so there's some data to look at
AasimarHeritages.create("Aasimar - Garuda-Blooded, Plumekith", {
  "blurb":"Creatures blessed with a celestial bloodline, aasimars seem human except for some exotic quality that betrays their otherworldly origin. While aasimars are nearly always beautiful, something simultaneously a part of and apart from humanity, not all of them are good, though very few are evil. Their shimmering avian features make plumekith instantly recognizable. Though they can act rashly, plumekith never shirk their duty after making a commitment.",
  "base":{"abilityScoreRacialBonuses": "+2 Dexterity, +2 Wisdom", "abilityScoreRacialBonusArray":[{"stat":"dexterity", "value":2},{"stat":"wisdom", "value":2}], 
    "skillRacialBonusArray":[{"stat":"acrobatics", "value":2}, {"stat":"fly", "value":2}], 
    "age":"normal", "size":"medium", "type":"Outsider [Native]", "speed":"Aasimars have a base speed of 30 feet", "Languages":{"start":["Common", "Celestial"], "learn":["Draconic", "Dwarven", "Elven", "Gnome", "Halfling", "Sylvan"]}},
  "racial":[{"name":"Celestial Resistance", "description":"Aasimars have acid resistance 5, cold resistance 5, and electricity resistance 5."},
  {"name":"Alignment", "description":"CG"},
  {"name":"Skilled", "description":"Aasimar have a +2 racial bonus on Acrobatics and Fly checks."},
  {"name":"Spell-Like Ability", "description":"Aasimars can use see invisibility once per day as a spell-like ability (caster level equal to the aasimar’s class level)."},
  {"name":"Darkvision", "description":"Aasimar have darkvision 60 ft. (they can see perfectly in the dark up to 60 feet.)"}
  ]
});
AasimarHeritages.create("Aasimar - Peri-Blooded, Emberkin", {
  "blurb":"Creatures blessed with a celestial bloodline, aasimars seem human except for some exotic quality that betrays their otherworldly origin. While aasimars are nearly always beautiful, something simultaneously a part of and apart from humanity, not all of them are good, though very few are evil. Masters of fire magic, emberkin feel the dual pull of their peri forebear as well as that of a fallen angel further down their ancestry, and wrestle with their urges to do both good and evil.",
  "base":{"abilityScoreRacialBonuses": "+2 Intelligence, +2 Charisma", "abilityScoreRacialBonusArray":[{"stat":"intelligence", "value":2},{"stat":"charisma", "value":2}], 
    "skillRacialBonusArray":[{"stat":"knowledge (planes)", "value":2}, {"stat":"spellcraft", "value":2}], 
    "age":"normal", "size":"medium", "type":"Outsider [Native]", "speed":"Aasimars have a base speed of 30 feet", "Languages":{"start":["Common", "Celestial"], "learn":["Draconic", "Dwarven", "Elven", "Gnome", "Halfling", "Sylvan"]}},
  "racial":[{"name":"Celestial Resistance", "description":"Aasimars have acid resistance 5, cold resistance 5, and electricity resistance 5."},
  {"name":"Alignment", "description":"NG"},
  {"name":"Skilled", "description":"Aasimar have a +2 racial bonus on Knowledge (planes) and Spellcraft checks."},
  {"name":"Spell-Like Ability", "description":"Aasimars can use pyrotechnics once per day as a spell-like ability (caster level equal to the aasimar’s class level)."},
  {"name":"Darkvision", "description":"Aasimar have darkvision 60 ft. (they can see perfectly in the dark up to 60 feet.)"}
  ]
}); */



// send back JSON representation of all races
// on GET requests to root
/* router.get('/', (req, res) => {
  res.json(AasimarHeritage.get());
}); */

router.route('/').get((req, res) => {
  res.json(AasimarHeritage.find()
    .then(aasimarHeritages => res.json(aasimarHeritages)))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went terribly wrong' });
    });
});

module.exports = router;