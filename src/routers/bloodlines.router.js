const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Bloodlines} = require('../models/bloodline.model');

// we're going to add some races to Races
// so there's some data to look at
Bloodlines.create({
  "type":"bloodline",
  "name":"Celestial",
  "description":"Your bloodline is blessed by a celestial power, either from a celestial ancestor or through divine intervention. Although this power drives you along the path of good, your fate (and alignment) is your own to determine.",
  "classSkill":"Heal",
  "bonusSpells":[{"3rd":"bless"},{"5th":"resist energy"},{"7th":"magic circle against evil"},
      {"9th":"remove curse"},{"11th":"flame strike"},{"13th":"dispel magic (greater)"},
      {"15th":"banishment"},{"17th":"sunburst"},{"19th":"gate"}],
  "bonusFeats":["Dodge", "Extend Spell", "Iron Will", "Mobility", "Mounted Combat", "Ride-By Attack", "Skill Focus (Knowledge (Religion))", "Weapon Finesse"],
  "bloodlineArcana":"Whenever you cast a spell of the summoning subschool, the creatures summoned gain DR/evil equal to 1/2 your sorcerer level (minimum 1). This does not stack with any DR the creature might have.",
  "bloodlinePowers":{
      "description":"Your celestial heritage grants you a great many powers, but they come at a price. The lords of the higher planes are watching you and your actions closely.",
      "list":[
          {"name":"Heavenly Fire",
              "type":"Sp",
              "level":1,
              "description":"Starting at 1st level, you can unleash a ray of heavenly fire as a standard action, targeting any foe within 30 feet as a ranged touch attack. Against evil creatures, this ray deals 1d4 points of damage + 1 for every two sorcerer levels you possess. This damage is divine and not subject to energy resistance or immunity. This ray heals good creatures of 1d4 points of damage + 1 for every two sorcerer levels you possess. A good creature cannot benefit from your heavenly fire more than once per day. Neutral creatures are neither harmed nor healed by this effect. You can use this ability a number of times per day equal to 3 + your Charisma modifier."
          },{"name":"Celestial Resistances",
              "type":"Ex",
              "level":3,
              "description":"At 3rd level, you gain resist acid 5 and resist cold 5. At 9th level, your resistances increase to 10."
          },{"name":"Wings of Heaven",
              "type":"Su",
              "level":9,
              "description":"At 9th level, you can sprout feathery wings and fly for a number of minutes per day equal to your sorcerer level, with a speed of 60 feet and good maneuverability. This duration does not need to be consecutive, but it must be used in 1 minute increments."
          },{"name":"Conviction",
              "type":"Su",
              "level":15,
              "description":"At 15th level, you can reroll any one ability check, attack roll, skill check, or saving throw you just made. You must decide to use this ability after the die is rolled, but before the results are revealed by the GM. You must take the second result, even if it is worse. You can use this ability once per day."
          },{"name":"Ascension",
              "type":"Su",
              "level":20,
              "description":"At 20th level, you become infused with the power of the heavens. You gain:bImmunity to acid, cold, and petrification, Resist electricity 10, Resist fire 10, +4 racial bonus on saves against poison, Unlimited use of the Wings of Heaven ability, the ability to speak with any creature that has a language (as per the tongues spell)."
          }
      ]
  }
});
Bloodlines.create({
  "type":"bloodline",
  "name":"Solar",
  "description":"Sorcerers who serve in the sun goddess’s court display powers infused with the glory of the sun itself.",
  "classSkill":"Perception",
  "bonusSpells":[{"3rd":"searing light"},{"5th":"fury of the sun"},{"7th":"daylight"},
      {"9th":"shield of dawn"},{"11th":"flame strike"},{"13th":"true seeing)"},
      {"15th":"sunbeam"},{"17th":"sunburst"},{"19th":"overwhelming presence"}],
  "bonusFeats":["Alertness", "Combat Casting", "Empower Spell", "Improved Initiative", "Lightning Reflexes", "Quicken Spell", "Spell Focus)", "Spell Penatration"],
  "bloodlineArcana":"Whenever you cast a spell with the fire descriptor, if it deals damage, it deals +1 point of damage per die rolled.",
  "bloodlinePowers":{
      "description":"The solar power that infuses your being alters the way you interact with the world, searing through your spells.",
      "list":[
          {"name":"Sunsight",
              "type":"Su",
              "level":1,
              "description":"At 1st level, you gain low-light vision and cannot be dazzled. If you already have low-light vision, you instead gain a +4 bonus on saving throws against blindness effects."
          },{"name":"Friend of Fire",
              "type":"Eu",
              "level":3,
              "description":"At 3rd level, you gain fire resistance 10. At 5th level, when in contact with flame or a burning object (including a flaming weapon, lantern, or torch), add 1 per die to any healing effect of which you are the target. At 9th level, your fire resistance increases to 20. At 20th level, you gain immunity to fire."
          },{"name":"Cleansing Flame",
              "type":"Su",
              "level":9,
              "description":"At 9th level, twice per day, you can use fire to restore the health of yourself or your allies. As a standard action, you can wreathe your hand in a halo of flame and touch yourself or another creature. The touch heals 2d8 + your character level points of damage. You can also remove one of the following conditions affecting the target: 1d6 points of ability damage, blinded, confused, dazzled, deafened, diseased, exhausted, fatigued, nauseated, poisoned, or sickened. At 20th level, you can use this ability three times per day."
          },{"name":"Healing Fire",
              "type":"Su",
              "level":15,
              "description":"At 15th level, you can channel energy twice per day as a cleric of half your level. Instead of using this ability to damage undead, you can convert the positive energy to flame and deal an equivalent amount of fire damage instead."
          },{"name":"Solar Ascension",
              "type":"Su",
              "level":20,
              "description":"At 20th level, as a full-round action, you can become an incorporeal being of light for 1 round per sorcerer level. While in this form, you gain the incorporeal subtype and take half the normal damage from corporeal magic attacks (you take no damage from nonmagical weapons and objects). Your spells deal half damage to corporeal creatures, but spells and abilities that do not deal damage function normally. The duration need not be continuous, but it must be used in 1-round increments. While in this form, any creature you move through (as the overrun combat maneuver) takes 2d6 points of fire damage."
          }
      ]
  }
});

// send back JSON representation of all races
// on GET requests to root
router.get('/', (req, res) => {
  res.json(Bloodlines.get());
});

module.exports = router;