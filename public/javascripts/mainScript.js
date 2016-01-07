var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic = new Image();
var ane;
var fruit;

//body加载完成之后执行game函数
document.body.onload = game;

function game () {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init () {
	//get canvas context
	//fishes, dust, UI, circle
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext("2d");
	//background, ane, fruits
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext("2d");

	bgPic.src = "../images/background.jpg";

	canWidth = can1.clientWidth;
	canHeight = can1.clientHeight;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();
}

function gameloop () {
	//当前绘制完成后根据机器性能确定间隔多久绘制下一帧
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
}