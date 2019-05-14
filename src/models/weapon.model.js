const mongoose = require('mongoose');

const WeaponSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	expand: {
		type: Boolean,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	use: {
		type: String,
		required: true,
	},
    cost: {
        type: Number,
        required: true,
    },
    dmgS:[],
    dmgM:[],
	critical: {
		type: String,
	},
	range: {
		type: Number,
	},
  weight: {
      type: Number,
      required: true,
  },
  type: {
      type: String,
      required: true,
  },
  special:[],
	material: {
		type: String,
	},
	masterwork: {
		type: Boolean,
		required: true,
	},
}, {collection: "weapons"})

module.exports = mongoose.model('Weapon', WeaponSchema);