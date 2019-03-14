// const mongoose = require('mongoose');
const uuid = require('uuid');

const DomainsList = {
	create: function(domain) {
	  console.log('Creating new domains list item');
	  const item = {
            type: domain.type,
            id: uuid.v4(),
            name: domain.name,
            description: domain.description,
            grantedPowers: domain.grantedPowers,
            domainSpells: domain.domainSpells,
            subdomains: domain.subdomains,
		};
	  this.items[item.id] = item;
	  return item;
	},
	get: function() {
	  console.log('Retrieving domains list items');
	  return Object.keys(this.items).map(key => this.items[key]);
	},
  };
  
  function createDomainsList() {
	const storage = Object.create(DomainsList);
	storage.items = {};
	return storage;
  }

module.exports = { Domains: createDomainsList() }
//mongoose.model('Domains', domainsSchema);