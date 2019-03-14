// const mongoose = require('mongoose');
const uuid = require('uuid');

const DeitiesList = {
	create: function(name, overview ) {
	  console.log('Creating new deities list item');
	  const item = {
			name: name,
            id: uuid.v4(),
            overview: overview
		};
	  this.items[item.id] = item;
	  return item;
	},
	get: function() {
	  console.log('Retrieving deities list items');
	  return Object.keys(this.items).map(key => this.items[key]);
	},
  };
  
  function createDeitiesList() {
	const storage = Object.create(DeitiesList);
	storage.items = {};
	return storage;
  }

module.exports = { Deities: createDeitiesList() }
//mongoose.model('Deities', deitiesSchema);