var express = require('express');
var authCtrl = require('../controllers/auth.controller.js')


const router = express.Router()
router.route('/signin').post(authCtrl.signin)
router.route('/signout').get(authCtrl.signout)
module.exports = router