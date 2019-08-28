var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var digitalSchema = new Schema ({
    card: {
      type: String,
      img: String,
      name: String,
      description: String,
      date: Date,
      journal: String,
}, 
  timestamps: true
});

module.exports = mongoose.model('Digital', digitalSchema);