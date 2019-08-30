var express = require('express');
var router = express.Router();
var customsCtrl = require('../controllers/customs');

router.get('/entries/customs/new', customsCtrl.new);
router.post('/entries', isLoggedIn, customsCtrl.create);
router.get('/entries/customs/:id', customsCtrl.show);
router.get('/entries/customs/:id/edit', customsCtrl.edit);
router.put('/entries/customs/:id', customsCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
