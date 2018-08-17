var express = require('express');
var router = express.Router();
var nip = require('../generators/nip');
var iban = require('../generators/iban');
var identityNumber = require('../generators/identityNumber');
var pesel = require("pesel");
var regon = require('../generators/regon');

router.get('/nip', function (req, res, next) {
    res.send(nip());
});

router.get('/iban', function (req, res, next) {
    res.send(iban());
});

router.get('/identityNumber', function (req, res, next) {
    res.send(identityNumber());
});

router.get('/pesel', function (req, res, next) {
    res.send(pesel.generate());
});

router.get('/regon', function (req, res, next) {
    res.send(regon());
});


module.exports = router;