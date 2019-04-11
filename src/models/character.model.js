const mongoose = require('mongoose');
const CharClass = require('../models/charClass.model');
const Feat = require('../models/feat.model');
const Race = require('../models/race.model');

const CharacterSchema = new mongoose.Schema({
  userID:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  characterStats:[{
    name: {
      type: String,
      required: true,
    },
    flag: {
      type: Boolean,
      required: true,
    },
    bonuses:[{
      name:{
        type: String,
        required: true,
      },
      source:{
        type: String,
        required: true,
      },
      stat:{
        type: String,
        required: true,
      },
      type:{
        type: String,
        required: true,
      },
      duration:{
        type: Number,
        required: true,
      },
      amount:{
        type: Number,
        required: true,
      },
    }],
    sum:{
      total:{
        type: Number,
        required: true,
      },
      bonuses:[{
        name:{
          type: String,
          required: true,
        },
        source:{
          type: String,
          required: true,
        },
        stat:{
          type: String,
          required: true,
        },
        type:{
          type: String,
          required: true,
        },
        duration:{
          type: Number,
          required: true,
        },
        amount:{
          type: Number,
          required: true,
        },
      }]
    }
  }],
  charClass:{ type: mongoose.Schema.Types.ObjectId, ref: 'CharClass' },
  featSlots:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Feat' }],
  traitSlots:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Trait' }],
  preferences:{
    advancement:{
      type: String,
      required: true,
    },
    hpProcess:{
      type: String,
      required: true,
    },
  },
  race:{ type: mongoose.Schema.Types.ObjectId, ref: 'Race' },
  details:{
    age: {
      type: String,
    },
    alignments: {
      type: String,
      required: true,
    },
    allies: {
      type: String,
    },
    backstory: {
      type: String,
    },
    enemies: {
      type: String,
    },
    eyes: {
      type: String,
    },
    flaws: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
    hair: {
      type: String,
    },
    ideals: {
      type: String,
    },
    organizations: {
      type: String,
    },
    other: {
      type: String,
    },
    personalityTraits: {
      type: String,
    },
    skin: {
      type: String,
    },
    weight: {
      type: String,
    },
  },
  goldMethod: {
    type: String,
    required: true,
  },
  gold: {
    type: Number,
    required: true,
  },
  availableGold: {
    type: Number,
    required: true,
  },
  gear:{
    armor:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Armor' }],
    weapon:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Weapon' }],
    tradeGoods:[{ type: mongoose.Schema.Types.ObjectId, ref: 'TradeGood' }],
    goodsAndServices:[{ type: mongoose.Schema.Types.ObjectId, ref: 'GoodsAndService' }],
  },
  abilityScoreGenerationMethod: {
    type: String,
    required: true,
  },
}, {collection: "characters"}); 

module.exports = mongoose.model('Character', CharacterSchema);  