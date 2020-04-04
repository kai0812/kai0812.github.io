function displayHere() {
	$('#box-1').css('border', '1px solid black');
	if (cells[here][0] == 0) {
		$('#box-1').css('background-color', 'white');
	} else {
		$('#box-1').css('background-color', 'black');
	}
	if (cells[here][1] != 0) {
		$('#box-1').text(cells[here][1]);
	} else {
		$('#box-1').text('');
	}
	if (isRight()) {
		if (cells[here + 1][0] == 1) {
			$('#box-1').css('border-right', '6px solid black');
		}
	} else {
		$('#box-1').css('border-right', '3px solid black');
	}
	if (isLeft()) {
		if (cells[here - 1][0] == 1) {
			$('#box-1').css('border-left', '6px solid black');
		}
	} else {
		$('#box-1').css('border-left', '3px solid black');
	}
	if (isUp()) {
		if (cells[here - width][0] == 1) {
			$('#box-1').css('border-top', '6px solid black');
		}
	} else {
		$('#box-1').css('border-top', '3px solid black');
	}
	if (isDown()) {
		if (cells[here + width][0] == 1) {
			$('#box-1').css('border-bottom', '6px solid black');
		}
	} else {
		$('#box-1').css('border-bottom', '3px solid black');
	}

	rotateArrow();
}

function displayHere2() {
	$('#box-2').css('border', '1px solid black');
	if (cells2[here2][0] == 0) {
		$('#box-2').css('background-color', 'white');
	} else {
		$('#box-2').css('background-color', 'black');
	}
	if (cells2[here2][1] != 0) {
		$('#box-2').text(cells2[here2][1]);
	} else {
		$('#box-2').text('');
	}
	if (isRight2()) {
		if (cells2[here2 + 1][0] == 1) {
			$('#box-2').css('border-right', '6px solid black');
		}
	} else {
		$('#box-2').css('border-right', '3px solid black');
	}
	if (isLeft2()) {
		if (cells2[here2 - 1][0] == 1) {
			$('#box-2').css('border-left', '6px solid black');
		}
	} else {
		$('#box-2').css('border-left', '3px solid black');
	}
	if (isUp2()) {
		if (cells2[here2 - width][0] == 1) {
			$('#box-2').css('border-top', '6px solid black');
		}
	} else {
		$('#box-2').css('border-top', '3px solid black');
	}
	if (isDown2()) {
		if (cells2[here2 + width][0] == 1) {
			$('#box-2').css('border-bottom', '6px solid black');
		}
	} else {
		$('#box-2').css('border-bottom', '3px solid black');
	}

	rotateArrow2();
}

function rotateArrow() {
	if (goalPoint[0] == point[0] && goalPoint[1] == point[1]) {
		$('#ue-img').css('display', 'none');
		clear_flag1 = true;
	} else {
		$('#ue-img').css('display', 'block');
		clear_flag1 = false;
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

function rotateArrow2() {
	if (goalPoint2[0] == point2[0] && goalPoint2[1] == point2[1]) {
		$('#ue-img2').css('display', 'none');
		clear_flag2 = true;
	} else {
		$('#ue-img2').css('display', 'block');
		clear_flag2 = false;
	}

	var atan = Math.atan((goalPoint2[1] - point2[1]) / (goalPoint2[0] - point2[0])) * (180 / Math.PI);

	var theta;
	if (goalPoint2[0] - point2[0] >= 0) {
		theta = 90 + atan;
	} else {
		theta = atan - 90;
	}

	$('#ue-img2').css('transform', 'rotate(' + theta + 'deg)');

	if (clear_flag1 && clear_flag2) {
		clear_flag = true;
		$('.displayClear').css('display', 'block');
	}
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

function isRight2() {
	return here2 % width != width - 1;
}
function isLeft2() {
	return here2 % width != 0;
}
function isUp2() {
	return here2 > width - 1;
}
function isDown2() {
	return here2 < width * (height - 1);
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

function canRight2() {
	var flag = false;
	if (isRight2()) {
		if (cells2[here2 + 1][0] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canLeft2() {
	var flag = false;
	if (isLeft2()) {
		if (cells2[here2 - 1][0] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canUp2() {
	var flag = false;
	if (isUp2()) {
		if (cells2[here2 - width][0] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canDown2() {
	var flag = false;
	if (isDown2()) {
		if (cells2[here2 + width][0] == 0) {
			flag = true;
		}
	}
	return flag;
}

const width = 5;
const height = 4;
var cells = [
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 'G'],
	[0, 0],

	[0, 0],
	[0, 'S'],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 0],
	[1, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
];

var cells2 = [
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 'G'],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 'S'],

	[0, 0],
	[1, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
];

var here = 6;
var here2 = 9;
var point = [1, 1];
var point2 = [4, 1];
var goalPoint = [3, 0];
var goalPoint2 = [0, 1];
const windowHeight = window.innerHeight;
var arrowWidth = (windowHeight * 0.98 * 155 * 0.5) / 909;

var clear_flag = false;
var clear_flag1 = false;
var clear_flag2 = false;

$('#ue-img').css('left', 'calc(44vw - 30vh - ' + arrowWidth + 'px)');
$('#ue-img2').css('right', 'calc(44vw - 30vh - ' + arrowWidth + 'px)');

displayHere();
displayHere2();

$('html').keyup(function(e) {
	if (!clear_flag) {
		switch (e.which) {
			case 39: // Key[→]
				if (canRight()) {
					here++;
					point[0]++;
					displayHere();
				}
				if (canRight2()) {
					here2++;
					point2[0]++;
					displayHere2();
				}
				break;

			case 37: // Key[←]
				if (canLeft()) {
					here--;
					point[0]--;
					displayHere();
				}
				if (canLeft2()) {
					here2--;
					point2[0]--;
					displayHere2();
				}
				break;

			case 38: // Key[↑]
				if (canUp()) {
					here -= width;
					point[1]--;
					displayHere();
				}
				if (canUp2()) {
					here2 -= width;
					point2[1]--;
					displayHere2();
				}
				break;

			case 40: // Key[↓]
				if (canDown()) {
					here += width;
					point[1]++;
					displayHere();
				}
				if (canDown2()) {
					here2 += width;
					point2[1]++;
					displayHere2();
				}
				break;
		}
	}
});
