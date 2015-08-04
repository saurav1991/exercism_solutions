'use strict';


var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Robot = function () {
	this.name = alphabets.charAt(getRandomInt(0, 26)) + alphabets.charAt(getRandomInt(0, 26)) + getRandomInt(100, 999);
}

Robot.prototype.reset = function () {
	this.name = alphabets.charAt(getRandomInt(0, 26)) + alphabets.charAt(getRandomInt(0, 26)) + getRandomInt(100, 999);
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = Robot;
