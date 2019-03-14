const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {Deities} = require('../models/deity.model');

// we're going to add some races to Races
// so there's some data to look at
Deities.create("Sarenrae", {
  "titles":["The Dawnflower",
      "The Cleansing Light",
      "The Everlight",
      "The Healing Light",
      "The Healing Flame"],
  "home":	["Sarenrae's Realm", "Nirvana"],
  "alignment": "Neutral good",
  "areasOfConcern":	["Sun", "Redemption" ,"Honesty" ,"Healing"],
  "worshipers": ["Healers", "farmers", "redeemed evil-doers"],
  "clericAlignments": ["Lawful Good", "Neutral Good", "Chaotic Good", "Neutral"],
  "domains": ["Fire", "Glory", "Good", "Healing", "Sun"],
  "subdomains": ["Agathion", "Day", "Heroism", "Light", "(Redemption)", "Restoration", "Resurrection", "(Revelation)"],
  "favoredWeapon": ["Scimitar"],
  "symbol": ["Angelic ankh"],
  "sacredAnimal": ["Dove"],
  "sacredColors": ["Blue", "gold"]            
});
Deities.create("Milani", {
  "titles": ["The Everbloom"],
  "home":	["Refuge of the Red Rose", "Axis / Milani's Garden", "Elysium"],
  "alignment": "Chaotic good",
  "areasOfConcern":	["Hope", "Devotion", "Uprisings"],
  "worshipers": ["Freedom fighters: mainly human with some half-elf & half-orc"],
  "clericAlignments": ["Neutral Good", "Chaotic Good", "Chaotic Neutral"],
  "domains": ["Chaos", "Good", "Healing", "Liberation", "Protection"],
  "subdomains": ["Azata", "Defense", "Freedom", "Purity", "Restoration", "Revolution", "Riot"],
  "favoredWeapon": ["Morningstar"],
  "symbol": ["Rose on bloody street"],
  "sacredAnimal":[ "Mouse"],
  "sacredColors": ["Red", "white"]
});

// send back JSON representation of all races
// on GET requests to root
router.get('/', (req, res) => {
  res.json(Deities.get());
});

module.exports = router;