var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TimelineSchema = new Schema({

module.exports = mongoose.model('Timeline', TimelineSchema);