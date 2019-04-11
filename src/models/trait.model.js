const mongoose = require('mongoose');

const TraitSchema = mongoose.Schema({
    URL:{        
		type: String,
    },
    'Name-Original':{        
		type: String,
    },
    Type:{        
		type: String,
    },
    Category:{        
		type: String,
    },
    Name:{        
		type: String,
    },
    'Req-Race1':{        
		type: String,
    },
    'Req-Race2':{        
		type: String,
    },
    'Req-Class':{        
		type: String,
    },
    'Req-Align':{        
		type: String,
    },
    'Req-Other':{        
		type: String,
    },
    'Req-Faith':{        
		type: String,
    },
    'Req-Place':{        
		type: String,
    },
    Description:{        
		type: String,
    },
    Source:{        
		type: String,
    },
    
})

module.exports = mongoose.model('Trait', TraitSchema);