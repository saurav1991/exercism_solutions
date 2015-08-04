'use strict';

var match = function (pat, txt) {
	var N = txt.length;
	var M = pat.length;
	var i, j;

	for (i = 0, j = 0; i < N && j < M; i++) {
		if (pat.charAt(j) === txt.charAt(i)) {
			j++;
		} else {
			i = i - j;
			j = 0;
		}
	}
	if (j === M) {
		return i - M;
	} else {
		return N;
	}
};

console.log(match('sau', 'saurav'));
console.log(match('sex', 'sussex'));