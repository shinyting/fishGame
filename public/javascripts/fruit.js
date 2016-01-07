//定义果实类
var fruitObj = function () {
	this.alive = [];
	this.orange = new Image();
	this.blue = new Image();
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function () {
	for (var i = 0; i < this.num; i ++) {
		this.alive[i] = true;
	}
	this.orange.src = "../images/fruit.png";
	this.blue.src = "../images/blue.png";
}

fruitObj.prototype.draw = function () {

}

fruitObj.prototype.update = function () {
	var num = 0;
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			num ++;
		}
	}
}