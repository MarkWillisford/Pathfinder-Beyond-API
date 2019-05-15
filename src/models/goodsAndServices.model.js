const mongoose = require('mongoose');

const goodsAndServiceSchema = mongoose.Schema({
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
  isCollection:{
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
}, {collection: "goodsAndServices"})

module.exports = mongoose.model('GoodsAndService', goodsAndServiceSchema);