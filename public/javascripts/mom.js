var momObj = function () {
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();

	this.momTailTimer = 0;
	this.momTailCount = 0;
}

momObj.prototype.init = function () {
	this.x = canWidth/6;
	this.y = canHeight/10;
	this.angle = 0;
	this.bigEye.src = "../images/bigEye0.png";
	this.bigBody.src = "../images/bigSwim0.png";
	this.bigTail.src = "../images/bigTail0.png";
}

momObj.prototype.draw = function () {
	//lerp x, y
	this.x = lerpDistance(mx, this.x, 0.97);
	this.y = lerpDistance(my, this.y, 0.97);

	//delta angle
	//Math.atan2(y,x)
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;

	//lerp angle
	this.angle = lerpAngle(beta, this.angle, 0.9);

	//tail
	this.momTailTimer += deltaTime;
	if (this.momTailTimer > 50) {
		this.momTailCount = (this.momTailCount + 1) % 8;
		this.momTailTimer %= 50;
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var momTailCount = this.momTailCount;
	var momTailPic = momTail[momTailCount];
	ctx1.drawImage(momTailPic, -momTailPic.width/4 + 14, -momTailPic.height/4, momTailPic.width/2, momTailPic.height/2);
	ctx1.drawImage(this.bigBody, -this.bigBody.width/4, -this.bigBody.height/4, this.bigBody.width/2, this.bigBody.height/2);
	ctx1.drawImage(this.bigEye, -this.bigEye.width/4, -this.bigEye.height/4, this.bigEye.width/2, this.bigEye.height/2);
	ctx1.restore();
}