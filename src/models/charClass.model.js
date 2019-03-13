// const mongoose = require('mongoose');
const uuid = require('uuid');

const CharClassesList = {
	create: function(name, classFeatures) {
	  console.log('Creating new classes list item');
	  const item = {
			name: name,
			id: uuid.v4(),
            expand:false,
            classFeatures:classFeatures
		};
	  this.items[item.id] = item;
	  return item;
	},
	get: function() {
	  console.log('Retrieving charClasses list items');
	  return Object.keys(this.items).map(key => this.items[key]);
	},
  };
  
  function createCharClassesList() {
	const storage = Object.create(CharClassesList);
	storage.items = {};
	return storage;
  }

module.exports = { CharClasses: createCharClassesList() }
//mongoose.model('CharClasses', CharClassSchema);