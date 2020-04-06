function displayHere() {
	$('.box').css('border', '1px solid black');
	if (cells[here][0] == 0) {
		$('.box').css('background-color', 'white');
	} else {
		$('.box').css('background-color', 'black');
	}
	if (cells[here][1] != 0) {
		$('.box').text(cells[here][1]);
	} else {
		$('.box').text('');
	}
	if (isRight()) {
		if (cells[here + 1][0] == 1) {
			$('.box').css('border-right', '6px solid black');
		} else if (cells[here + 1][0] == 2) {
			$('.box').css('border-right', '0px solid black');
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isLeft()) {
		if (cells[here - 1][0] == 1) {
			$('.box').css('border-left', '6px solid black');
		} else if (cells[here - 1][0] == 2) {
			$('.box').css('border-left', '0px solid black');
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}
	if (isUp()) {
		if (cells[here - width][0] == 1) {
			$('.box').css('border-top', '6px solid black');
		} else if (cells[here - width][0] == 2) {
			$('.box').css('border-top', '0px solid black');
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isDown()) {
		if (cells[here + width][0] == 1) {
			$('.box').css('border-bottom', '6px solid black');
		} else if (cells[here + width][0] == 2) {
			$('.box').css('border-bottom', '0px solid black');
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}
	rotateArrow();
}

function rotateArrow() {
	if (goalPoint[0] == point[0] && goalPoint[1] == point[1] && change == 1) {
		$('#ue-img').css('display', 'none');
		return 0;
	} else {
		$('#ue-img').css('display', 'block');
	}
	if (goalPoint[0] == point[0] && goalPoint[1] == point[1] && change == 0) {
		$('#ue-img').css('display', 'none');
		$('.displayClear').css('display', 'block');
		return 0;
	}

	var atan = Math.atan((goalPoint[1] - point[1]) / (goalPoint[0] - point[0])) * (180 / Math.PI);

	var theta;
	if (goalPoint[0] - point[0] >= 0) {
		theta = 90 + atan;
	} else {
		theta = atan - 90;
	}

	$('#ue-img').css('transform', 'rotate(' + theta + 'deg)');
}
function isRight() {
	return here % width != width - 1;
}
function isLeft() {
	return here % width != 0;
}
function isUp() {
	return here > width - 1;
}
function isDown() {
	return here < width * (height - 1);
}

function canRight() {
	var flag = false;
	if (isRight()) {
		if (cells[here + 1][0] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canLeft() {
	var flag = false;
	if (isLeft()) {
		if (cells[here - 1][0] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canUp() {
	var flag = false;
	if (isUp()) {
		if (cells[here - width][0] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canDown() {
	var flag = false;
	if (isDown()) {
		if (cells[here + width][0] == 0) {
			flag = true;
		}
	}
	return flag;
}

var width = 4;
var height = 4;
var cells = [
	[0, 'S'],
	[0, 0],
	[0, 0],
	[1, 0],

	[1, 0],
	[0, 0],
	[2, 0],
	[1, 0],

	[1, 0],
	[2, 0],
	[2, 0],
	[1, 0],

	[1, 0],
	[2, 0],
	[2, 0],
	[0, 'G'],
];
var here = 0;
var point = [0, 0];
var goalPoint = [3, 3];
var startPoint = [0, 0];
var imgWidth = document.getElementById('ue-img').clientWidth;
$('#ue-img').css('left', 'calc(50% - ' + imgWidth / 2 + 'px)');

var change = 0;
$('.changeW').click(function() {
	$(this).css('display', 'none');
	change = 1;
	here = startPoint[0] + startPoint[1] * width;
	point[0] = startPoint[0];
	point[1] = startPoint[1];
	displayHere();
});
$('.changeWB').click(function() {
	$('.changeW').css('display', 'block');
	change = 0;
	here = startPoint[0] + startPoint[1] * width;
	point[0] = startPoint[0];
	point[1] = startPoint[1];
	displayHere();
});

displayHere();

$('html').keyup(function(e) {
	if (change == 0) {
		switch (e.which) {
			case 13:
				var canMove = 0;
				var moveList = [0, 0, 0, 0];
				if (isUp()) {
					moveList[0] = 1;
				}
				if (isRight()) {
					moveList[1] = 1;
				}
				if (isDown()) {
					moveList[2] = 1;
				}
				if (isLeft()) {
					moveList[3] = 1;
				}

				var moveCnt = 0;
				for (var i = 0; i < 4; i++) {
					if (moveList[i] == 1) {
						switch (i) {
							case 0:
								if (cells[here - width][0] == 2) {
									canMove = -width;
									moveCnt++;
								}
								break;
							case 1:
								if (cells[here + 1][0] == 2) {
									canMove = 1;
									moveCnt++;
								}
								break;
							case 2:
								if (cells[here + width][0] == 2) {
									canMove = width;
									moveCnt++;
								}
								break;
							case 3:
								if (cells[here - 1][0] == 2) {
									canMove = -1;
									moveCnt++;
								}
								break;
						}
					}
				}

				if (canMove != 0 && moveCnt == 1) {
					var tmpList = cells[here];

					cells[here] = [2, 0];
					cells[here + canMove] = tmpList;
					here = here + canMove;

					switch (canMove) {
						case -width:
							point[1]--;
							break;
						case 1:
							point[0]++;
							break;
						case width:
							point[1]++;
							break;
						case -1:
							point[0]--;
							break;
					}
				}

				for (var i = 0; i < height * width; i++) {
					if (cells[i][1] == 'G') {
						goalPoint[0] = i % width;
						goalPoint[1] = Math.floor(i / width);
						console.log(goalPoint);
					}
					if (cells[i][1] == 'S') {
						startPoint[0] = i % width;
						startPoint[1] = Math.floor(i / width);
						console.log(startPoint);
					}
				}

				displayHere();
				break;

			case 39: // Key[→]
				if (canRight()) {
					here++;
					point[0]++;
					displayHere();
				}
				break;

			case 37: // Key[←]
				if (canLeft()) {
					here--;
					point[0]--;
					displayHere();
				}
				break;

			case 38: // Key[↑]
				if (canUp()) {
					here -= width;
					point[1]--;
					displayHere();
				}
				break;

			case 40: // Key[↓]
				if (canDown()) {
					here += width;
					point[1]++;
					displayHere();
				}
				break;
		}
	} else if (change == 1) {
		switch (e.which) {
			case 13:
				var canMove = 0;
				var moveList = [0, 0, 0, 0];
				if (isUp()) {
					moveList[0] = 1;
				}
				if (isRight()) {
					moveList[1] = 1;
				}
				if (isDown()) {
					moveList[2] = 1;
				}
				if (isLeft()) {
					moveList[3] = 1;
				}

				var moveCnt = 0;
				for (var i = 0; i < 4; i++) {
					if (moveList[i] == 1) {
						switch (i) {
							case 0:
								if (cells[here - width][0] == 2) {
									canMove = -width;
									moveCnt++;
								}
								break;
							case 1:
								if (cells[here + 1][0] == 2) {
									canMove = 1;
									moveCnt++;
								}
								break;
							case 2:
								if (cells[here + width][0] == 2) {
									canMove = width;
									moveCnt++;
								}
								break;
							case 3:
								if (cells[here - 1][0] == 2) {
									canMove = -1;
									moveCnt++;
								}
								break;
						}
					}
				}

				if (canMove != 0 && moveCnt == 1) {
					var tmpList = cells[here];

					cells[here] = [2, 0];
					cells[here + canMove] = tmpList;
					here = here + canMove;

					switch (canMove) {
						case -width:
							point[1]--;
							break;
						case 1:
							point[0]++;
							break;
						case width:
							point[1]++;
							break;
						case -1:
							point[0]--;
							break;
					}
				}

				for (var i = 0; i < height * width; i++) {
					if (cells[i][1] == 'G') {
						goalPoint[0] = i % width;
						goalPoint[1] = Math.floor(i / width);
						console.log(goalPoint);
					}
					if (cells[i][1] == 'S') {
						startPoint[0] = i % width;
						startPoint[1] = Math.floor(i / width);
						console.log(startPoint);
					}
				}

				displayHere();
				break;

			case 39: // Key[→]
				if (isRight()) {
					if (cells[here + 1][0] != 2) {
						here++;
						point[0]++;
						displayHere();
					}
				}
				break;

			case 37: // Key[←]
				if (isLeft()) {
					if (cells[here - 1][0] != 2) {
						here--;
						point[0]--;
						displayHere();
					}
				}
				break;

			case 38: // Key[↑]
				if (isUp()) {
					if (cells[here - width][0] != 2) {
						here -= width;
						point[1]--;
						displayHere();
					}
				}
				break;

			case 40: // Key[↓]
				if (isDown()) {
					if (cells[here + width][0] != 2) {
						here += width;
						point[1]++;
						displayHere();
					}
				}
				break;
		}
	}
});
