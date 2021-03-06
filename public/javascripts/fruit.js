//定义果实类
var fruitObj = function () {
	this.alive = [];
	this.x = [];
	this.y = [];
	this.aneNO = [];
	this.l = [];
	this.spd = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function () {
	for (var i = 0; i < this.num; i ++) {
		this.alive[i] = true;
		this.x[i] = 0;
		this.y[i] = 0;
		this.aneNO[i] = 0;
		this.spd[i] = Math.random() * 0.005 + 0.003;
		this.fruitType[i] = "";
		this.born(i);
	}
	this.orange.src = "../images/fruit.png";
	this.blue.src = "../images/blue.png";
}

fruitObj.prototype.draw = function () {
	for (var i = 0; i < this.num; i ++) {
		if (this.alive[i]) {
			var pic;
			if (this.fruitType[i] == "blue") {
				pic = this.blue;
			}
			else {
				pic = this.orange;
			}
			if (this.l[i] <= 10) {//果实的半径grow
				var NO = this.aneNO[i];
				this.x[i] = ane.headx[NO];
				this.y[i] = ane.heady[NO];
				this.l[i] += this.spd[i] * deltaTime;
				ctx2.drawImage(pic, this.x[i] - this.l[i]/2, this.y[i] - this.l[i]/2, this.l[i]/2, this.l[i]/2);
			}
			else {
				this.y[i] -= this.spd[i] * 7 * deltaTime;
				ctx2.drawImage(pic, this.x[i] - this.l[i]/2, this.y[i] - this.l[i]/2, this.l[i]/2, this.l[i]/2);
			}
			
			if (this.y[i] < 2) {
				this.alive[i] = false;
			}
		}
	}
}

fruitObj.prototype.born = function (i) {
	// var aneID = 
	this.aneNO[i] = Math.floor(Math.random() * ane.num);
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if (ran < 0.2) {
		this.fruitType[i] = "blue";
	}
	else {
		this.fruitType[i] = "orange";
	}
}

fruitObj.prototype.dead = function (i) {
	this.alive[i] = false;
}

function fruitMonitor () {
	var num = 0;
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
			num ++;
		}
		if (num < 30) {
			sendFruit();
			return;
		}
	}
}

function sendFruit () {
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
			fruit.born(i);
			return;
		}
	}
}

fruitObj.prototype.update = function () {
	var num = 0;
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			num ++;
		}
	}
}