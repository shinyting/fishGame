var babyObj = function () {
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();

	this.babyTailTimer = 0;
	this.babyTailCount = 0;

	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;
}

babyObj.prototype.init = function () {
	this.angle = 0;
	this.x = canWidth/6 - 50;
	this.y = canHeight/10 + 50;
	this.babyEye.src = "../images/babyEye0.png";
	this.babyBody.src = "../images/babyFade0.png";
	// this.babyTail.src = "../images/babyTail0.png";
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

	//tail count
	this.babyTailTimer += deltaTime;
	if (this.babyTailTimer > 50) {
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	}

	//eye count
	this.babyEyeTimer += deltaTime;
	if (this.babyEyeTimer > this.babyEyeInterval) {
		this.babyEyeCount = (this.babyEyeCount + 1) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;
		if (this.babyEyeCount == 0) {
			this.babyEyeInterval = Math.random() * 1500 + 2000;
		}
		else {
			this.babyEyeInterval = 200;
		}
	}

	ctx1.save();
	//设置原点
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);

	var babyTailCount = this.babyTailCount;
	var babyTailPic = babyTail[babyTailCount];
	ctx1.drawImage(babyTailPic, -babyTailPic.width/4 + 12, -babyTailPic.height/4, babyTailPic.width/2, babyTailPic.height/2);
	ctx1.drawImage(this.babyBody, -this.babyBody.width/4, -this.babyBody.height/4, this.babyBody.width/2, this.babyBody.height/2);
	var babyEyeCount = this.babyEyeCount;
	var babyEyePic = babyEye[babyEyeCount];
	ctx1.drawImage(babyEyePic, -babyEyePic.width/4, -babyEyePic.height/4, babyEyePic.width/2, babyEyePic.height/2);
	ctx1.restore();
}