// const mongoose = require('mongoose');
const uuid = require('uuid');

const RacesList = {
	create: function(name, standardRacialTraits) {
	  console.log('Creating new races list item');
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
	  console.log('Retrieving races list items');
	  return Object.keys(this.items).map(key => this.items[key]);
	},
};
  
function createRacesList() {
const storage = Object.create(RacesList);
storage.items = {};
return storage;
}

module.exports = { Races: createRacesList() }
//mongoose.model('Race', RaceSchema);