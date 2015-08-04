'use strict';

var School = function () {
	this.database = {};
};

School.prototype.roster = function () {
	var roster = {};
	if (this.database) {
		var grades = Object.keys(this.database).sort();
		var self = this;
		grades.forEach(function (grade) {
			var names = self.database[grade].sort();
			roster[grade] = names;
		});
	}
	return roster;
};

School.prototype.add = function (name, grade) {
	if (this.database[grade]) {
		this.database[grade].push(name);
	} else {
		this.database[grade] = [name];
	}
};

School.prototype.grade = function (grade) {
	
	var names = [];
	if (this.database[grade]) {
		names = this.database[grade].sort();
	}
	return names;
};

module.exports = School;