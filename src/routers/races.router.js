const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Races} = require('../models/race.model');

// we're going to add some races to Races
// so there's some data to look at
Races.create('Elf', {
  "blurb":"Tall, noble, and often haughty, elves are long-lived and subtle masters of the wilderness. Elves excel in the arcane arts. Often they use their intrinsic link to nature to forge new spells and create wondrous items that, like their creators, seem nearly impervious to the ravages of time. A private and often introverted race, elves can give the impression they are indifferent to the plights of others.",
  "base":{"abilityScoreRacialBonuses": "+2 Dexterity, +2 Intelligence, and –2 Constitution", "abilityScoreRacialBonusArray":[{"stat":"dexterity", "value":2},{"stat":"intelligence", "value":2},{"stat":"constitution", "value":-2}], "skillRacialBonusArray":[{"stat":"perception", "value":2}], "age":"normal", "size":"medium", "type":"Humanoid [Elf]", "speed":"Elves have a base speed of 30 feet.", "Languages":{"start":["Common","Elven"], "learn":["Celestial", "Draconic", "Gnoll", "Gnome", "Goblin", "Orc", "Sylvan"]}},
  "racial":[{"name":"Elven Immunities", "description":"Elves are immune to magic sleep effects and gain a +2 racial saving throw bonus against enchantment spells and effects."},
    {"name":"Keen Senses", "description":"Elves receive a +2 racial bonus on Perception checks."},
    {"name":"Elven Magic", "description":"Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items."},
    {"name":"Weapon Familiarity", "description":"Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word “elven” in its name as a martial weapon."},
    {"name":"Low-Light Vision", "description":"Elves can see twice as far as humans in conditions of dim light."}
  ],
  "selections":null
});
Races.create('Human', {
  "blurb":"Ambitious, sometimes heroic, and always confident, humans have an ability to work together toward common goals that makes them a force to be reckoned with. Though short-lived compared to other races, their boundless energy and drive allow them to accomplish much in their brief lifetimes.",
  "base":{
    "abilityScoreRacialBonuses": "Select", 
    "age":"normal", 
    "size":"medium", 
    "type":"Humanoid [Human]", 
    "speed":"Humans have a base speed of 30 feet.", 
    "Languages":{"start":"Common", "learn":"any"}},
  "racial":[{"name":"Bonus Feat", "description":"Humans select one extra feat at 1st level."},
    {"name":"Skilled", "description":"Humans gain an additional skill rank at first level and one additional rank whenever they gain a level."}
  ],
  "selections":"Human"
});

// send back JSON representation of all races
// on GET requests to root
router.get('/', (req, res) => {
  res.json(Races.get());
});

module.exports = router;