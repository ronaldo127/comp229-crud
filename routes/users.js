var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller')
var authCtrl = require('../controllers/auth.controller')

/* GET users listing. */
router
  .get('/', userController.find)
  .post('/', userController.save);

router.get("/hello",
  authCtrl.requireSignin,
  authCtrl.hasAuthorization,
  userController.hello)

router.get('/:_id', userController.find)

module.exports = router;
