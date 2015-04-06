'use strict';

module.exports = {
	compute : function (str1, str2) {
		
		//Convert input to array
		var arr1 = str1.split(''),
			arr2 = str2.split('');

		var hammingDistance = 0;

		if (arr1.length !== arr2.length) {
			throw new Error('DNA strands must be of equal length.');
		} else {
			while (arr1.length !== 0) {
				if (arr1.shift() !== arr2.shift()) {		//Pop first element from each array and compare
					hammingDistance += 1;
				}
			}
		}
		return hammingDistance;
	}
};