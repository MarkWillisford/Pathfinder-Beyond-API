const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Domains} = require('../models/domain.model');

// we're going to add some races to Races
// so there's some data to look at
Domains.create({
  "type":"domain",
  "name":"healing",
  "description":"Your touch staves off pain and death, and your healing magic is particularly vital and potent.",
  "grantedPowers":[
      {"name":"Rebuke Death",
      "type":"Sp",
      "level":1,
      "description":"You can touch a living creature as a standard action, healing it for 1d4 points of damage plus 1 for every two cleric levels you possess. You can only use this ability on a creature that is below 0 hit points. You can use this ability a number of times per day equal to 3 + your Wisdom modifier."
      },
      {"name":"Healer's Blessing",
          "type":"Su",
          "level":6,
          "description":"At 6th level, all of your cure spells are treated as if they were empowered, increasing the amount of damage healed by half (+50%). This does not apply to damage dealt to undead with a cure spell. This does not stack with the Empower Spell metamagic feat."
      }
  ],
  "domainSpells":[{"1st":"cure light wounds"},{"2nd":"cure moderate wounds"},{"3rd":"cure serious wounds"},
      {"4th":"cure critical wounds"},{"5th":"breath of life"},{"6th":"heal"},
      {"7th":"regenerate"},{"8th":"cure critical wounds (mass)"},{"9th":"heal (mass)"}],
  "subdomains":["medicine", "restoration", "resurrection"]
});
Domains.create({
  "type":"domain",
  "name":"sun",
  "description":"You see truth in the pure and burning light of the sun, and can call upon its blessing or wrath to work great deeds.",
  "grantedPowers":[
      {"name":"Sun's Blessing",
      "type":"Su",
      "level":1,
      "description":"Whenever you channel positive energy to harm undead creatures, add your cleric level to the damage dealt. Undead do not add their channel resistance to their saves when you channel positive energy."
      },
      {"name":"Nimbus of LIght",
          "type":"Su",
          "level":8,
          "description":"At 8th level, you can emit a 30-foot nimbus of light for a number of rounds per day equal to your cleric level. This acts as a daylight spell. In addition, undead within this radius take an amount of damage equal to your cleric level each round that they remain inside the nimbus. Spells and spell-like abilities with the darkness descriptor are automatically dispelled if brought inside this nimbus. These rounds do not need to be consecutive."
      }
  ],
  "domainSpells":[{"1st":"endure elements"},{"2nd":"heat metal"},{"3rd":"searing light"},
      {"4th":"fire shield"},{"5th":"flame strike"},{"6th":"fire seeds"},
      {"7th":"sunbeam"},{"8th":"sunburst"},{"9th":"prismatic sphere"}],
  "subdomains":["day", "light", "revelation", "thirst"]
});

// send back JSON representation of all races
// on GET requests to root
router.get('/', (req, res) => {
  res.json(Domains.get());
});

module.exports = router;