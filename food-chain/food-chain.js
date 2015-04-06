'use strict';

var animals = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'],
	animalLines = {
		fly : "I don't know why she swallowed the fly. Perhaps she'll die.",
		spider : "wriggled and jiggled and tickled inside her.",
		bird : "How absurd to swallow a bird!",
		cat : "Imagine that, to swallow a cat!",
		dog : "What a hog, to swallow a dog!",
		goat : "Just opened her throat and swallowed a goat!",
		cow : "I don't know how she swallowed a cow!",
		horse : "She's dead, of course!"
	};

/**
 * Generate middle section for a passage
 * @param  {[int]} animalIndex [description]
 * @return {[String]}             [description]
 */
function completePassage (animalIndex) {

	var passage = '';
	while (animalIndex !== 0) {
		if (animalIndex - 1 === 1) {
			passage += "She swallowed the " + animals[animalIndex] + " to catch the " + animals[animalIndex - 1] +
						" that " + animalLines.spider + '\n';

		} else {
			passage += "She swallowed the " + animals[animalIndex] + " to catch the " + animals[animalIndex - 1] + '.' + "\n";
		}
		animalIndex -= 1;
	}
	return passage;
}

var song = {

	/**
	 * Generate a passage for a given passage number
 	 * @param  {[int]} passegeNum [description]
 	 * @return {[String]}            [description]
 	*/
	verse : function verse (passegeNum) {
		var animalIndex;

		//validate passageNum to check if it is a valid number between 1 and 8
		Number(passegeNum) !== NaN && 1 < Number(passegeNum) < 8 ? animalIndex = passegeNum - 1 : animalIndex = undefined;

		var passage = "I know an old lady who swallowed a ";

		if (animalIndex === 0) {
			passage += animals[0] + '.' + '\n' +
					   animalLines.fly + '\n';
			return passage;
		} else if (animalIndex === 1) {
			passage += animals[1] + '.' + '\n' +
						'It' + ' ' + animalLines.spider +
						'\n' + completePassage(animalIndex) + animalLines.fly + '\n';
			return passage;
		} else if (animalIndex === 7) {
			passage += animals[7] + '.' + '\n' +
						animalLines.horse + '\n';
			return passage;
		} else if (animalIndex !== undefined) {
			passage += animals[animalIndex] + '.' + '\n' +
						animalLines[animals[animalIndex]] + '\n' +
						completePassage(animalIndex) + animalLines.fly + '\n';
			return passage;
		}
	},
	/**
	 * Generate verses between two passage number
	 * @param  {[int]} startPassage [description]
	 * @param  {[]} endPassage   [description]
	 * @return {[String]}              [description]
	 */
	verses : function (startPassage, endPassage) {

		var poem = '';
		while (startPassage <= endPassage) {
			poem += song.verse(startPassage) + '\n';
			startPassage += 1;
		}
		return poem;
	}
};

module.exports = song;