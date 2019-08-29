const Custom = require('../models/custom')
const Entry = require('../models/entry');


module.exports = {
    index,
    show,
    delete: deleteEntry
  };

function deleteEntry(req, res) {
    Custom.findByIdAndRemove(req.params.id, (err, custom) => {
      console.log(req.params.id, "this is the stuff to delete");
      res.redirect("/entries");
    });
}
  
function show(req, res) {
    Custom.findById(req.params.id, function(err, custom) {     
        res.render('entry/show', { title: 'Daily Log', custom}
        );
    });
}

  function index(req, res) {
      Custom.find({}, function(err, customs) {
          res.render('entries', {
          title: 'Card Log',
          customs,
          user: req.user });
      });
  }
