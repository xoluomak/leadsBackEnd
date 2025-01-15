const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const userCtrl = require('../controllers/users');

var jsonParser = bodyParser.json()

router.post('/signup', jsonParser, userCtrl.signup);
router.post('/login', jsonParser, userCtrl.login);

module.exports = router;