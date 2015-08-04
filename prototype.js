'use strict';

var Shape = function () {
	console.log('Just a shape');
};

Shape.prototype.area = function () {
	console.log('Shape can\'t have an area');
};

var shape = new Shape();
shape.area();

var Circle = function (radius) {
	this.radius = radius;
};

Circle.prototype = new Shape();

Circle.prototype.area = function () {
	console.log("The area of circleis ", Math.PI * this.radius * this.radius);
};

var Triangle = function (base , height) {
	this.base = base;
	this.height = height;
	console.log('Just a simple triangle');
};

Triangle.prototype = new Shape();

Triangle.prototype.area = function () {
	console.log("Area of the triangle is ", 0.5 * this.base * this.height);
};

var circle = new Circle(2);
circle.area();

var triangle = new Triangle(3, 5);
triangle.area();