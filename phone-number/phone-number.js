'use strict';

/**
 * Constructor for phone number class
 * @param {[String]} phoneNumber [description]
 */
var PhoneNumber = function (phoneNumber) {

	this.phoneNumber = phoneNumber;
};

/**
 * Checks for validity of phone number based on length and starting digit
 * @return {[String]} [description]
 */
PhoneNumber.prototype.number = function () {
	
	this.phoneNumber = this.phoneNumber.replace(/[^0-9]+/g, '');
	if (this.phoneNumber.length === 11) {
		if (this.phoneNumber.charAt(0) === '1') {
			this.phoneNumber = this.phoneNumber.slice(1);
		} else {
			this.phoneNumber = '0000000000';
		}
	} else if (this.phoneNumber.length === 9) {
		this.phoneNumber = '0000000000';
	}
	return this.phoneNumber;
};

/**
 * Returns the area code for a phone number
 * @return {[type]} [description]
 */
PhoneNumber.prototype.areaCode = function () {
	return this.phoneNumber.slice(0, 3);
};

/**
 * Returns the formatted phone number
 * @return {[type]} [description]
 */
PhoneNumber.prototype.toString = function () {

	var phoneA = this.phoneNumber.substr(0, 3);
	var phoneB = this.phoneNumber.substr(3, 3);
	var phoneC = this.phoneNumber.substr(6);

	return '(' + phoneA + ') ' + phoneB + '-' + phoneC;
};

module.exports = PhoneNumber;