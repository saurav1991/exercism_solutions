'use strict';

var toRna = function (dna) {

	if (dna) {
		dna = dna.split('');

		var rna = dna.map(function (nucleotide) {
			switch (nucleotide) {
				case 'C':
					return 'G';
				case 'G':
					return 'C';
				case 'A':
					return 'U';
				case 'T':
					return 'A';
				default:
					break;
			}
		}).join('');
		return rna;
	}
};

module.exports = toRna;