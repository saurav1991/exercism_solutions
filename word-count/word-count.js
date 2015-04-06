'use strict';

/**
 * Finds number of occurences for given word in list of words
 * @param  {String} word     [Word to search]
 * @param  {Array} wordList [List of words]
 * @return {Number}          [Number of occurences of word]
 */
function getWordCount(word, wordList) {

	var count = 1;
	wordList.forEach(function (element) {
		if (element === word) {
			count += 1;
		}
	});
	return count;
}

module.exports = function words (input) {

	input = input.replace('\n', ' ').replace('\t', ' ');		//Filter input for tabs and new lines

	var wordArray = input.split(' ').filter(function (word) {return word !== ''}),		//Remove space from array of words
		wordCounts = {};


	while (wordArray.length !== 0) {
		var word = wordArray.shift();		

		if (Object.keys(wordCounts).indexOf(word) === -1) {			//Check for duplicate words
			wordCounts[word] = getWordCount(word, wordArray);
		}
	}

	return wordCounts;
};