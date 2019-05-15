const mongoose = require('mongoose');

const bloodlineSchema = mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	classSkill: {
		type: String,
		required: true,
	},
	bonusSpells:[
		
	],
	bonusFeats:[
    
  ],
	bloodlineArcana:{
		type:String,
		required: true,
	},
  bloodlinePowers:{
		description:{
			type:String,
			required: true,			
		},
		list:[{
			name: {
				type: String,
				required: true,
			},
			type:{
				type: String,
				required: true,
			},
			level:{
				type: Number,
				required: true,
			},
			description:{
				type: String,
				required: true,
			},
		}]
	}

}, {collection: "bloodlines"});

module.exports = mongoose.model('Bloodline', bloodlineSchema)