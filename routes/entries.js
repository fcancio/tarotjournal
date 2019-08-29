var express = require('express');
var router = express.Router();
var entriesCtrl = require('../controllers/entries');

router.get('/', entriesCtrl.index);
router.delete("/customs/:id", entriesCtrl.delete);


module.exports = router;
