'use strict';

function getFirstLine (passageNum) {
	if (passageNum === 0) {
		return "No more bottles of beer on the wall, no more bottles of beer.\n";
	} else if (passageNum === 1) {
		return "1 bottle of beer on the wall, 1 bottle of beer.\n";
	} else {
		return String(passageNum) + ' bottles of beer on the wall, ' + String(passageNum) + ' bottles of beer.' + '\n';
	}
}

function getSecondLine (passageNum) {
	if (passageNum === 0) {
		return "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
	} else if (passageNum === 1) {
		return "Take it down and pass it around, no more bottles of beer on the wall.\n";
	} else if (passageNum === 2) {
		return "Take one down and pass it around, 1 bottle of beer on the wall.\n";
	} else {
		return "Take one down and pass it around, " + String(passageNum - 1) + " bottles of beer on the wall.\n";
	}
}

var Beer = {
	verse : function (passageNum) {

		var passage = "";
		passage += getFirstLine(passageNum) + getSecondLine(passageNum);
		return passage;
	},
	sing : function (passageStart, passageEnd) {
		
		var song = "";
		if (passageEnd === undefined) {
			passageEnd = 0;
		}
		while (passageStart > passageEnd) {
			song += Beer.verse(passageStart) + "\n";
			passageStart -= 1;
		}
		song += Beer.verse(passageEnd);
		return song;
	}
};

module.exports = Beer;