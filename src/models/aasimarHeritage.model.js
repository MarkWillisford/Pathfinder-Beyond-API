// const mongoose = require('mongoose');
const uuid = require('uuid');

const AasimarHeritagesList = {
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
  }

module.exports = { AasimarHeritages: createAasimarHeritagesList() }
//mongoose.model('Race', RaceSchema);