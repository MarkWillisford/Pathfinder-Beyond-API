const mongoose = require('mongoose');

const animalCompanionSchema = mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
  },
  startingStatistics:{
    size:{
      type: String,
      required: true,
    },
    speed:{
      type: String,
      required: true,
    },
    ac:{
      amount:{
        type: Number,
        required: true,
      },
      type:{
        type: String,
        required: true,
      },
    },
    attack:[{
      type:{
        type: String,
        required: true,
      },
      damage:{
        type: String,
        required: true,
      },
      special:{
        type: String,
      },
    }],
    abilityScores:{
      strength:{
        type: Number,
        required: true,
      },
      dexterity:{
        type: Number,
        required: true,
      },
      constitution:{
        type: Number,
        required: true,
      },
      intelligence:{
        type: Number,
        required: true,
      },
      wisdom:{
        type: Number,
        required: true,
      },
      charisma:{
        type: Number,
        required: true,
      },
    },
    specialQualitites:[],
  },
  advancement:{
    level:{
      type: Number,
      required: true,
    },
    size:{
      type: String,
    },
    ac:{
      amount:{
        type: Number,
      },
      type:{
        type: String,
      },
    },
    attack:[{
      type:{
        type: String,
      },
      damage:{
        type: String,
      },
      special:{
        type: String,
      },
    }],
    abilityScores:{
      strength:{
        type: Number,
      },
      dexterity:{
        type: Number,
      },
      constitution:{
        type: Number,
      },
      intelligence:{
        type: Number,
      },
      wisdom:{
        type: Number,
      },
      charisma:{
        type: Number,
      },
    },
    specialQualitites:[],
  },
}, {collection: "animalCompanions"});

module.exports = mongoose.model('AnimalCompanion', animalCompanionSchema) 