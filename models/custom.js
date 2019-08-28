var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journalSchema = new Schema ({
  text: String,
  date: Date,
}, {
  timestamps: true
})

var customSchema = new Schema ({
  name: String,
  description: String,
  journals: [journalSchema],
  date: Date,
}, {
  timestamps: true
});


module.exports = mongoose.model('Custom', customSchema);