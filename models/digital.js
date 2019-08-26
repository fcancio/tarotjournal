var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var digitalSchema = new Schema ({
  name: String,
  description: String,
  journal: String,
  date: Date, 
}, {
  timestamps: true
});

module.exports = mongoose.model('Digital', digitalSchema);