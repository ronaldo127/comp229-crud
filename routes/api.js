var express = require('express');
var router = express.Router();


var usersRouter = require('./users');
var authRouter = require('./auth');
router.use('/users', usersRouter);
router.use('/auth', authRouter);

module.exports = router;