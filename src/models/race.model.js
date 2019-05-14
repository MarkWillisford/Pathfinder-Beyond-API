const mongoose = require('mongoose');

const RaceSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	expand: {
		type: Boolean,
		required: true,
	},
	standardRacialTraits:{
		blurb: {
			type: String,
			required: true,
		},
		base:{
			abilityScoreRacialBonuses: {
				type: String,
				required: true,
			},
			abilityScoreRacialBonusArray:[{
				stat: {
					type: String,
					required: true,
				},
				value: {
					type: Number,
					required: true,
				},
			}],
			skillRacialBonusArray:[{
				stat: {
					type: String,
					required: true,
				},
				value: {
					type: Number,
					required: true,
				},
			}],
			age: {
				type: String,
				required: true,
			},
			size: {
				type: String,
				required: true,
			},
			type: {
				type: String,
				required: true,
			},
			speed: {
				type: String,
				required: true,
			},
			languages:{
				start:[],
				learn:[],
			}
		},
		racial:[{
			name: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
		}],
		selections: {
			type: String,
			required: true,
		},
	}
}, {collection: "races"})

module.exports = mongoose.model('Race', RaceSchema);