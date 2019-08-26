const Entry = require('../models/entry');
const Custom = require('../models/custom')

module.exports = {
    index,
    show,
  };
  
function show(req, res) {
    Custom.findById(req.params.id, function(err, custom) {     
        res.render('entry/show', { title: 'Daily Log', custom}
        );
    });
}

  function index(req, res) {
      Custom.find({}, function(err, customs) {
          res.render('entries', {
          title: 'Daily Card Log',
          customs});
      });
  }