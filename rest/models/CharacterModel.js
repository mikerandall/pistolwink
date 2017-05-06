var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CharacterSchema = new Schema({	'name' : String,	'aliases' : Array,	'description' : String,	'date_added' : Date,	'date_modified' : Date,	'timelines' : Array,	'active' : Boolean,	'dob' : Date,	'dod' : Date});

module.exports = mongoose.model('Character', CharacterSchema);
