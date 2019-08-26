var mongoose = require('mongoose');


var customSchema = new mongoose.Schema({
  name: String,
  description: String,
  journal: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Custom', customSchema);