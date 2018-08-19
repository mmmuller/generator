var express = require('express');
var router = express.Router();
var generate = require('../generators/identityNumber');

var body = {
    title: 'Generator numer dowodu',
    description: 'Automatyczny generator numeru dowodu osobistego',
    generate: generate,
    execute: 'generatory.generate(\'identityNumber\')'
};

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('generate', body);
});

module.exports = router;
