//判断大鱼和果实的距离
function momFruitsCollision () {
	if (!data.gameOver) {
		for (var i = 0; i < fruit.num; i++) {
			if (fruit.alive[i]) {
				//计算果实和大鱼之间的距离
				var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if (l < 400) {
					fruit.dead(i);
					data.fruitNum ++;
					mom.momBodyCount ++;
					if (mom.momBodyCount > 7) {
						mom.momBodyCount = 7;
					}
					if (fruit.fruitType[i] == "blue") {
						data.double = 2;
					}
					wave.born(fruit.x[i], fruit.y[i]);
				}
			}
		}
	}
}

//mom baby collision
function momBabyCollision () {
	if (data.fruitNum > 0 && !data.gameOver) {
		var l = calLength2(mom.x, mom.y, baby.x, baby.y);
		if (l < 400) {
			baby.babyBodyCount = 0;
			mom.momBodyCount = 0;
			//score update
			data.addScore();
			halo.born(baby.x, baby.y);
		}
	}
}