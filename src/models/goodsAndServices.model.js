const mongoose = require('mongoose');

const GoodsAndServiceSchema = mongoose.Schema({
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
	type: {
		type: String,
		required: true,
    },
    collection:{
        kit:{
            type: Boolean,
            required: true,
        },
        included:[],
    },
    cost: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('GoodsAndService', GoodsAndServiceSchema);