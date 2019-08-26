const Entry = require('../models/entry');
const Custom = require('../models/custom')

module.exports = {
    index,
  };
  

  function index(req, res) {
      Custom.find({}, function(err, customs) {
          res.render('entries', {
          title: 'Daily Card Log',
          customs});
      });
  }