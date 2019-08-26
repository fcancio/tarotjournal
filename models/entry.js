var mongoose = require('mongoose');


var entrySchema = new mongoose.Schema({
  date: Date,
  custom: [customSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Entry', entrySchema);