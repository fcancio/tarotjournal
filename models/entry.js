var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entrySchema = new mongoose.Schema({
  custom: [{
      type: Schema.Types.ObjectId,
      ref: 'Custom'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Entry', entrySchema);