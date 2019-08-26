var express = require('express');
var router = express.Router();
var entriesCtrl = require('../controllers/entries');
var customsCtrl = require('../controllers/customs');

router.get('/', entriesCtrl.index);

module.exports = router;
