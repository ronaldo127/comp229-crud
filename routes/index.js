var express = require('express');
var router = express.Router();
var apiRouter = require('./api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api', apiRouter)

module.exports = router;
