'use strict';

var unique = function (str) {
	var strArr = str.split('');
	return strArr.every(function (ch) {
		return strArr.indexOf(ch) === strArr.lastIndexOf(ch);
	});
}

console.log(unique("abcd"));
console.log(unique("aberfedd"))