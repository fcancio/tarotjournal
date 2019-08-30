var express = require('express');
var router = express.Router();
var journalsCtrl = require('../controllers/journals');

router.post('/entries/customs/:id/journals', journalsCtrl.create);
router.delete('/entries/customs/:id/journals/:journal', journalsCtrl.delete);



module.exports = router;