var Custom = require('../models/custom')
var User = require('../models/user');


module.exports = {
    index,
    delete: deleteEntry
  };

function deleteEntry(req, res) {
    Custom.findByIdAndRemove(req.params.id, (err) => {
      res.redirect("/entries");
    });
}
  
function index(req, res) {
    Custom.find({}, function(err, customs) {
        customs.sort((a, b) => {
            if (a.date < b.date) return 1;
            if (a.date > b.date) return -1;
            return 0;
        }),
          res.render('entries', {
          title: 'Tarot Log',
          customs,
          user: req.user 
        });
    });
};

