var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SceneSchema = new Schema({

module.exports = mongoose.model('Scene', SceneSchema);