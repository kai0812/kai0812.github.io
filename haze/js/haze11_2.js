var width = 5;
var height = 5;
var cells = [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
var here = 9;
var point = [here % width, Math.floor(here / width)];
var goalPoint = [3, 4];
var clear_flag = false;
var windowHeight = window.innerHeight;

displayHere();
$('#ue-img').css('left', 'calc(50% - ' + (windowHeight * 0.98 * 155 * 0.5) / 909 + 'px)');

$('html').keyup(function (e) {
	if (!clear_flag) {
		switch (e.which) {
			case 39: // Key[→]
				if (canMoveRight()) {
					here++;
					point[0]++;
					displayHere();
				}
				break;

			case 37: // Key[←]
				if (canMoveLeft()) {
					here--;
					point[0]--;
					displayHere();
				}
				break;

			case 38: // Key[↑]
				if (canMoveUp()) {
					here -= width;
					point[1]--;
					displayHere();
				}
				break;

			case 40: // Key[↓]
				if (canMoveDown()) {
					here += width;
					point[1]++;
					displayHere();
				}
				break;
		}
	}
});

$('.reset').click(function () {
	str = [];
});

function displayHere() {
	$('.box').css('border', '1px solid black');
	if (cells[here] == 0) {
		$('.box').css('background-color', 'white');
	} else {
		$('.box').css('background-color', 'black');
	}
	if (isRight()) {
		if (cells[here + 1] == 1) {
			$('.box').css('border-right', '6px solid black');
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isLeft()) {
		if (cells[here - 1] == 1) {
			$('.box').css('border-left', '6px solid black');
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}
	if (isUp()) {
		if (cells[here - width] == 1) {
			$('.box').css('border-top', '6px solid black');
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isDown()) {
		if (cells[here + width] == 1) {
			$('.box').css('border-bottom', '6px solid black');
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}

	switch (here) {
		case 9:
			$('.box').text('S');
			break;
		case 23:
			$('.box').text('G');
			break;
		default:
			$('.box').text('');
	}
	rotateArrow();
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
function rotateArrow() {
	if (goalPoint[0] == point[0] && goalPoint[1] == point[1]) {
		$('#ue-img').css('display', 'none');
		$('.displayClear').css('display', 'block');
	} else {
		$('#ue-img').css('display', 'block');
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
function canMoveUp() {
	var flag = 0;
	if (isUp()) {
		if (cells[here - width] == 0) flag = 1;
	}
	if (here >= 2 * width) {
		if (cells[here - 2 * width] == 0 && cells[here - width] == 1) flag = 2;
	}
	console.log(flag);
	return flag;
}
function canMoveDown() {
	var flag = 0;
	if (isDown()) {
		if (cells[here + width] == 0) flag = 1;
	}
	if (here < width * (height - 2)) {
		if (cells[here + 2 * width] == 0 && cells[here + width] == 1) flag = 2;
	}
	console.log(flag);
	return flag;
}
function canMoveLeft() {
	var flag = 0;
	if (isLeft()) {
		if (cells[here - 1] == 0) flag = 1;
	}
	if (here % width > 1) {
		console.log(flag);
		if (cells[here - 2] == 0 && cells[here - 1] == 1) flag = 2;
	}
	return flag;
}
function canMoveRight() {
	var flag = 0;
	if (isRight()) {
		if (cells[here + 1] == 0) flag = 1;
	}
	if (here % width < width - 2) {
		if (cells[here + 2] == 0 && cells[here + 1] == 1) flag = 2;
	}
	console.log(flag);
	return flag;
}

function swapRight() {}
function swapLeft() {}
function swapUp() {}
function swapDown() {}
