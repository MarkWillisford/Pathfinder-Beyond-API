const mongoose = require('mongoose');

const ArmorSchema = mongoose.Schema({
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
	use: {
		type: String,
		required: true,
	},
    cost: {
        type: Number,
        required: true,
    },
    bonus:{
        armor:{
            type: Number,
            required: true,
        },
    },
    maxDexBonus: {
        type: Number,
        required: true,
    },
    armorCheckPenalty: {
        type: Number,
        required: true,
    },
    arcaneSpellFailureChance: {
        type: Number,
        required: true,
    },
    speed:{
        20: {
            type: Number,
            required: true,
        },
        30: {
            type: Number,
            required: true,
        },
    },
    weight: {
        type: Number,
        required: true,
    },
	material: {
		type: String,
	},
	masterwork: {
		type: Boolean,
		required: true,
	},

}, {collection: "armors"})

module.exports = mongoose.model('Armor', ArmorSchema);