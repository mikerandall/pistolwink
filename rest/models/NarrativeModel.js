var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var NarrativeSchema = new Schema({	'name' : String,	'description' : String,	'plot' : String,	'categories' : Array,	'characters' : Array,	'timeline' : {	 	type: Schema.Types.ObjectId,	 	ref: 'Timeline'	},	'date_added' : Date,	'active' : Boolean});

module.exports = mongoose.model('Narrative', NarrativeSchema);
