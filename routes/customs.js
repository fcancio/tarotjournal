var express = require('express');
var router = express.Router();
var customsCtrl = require('../controllers/customs');

router.get('/new', customsCtrl.new);
router.post('/entries', customsCtrl.create);

module.exports = router;