var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var NarrativeSchema = new Schema({

module.exports = mongoose.model('Narrative', NarrativeSchema);