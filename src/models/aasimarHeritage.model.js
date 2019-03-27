const mongoose = require('mongoose');

const aasimarHeritageSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	standardRacialTraits:{
		blurb:{
			type: String,
			required: true,
		},
		base:{
			abilityScoreRacialBonuses: {
				type: String,
				required: true,
			}, 
			abilityScoreRacialBonusArray:[{
					stat:{
						type: String,
						required: true,
					},
					value:{
						type: Number,
						required: true,
					},
				}], 
			skillRacialBonusArray:[{
				stat:{
					type: String,
					required: true,
				},
				value:{
					type: Number,
					required: true,
				},
			}], 
			age:{
				type: String,
				required: true,
			}, 
			size:{
				type: String,
				required: true,
			},
			type:{
				type: String,
				required: true,
			}, 
			speed:{
				type: String,
				required: true,
			},  
			Languages:{
				start:[String], 
				learn:[String], 
			}
		},
		racial:[{
			name:{
				type: String,
				required: true,
			},
			description:{
				type: String,
				required: true,
			},
		}]
	}
}, {collection: "aasimarHeritages"});


module.exports = mongoose.model('AasimarHeritage', aasimarHeritageSchema);
