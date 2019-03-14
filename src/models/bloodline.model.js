// const mongoose = require('mongoose');
const uuid = require('uuid');

const BloodlinesList = {
	create: function(bloodline) {
	  console.log('Creating new bloodlines list item');
	  const item = {
			name: bloodline.name,
            id: uuid.v4(),
            type: bloodline.type,
            description: bloodline.description,
            classSkill: bloodline.classSkill,
            bonusSpells: bloodline.bonusSpells,
            bonusFeats: bloodline.bonusFeats,
            bloodlineArcana: bloodline.bloodlineArcana,
            bloodlinePowers: bloodline.bloodlinePowers
		};
	  this.items[item.id] = item;
	  return item;
	},
	get: function() {
	  console.log('Retrieving bloodlines list items');
	  return Object.keys(this.items).map(key => this.items[key]);
	},
  };
  
  function createBloodlinesList() {
	const storage = Object.create(BloodlinesList);
	storage.items = {};
	return storage;
  }

module.exports = { Bloodlines: createBloodlinesList() }
//mongoose.model('Bloodlines', bloodlinesSchema);