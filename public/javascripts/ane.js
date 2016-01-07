//定义海葵类
var aneObj = function () {
	this.x = [];
	this.len = [];
}
aneObj.prototype.num = 200;
aneObj.prototype.init = function () {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = i * 5 + Math.random() * 10;
		this.len[i] = 150 + Math.random() * 50;
	}
}
aneObj.prototype.draw = function () {
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 8;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for (var i = 0; i < this.num; i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.x[i], canHeight/2);
		ctx2.lineTo(this.x[i], canHeight/2 - this.len[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}