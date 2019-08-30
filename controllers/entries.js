const Custom = require('../models/custom')
const Entry = require('../models/entry');


module.exports = {
    index,
    // show,
    delete: deleteEntry
  };

function deleteEntry(req, res) {
    Custom.findByIdAndRemove(req.params.id, (err) => {
      res.redirect("/entries");
    });
}
  
// function show(req, res) {
//     Custom.find({}, function(err, custom) {  
//         console.log(req.params.id, "show function")
//         custom.sort((a, b) => {
//             if (a.date < b.date) return -1;
//             if (a.date > b.date) return 1;
//             return 0;
//         });
//         res.render('entries', { title: 'Daily Log', custom}
//         );
//     });
// }

  function index(req, res) {

      Custom.find({}, function(err, customs) {
        customs.sort((a, b) => {
            if (a.date < b.date) return 1;
            if (a.date > b.date) return -1;
            return 0;
        }),
          res.render('entries', {
          title: 'Your Tarot Log',
          customs,
          user: req.user 
        });
      });
  };

