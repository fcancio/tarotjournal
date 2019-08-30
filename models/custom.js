var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journalSchema = new Schema ({
  text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true
})

var customSchema = new Schema ({
  deck: String,
  name: String,
  theme: String,
  description: String,
  journals: [journalSchema],
  date: Date,
}, {
  timestamps: true
});


module.exports = mongoose.model('Custom', customSchema);