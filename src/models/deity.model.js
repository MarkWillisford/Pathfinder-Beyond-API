const mongoose = require('mongoose');

const DeitySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	overview:{
		titles:[{
			type: String,
			required: true,
		}],
		home:[{
			type: String,
			required: true,
		}],
		alignment:{
			type: String,
			required: true,
		},
		areasOfConcern:[{
			type: String,
			required: true,
		}],
		worshipers:[{
			type: String,
			required: true,
		}],
		clericAlignments:[{
			type: String,
			required: true,
		}],
		domains:[{
			type: String,
			required: true,
		}],
		subdomains:[{
			type: String,
			required: true,
		}],
		favoredWeapon:[{
			type: String,
			required: true,
		}],
		symbol:[{
			type: String,
			required: true,
		}],
		sacredAnimal:[{
			type: String,
			required: true,
		}],
		sacredColors:[{
			type: String,
			required: true,
		}],
	},
}, {collection: "deities"}); 

module.exports = mongoose.model('Deity', DeitySchema);  