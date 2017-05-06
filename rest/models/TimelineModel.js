var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TimelineSchema = new Schema({	'name' : String,	'description' : String,	'date_added' : Date,	'date_modified' : Date,	'scenes' : Array,	'active' : Boolean});

module.exports = mongoose.model('Timeline', TimelineSchema);
