var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SceneSchema = new Schema({	'name' : String,	'description' : String,	'text' : String,	'date_added' : Date,	'date_modified' : Date});

module.exports = mongoose.model('Scene', SceneSchema);
