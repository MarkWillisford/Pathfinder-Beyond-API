const mongoose = require('mongoose');
const uuid = require('uuid');

/* const AasimarHeritagesList = {
	create: function(name, standardRacialTraits) {
	  console.log('Creating new Aasimar Heritage list item');
	  const item = {
			name: name,
			id: uuid.v4(),
			expand:false,
			standardRacialTraits:standardRacialTraits,
		};
	  this.items[item.id] = item;
	  return item;
	},
	get: function() {
	  console.log('Retrieving Aasimar Heritages list items');
	  return Object.keys(this.items).map(key => this.items[key]);
	},
  };
  
  function createAasimarHeritagesList() {
	const storage = Object.create(AasimarHeritagesList);
	storage.items = {};
	return storage;
	} */

const AasimarHeritageSchema = new mongoose.Schema({
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
});

//module.exports = { AasimarHeritages: createAasimarHeritagesList() }
// mongoose.model('AasimarHeritage', AasimarHeritageSchema);
const AasimarHeritage = mongoose.model('AasimarHeritage', AasimarHeritageSchema);

module.exports = { AasimarHeritage };