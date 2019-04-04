const mongoose = require('mongoose');

const domainSchema = mongoose.Schema({
	type: {
		type: String,
		required: true,
  },
  druidAvailable: {
		type: Boolean,
  },
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	grantedPowers:[{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		level: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	}],
	domainSpells:[

	],
	subdomains:[{
			type: String,
	}],

}, {collection: "domains"});

module.exports = mongoose.model('Domain', domainSchema);