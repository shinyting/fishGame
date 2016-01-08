var dataObj = function () {
	this.fruitNum = 0;
	this.double = 1;
}

dataObj.prototype.reset = function () {
	this.fruitNum = 0;
	this.double = 1;
}

dataObj.prototype.draw = function () {
	var w = can1.width;
	var h = can1.height;

	ctx1.fillStyle = "#fff";
	ctx1.fillText("num " + this.fruitNum, w * 0.5, h - 10);
	ctx1.fillText("double " + this.double, w * 0.5, h - 30);
}