var momObj = function () {
	this.x;
	this.y;
	this.angle;
	// this.bigEye = new Image();
	// this.bigBody = new Image();
	// this.bigTail = new Image();

	this.momTailTimer = 0;
	this.momTailCount = 0;

	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;

	this.momBodyCount = 0;
}

momObj.prototype.init = function () {
	this.x = canWidth/6;
	this.y = canHeight/10;
	this.angle = 0;
	// this.bigEye.src = "../images/bigEye0.png";
	// this.bigBody.src = "../images/bigSwim0.png";
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

	//eye
	this.momEyeTimer += deltaTime;
	if (this.momEyeTimer > this.momEyeInterval) {
		this.momEyeCount = (this.momEyeCount + 1) % 2;
		this.momEyeTimer %= this.momEyeInterval;
		if (this.momEyeCount == 0) {
			this.momEyeInterval = Math.random() * 1500 + 2000;
		}
		else {
			this.momEyeInterval = 200;
		}
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var momTailCount = this.momTailCount;
	var momTailPic = momTail[momTailCount];
	ctx1.drawImage(momTailPic, -momTailPic.width/4 + 14, -momTailPic.height/4, momTailPic.width/2, momTailPic.height/2);
	var momBodyCount = this.momBodyCount;
	var momBodyPic;
	if (data.double == 1) {//orange
		momBodyPic = momBodyOrange[momBodyCount];
	}
	else{
		momBodyPic = momBodyBlue[momBodyCount];
	}
	ctx1.drawImage(momBodyPic, -momBodyPic.width/4, -momBodyPic.height/4, momBodyPic.width/2, momBodyPic.height/2);
	var momEyeCount = this.momEyeCount;
	var momEyePic = momEye[momEyeCount];
	ctx1.drawImage(momEyePic, -momEyePic.width/4, -momEyePic.height/4, momEyePic.width/2, momEyePic.height/2);
	ctx1.restore();
}