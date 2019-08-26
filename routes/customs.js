var express = require('express');
var router = express.Router();
var customsCtrl = require('../controllers/customs');

router.get('/entries/customs/new', customsCtrl.new);
router.post('/entries', customsCtrl.create);
router.get('/entries/customs/:id', customsCtrl.show);

module.exports = router;
