var express = require('express');
var router = express.Router();
var generate = require('../generators/iban');

var body = {
  title: 'Generator IBAN',
  generate: generate
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('iban', body);
});

router.post('/', function (req, res, next) {
  res.render('iban', body);
});

module.exports = router;
