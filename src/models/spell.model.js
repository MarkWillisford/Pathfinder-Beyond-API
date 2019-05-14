const mongoose = require('mongoose');

const SpellSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
    school:{
        school:{
            type: String,
        },
        subSchool:{
            type: String,
        },
        descriptor:{
            type: String,
        },
    },
    level:[{
        class:{
            type: String,
            required: true,
        },
        num:{
            type: Number,
            required: true,
        },
    }],
    casting:{
        castingTime:{
            type: String,
            required: true,
        },
        components:[]
    },
    effect:{
        range:{
            type: String,
        },
        target:{
            type: String,
        },
        duration:{
            type: String,
        },
        savingThrow:[],
        spellResistance:{
            type: String,
        },
    },
    description:[],
}, {collection: "spells"}) 

module.exports = mongoose.model('Spell', SpellSchema);