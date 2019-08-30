var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  myEntries: [{
    type: Schema.Types.ObjectId,
    ref: [entrySchema]
  }]
}, {
  timestamps: true
});

var entrySchema = new Schema({
  custom: [{
      type: Schema.Types.ObjectId,
      ref: 'Custom'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);