var express = require('express');
var router = express.Router();
var generate = require("pesel");


var body = {
    title: 'Generator pesel',
    pesel: generate.generate
};

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('pesel', body);
});

router.post('/', function (req, res, next) {
    res.render('pesel', body);
});

module.exports = router;
