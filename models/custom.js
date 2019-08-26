var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var customSchema = new Schema ({
  name: String,
  description: String,
  journal: String,
  date: Date, 
}, {
  timestamps: true
});

module.exports = mongoose.model('Custom', customSchema);