var Bob = function() {};

function isUpper(input) {
	return input.toUpperCase() === input;
}

function isForceful(input) {
	return input.toUpperCase() === input && !hasOnlyNumbers(input);
}

function hasOnlyNumbers(input) {
	var punctuations = [',', '.', '!', '?'],
		isNumeric = true;
	input = input.split('');
	input.forEach(function (inputChar) {
		if (isNaN(inputChar) && punctuations.indexOf(inputChar) === -1) {
			isNumeric = false;
			return;
		}
	});
	return isNumeric;
}

Bob.prototype.hey = function(input) {

	input = input.trim();
	if (input) {
		if (input.charAt(input.length - 1) === '!') {
			if (isForceful(input)) {
				return 'Whoa, chill out!';
			}
		} else if (input.charAt(input.length - 1) === '?') {
			if (isForceful(input)) {
				return 'Whoa, chill out!';
			}
			return 'Sure.'
		} else if (isUpper(input) && !hasOnlyNumbers(input)) {
			return 'Whoa, chill out!';
		}
		return 'Whatever.';
	} else if (input === '') {
		return 'Fine. Be that way!';
	}
};

module.exports = Bob;
