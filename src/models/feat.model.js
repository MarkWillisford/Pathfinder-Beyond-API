const mongoose = require('mongoose');

const FeatSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	specialization: {
		type: String,
		required: true,
	},
	type:[{
		type: String,
		required: true,
	}],
	description: {
		type: String,
		required: true,
	},
	benefit: {
		type: String,
		required: true,
	},
	progromaticBenefit: {
		type: String,
	},
	normal: {
		type: String,
	},
	special: {
		type: String,
	},
	repeatable: {
		type: Boolean,
		required: true,
	},
	selections:[{
		type: String,
	}],
	source: {
		type: String,
		required: true,
	},
}, {collection: "feats"})

module.exports = mongoose.model('Feat', FeatSchema); 