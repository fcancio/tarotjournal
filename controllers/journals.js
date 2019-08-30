var Custom = require('../models/custom');

module.exports = {
    create,
    delete: deleteJournal
};

function deleteJournal(req, res) {
    console.log(req.params)
    Custom.findById(req.params.id, (err, custom) => {
      custom.journals.remove(req.params.journal)
      custom.save(()=>{
        res.redirect(`/entries/customs/${custom._id}`);
      })
      // console.log(req.params.id);
    });
}

function create(req, res) {
    Custom.findById(req.params.id, function(err, custom) {
      custom.journals.push(req.body);
      custom.save(function(err) {
        res.redirect(`/entries/customs/${custom._id}`);
      });
    });
  }