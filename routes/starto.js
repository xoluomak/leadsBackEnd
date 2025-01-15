const express = require('express');
const router = express.Router();
const startoCtrl = require('../controllers/starto');
const admin = require('../middleware/admin');
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

router.get('/', admin, startoCtrl.getAllStartos);
router.post('/', admin, jsonParser, startoCtrl.createStarto);

module.exports = router;