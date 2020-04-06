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
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isLeft()) {
		if (cells[here - 1][0] == 1) {
			$('.box').css('border-left', '6px solid black');
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}
	if (isUp()) {
		if (cells[here - width][0] == 1) {
			$('.box').css('border-top', '6px solid black');
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isDown()) {
		if (cells[here + width][0] == 1) {
			$('.box').css('border-bottom', '6px solid black');
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}
	rotateArrow();
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
	[0, 0],
	[1, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[1, 0],
	[0, 0],
	[0, 0],
	[1, 0],
	[0, 'G'],
	[0, 0],
];
var here = 0;
var point = [0, 0];
var goalPoint = [2, 3];
var imgWidth = document.getElementById('ue-img').clientWidth;
$('#ue-img').css('left', 'calc(50% - ' + imgWidth / 2 + 'px)');
console.log(imgWidth);

displayHere();

$('html').keyup(function(e) {
	if (!(goalPoint[0] == point[0] && goalPoint[1] == point[1])) {
		switch (e.which) {
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
	}
});
