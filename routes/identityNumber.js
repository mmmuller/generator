var express = require('express');
var router = express.Router();
var generate = require('../generators/identityNumber');

var body = {
  title: 'Generator numer dowodu',
  generate: generate
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('generate', body);
});

router.post('/', function (req, res, next) {
  res.render('generate', body);
});

module.exports = router;
