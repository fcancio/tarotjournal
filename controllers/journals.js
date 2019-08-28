var Custom = require('../models/custom');

module.exports = {
    create
};

function create(req, res) {
    Custom.findById(req.params.id, function(err, custom) {
      custom.journals.push(req.body);
      custom.save(function(err) {
        res.redirect(`/entries/customs/${custom._id}`);
      });
    });
  }