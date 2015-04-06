'use strict';

module.exports = function anagram (input) {

	var that = {};

	//Converts input to lowercase and sorts the string
	input = input.toLowerCase().split('').sort().join('');

	that.matches = function (wordList) {
		return wordList.filter(function (word) {
			return input === word.toLowerCase().split('').sort().join('');		//Converts word from wordList to lowercase and sorts
		});
	};

	return that;
};