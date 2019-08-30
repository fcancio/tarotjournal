var Custom = require('../models/custom');

module.exports = {
  new: newCustom,
  create,
  show,
  edit,
  update
};

function edit(req, res) {
  Custom.findById(req.params.id)
      .exec(function (err, custom) {
          res.render(`entries/customs/edit`, {
              title: `Edit Entry`,
              user: req.user,
              custom
          });
      });
}

// Not working; fix
function update(req, res) {
  console.log(req.params.id)
  Custom.findByIdAndUpdate(req.params.id,  req.body, function(err, custom) {
      // console.log(req.body)
      res.redirect(`entries`);
  });
};


function show(req, res) {
  Custom.findById(req.params.id, function(err, custom) {     
        res.render('entries/customs/show', { 
          title: 'Daily Entry', 
          custom,
          user: req.user }
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
        title: 'Add Your Daily Card',
        user: req.user 
    })
}

