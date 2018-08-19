var express = require('express');
var router = express.Router();
var generate = require('../generators/iban');

var body = {
  title: 'Generator IBAN',
  description: 'Automatyczny generator numeru IBAN',
  generate: generate,
  execute: 'generatory.generate(\'iban\')'

};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('generate', body);
});

module.exports = router;
