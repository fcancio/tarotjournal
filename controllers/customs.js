var Custom = require('../models/custom');

module.exports = {
  new: newCustom,
  create,
  show
};

function show(req, res) {
  Custom.findById(req.params.id, function(err, custom) {     
        res.render('entries/customs/show', { 
          title: 'Daily Entry', 
          custom }
        );
    });
}

function create(req, res) {
  var custom = new Custom(req.body)
  custom.save(function(err) {
    if (err) return res.redirect('entries/customs/new');
    res.redirect('entries');
  })
}

function newCustom(req, res) {
    res.render('entries/customs/new', {
        title: 'Draw Your Card',
        user: req.user 
    })
}

