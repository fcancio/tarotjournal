var Custom = require('../models/custom');

module.exports = {
  new: newCustom,
  create
};

function create(req, res) {
  var custom = new Custom(req.body)
  custom.save(function(err) {
    if (err) return res.redirect('/entries/customs/new');
    res.redirect('/entries');
  })
}

function newCustom(req, res) {
    res.render('customs/new', {
        title: 'Draw Your Card'
    })
}

