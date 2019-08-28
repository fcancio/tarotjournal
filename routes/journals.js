var express = require('express');
var router = express.Router();
var journalsCtrl = require('../controllers/journals');

router.post('/entries/customs/:id/journals', journalsCtrl.create);

module.exports = router;