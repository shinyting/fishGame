//定义海葵类
var aneObj = function () {
	//start point, control point, end point(sin)
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;
}
aneObj.prototype.num = 200;

aneObj.prototype.init = function () {
	for (var i = 0; i < this.num; i++) {
		this.rootx[i] = i * 5 + Math.random() * 10;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight/2 - 200 + Math.random() * 15;
		this.amp[i] = Math.random() * 50 + 10;
		//Math.random()产生0~1之间的随机数
		// this.len[i] = 150 + Math.random() * 30 + 30;
	}
}
aneObj.prototype.draw = function () {
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 8;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for (var i = 0; i < this.num; i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight/2);
		this.headx[i] = this.rootx[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i], canHeight/2 - 180, this.headx[i], this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}