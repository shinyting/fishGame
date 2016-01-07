var babyObj = function () {
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}

babyObj.prototype.init = function () {
	this.angle = 0;
	this.x = canWidth/6 - 50;
	this.y = canHeight/10 + 50;
	this.babyEye.src = "../images/babyEye0.png";
	this.babyBody.src = "../images/babyFade0.png";
	this.babyTail.src = "../images/babyTail0.png";
}

babyObj.prototype.draw = function () {
	//lerp x, y
	this.x = lerpDistance(mom.x, this.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);

	//lerp angle
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;

	this.angle = lerpAngle(beta, this.angle, 0.6);

	ctx1.save();
	//设置原点
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.babyTail, -this.babyTail.width/4 + 12, -this.babyTail.height/4, this.babyTail.width/2, this.babyTail.height/2);
	ctx1.drawImage(this.babyBody, -this.babyBody.width/4, -this.babyBody.height/4, this.babyBody.width/2, this.babyBody.height/2);
	ctx1.drawImage(this.babyEye, -this.babyEye.width/4, -this.babyEye.height/4, this.babyEye.width/2, this.babyEye.height/2);
	ctx1.restore();
}