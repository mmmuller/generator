var express = require('express');
var router = express.Router();
var generate = require('../generators/regon');

var body = {
    title: 'Generator REGON',
    description: 'Automatyczny generator numeru REGON',
    generate: generate,
    execute: 'generatory.generate(\'regon\')'
};

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('generate', body);
});

module.exports = router;
