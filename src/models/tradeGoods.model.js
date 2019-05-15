const mongoose = require('mongoose');

const TradeGoodSchema = mongoose.Schema({
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
    cost: {
        type: Number,
        required: true,
    },
	item: {
		type: String,
		required: true,
	},
}, {collection: "tradeGoods"})

module.exports = mongoose.model('TradeGood', TradeGoodSchema);