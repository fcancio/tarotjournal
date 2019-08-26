// const Entry = require('../models/entry');

module.exports = {
    index,
  };
  
  function index(req, res) {
      res.render('entries', {
          title: 'Daily Card Log'
      })
  }