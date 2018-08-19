var express = require('express');
var router = express.Router();
var generate = require('../generators/nip');

var body = {
    title: 'Generator NIP',
    description: 'Automatyczny generator numeru NIP, czyli numeru identyfikacji podatkowej',
    generate: generate,
    execute: 'generatory.generate(\'nip\')'
};

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('generate', body);
});

module.exports = router;
