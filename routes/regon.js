var express = require('express');
var router = express.Router();
var generate = require('../generators/regon');

var body = {
  title: 'Generator REGON',
  generate: generate
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('regon', body);
});

router.post('/', function (req, res, next) {
  res.render('regon', body);
});

module.exports = router;
