'use strict';

var dictionary = function ()
{
	var that = {};

	var dict = [];

	var insert = function (item)
	{
		dict.push(item);
		dict.sort(function (a, b) {
			return a - b;
		});
	}

	var _delete = function (item)
	{
		var index = dict.indexOf(item);
		if (index !== -1) {
			dict.splice(index, 1);
			dict.sort(function (a, b) {
				return a - b;
			});
		}
	}

	var max = function ()
	{
		return dict[dict.length - 1];
	}

	var min = function ()
	{
		return dict[0];
	}

	var successor = function (key)
	{
		if (key >= 0 && key < (dict.length - 1))
		{
			return dict[key + 1];
		}
		return -1;
	}

	var predecessor = function (key)
	{
		if (key > 0 && key <= (dict.length - 1))
		{
			return dict[key - 1];
		}
		return -1;
	}

	var traverse = function () {
		dict.forEach(function (x) {
			console.log('Item ', x);
		})
	}

	that.insert = insert;
	that.del = _delete;
	that.max = max;
	that.min = min;
	that.successor = successor;
	that.predecessor = predecessor;
	that.traverse = traverse;

	return that;
};

var d = dictionary();
d.insert(1);
d.insert(2);
d.insert(3);
d.insert(10);
d.insert(31);
d.insert(8);
d.insert(7);

d.traverse();
