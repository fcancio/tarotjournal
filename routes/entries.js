var express = require('express');
var router = express.Router();
var entriesCtrl = require('../controllers/entries');

router.get('/', entriesCtrl.index);


module.exports = router;
