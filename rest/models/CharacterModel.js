var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CharacterSchema = new Schema({

module.exports = mongoose.model('Character', CharacterSchema);