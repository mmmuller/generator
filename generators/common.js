var common = {};

common.getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


common.addLeadingZeros = function (number, length) {
  number = "" + number;
  var zerosNumber = length - number.length;

  for (i = 0; i < zerosNumber; i++) {
    number = "0" + number;
  }
  return number;
};

module.exports = common;