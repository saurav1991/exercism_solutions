'use strict';

var dna = function (input) {

	if (input && input.match(/[^ATCG]/) !== null) {			//throw error if not valid dna
		throw new Error();
	}

	var that = {};

	that.count = function (nucleotide) {

		if (!input) {
			return 0;
		}
		var dnaSequence = input.split('');
		return dnaSequence.filter(function (symbol) {
			return symbol === nucleotide;
		}).length;
	};

	that.histogram = function () {

		var histogram = {
			A : 0,
			T : 0,
			C : 0,
			G : 0
		};

		if (!input) {
			return histogram;
		}
		var nucleotides = Object.keys(histogram);
		nucleotides.forEach(function (nucleotide) {
			histogram[nucleotide] = that.count(nucleotide);
		});
		return histogram;
	};

	return that;
};

module.exports = dna;