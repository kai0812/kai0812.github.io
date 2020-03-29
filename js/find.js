function displayHere(here, cells, width, height, point, goalPoint) {
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
	if (isRight(here, width)) {
		if (cells[here + 1][0] == 1) {
			$('.box').css('border-right', '6px solid black');
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isLeft(here, width)) {
		if (cells[here - 1][0] == 1) {
			$('.box').css('border-left', '6px solid black');
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}
	if (isUp(here, width)) {
		if (cells[here - width][0] == 1) {
			$('.box').css('border-top', '6px solid black');
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isDown(here, width, height)) {
		if (cells[here + width][0] == 1) {
			$('.box').css('border-bottom', '6px solid black');
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}
	rotateArrow(point, point, goalPoint);
}

function rotateArrow(point, point, goalPoint) {
	if (goalPoint[0] == point[0] && goalPoint[1] == point[1]) {
		$('#ue-img').css('display', 'none');
		$('.displayClear').css('display', 'block');
		return 0;
	}
	var atan = Math.atan((goalPoint[0] - point[0]) / (goalPoint[1] - point[1])) * (180 / Math.PI);
	$('#ue-img').css('transform', 'rotate(' + (180 - atan) + 'deg)');
}
function isRight(here, width) {
	return here % width != width - 1;
}
function isLeft(here, width) {
	return here % width != 0;
}
function isUp(here, width) {
	return here > width - 1;
}
function isDown(here, width, height) {
	return here < width * (height - 1);
}

function canRight(here, width, cells) {
	var flag = false;
	if (isRight(here, width)) {
		if (cells[here + 1][0] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canLeft(here, width, cells) {
	var flag = false;
	if (isLeft(here, width)) {
		if (cells[here - 1][0] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canUp(here, width, cells) {
	var flag = false;
	if (isUp(here, width)) {
		if (cells[here - width][0] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canDown(here, width, height, cells) {
	var flag = false;
	if (isDown(here, width, height)) {
		if (cells[here + width][0] == 0) {
			flag = true;
		}
	}
	return flag;
}

function playFirst() {
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

	displayHere(here, cells, width, height, point, goalPoint);

	$('html').keyup(function(e) {
		if (!(goalPoint[0] == point[0] && goalPoint[1] == point[1])) {
			switch (e.which) {
				case 39: // Key[→]
					if (canRight(here, width, cells)) {
						here++;
						point[0]++;
						displayHere(here, cells, width, height, point, goalPoint);
					}
					break;

				case 37: // Key[←]
					if (canLeft(here, width, cells)) {
						here--;
						point[0]--;
						displayHere(here, cells, width, height, point, goalPoint);
					}
					break;

				case 38: // Key[↑]
					if (canUp(here, width, cells)) {
						here -= width;
						point[1]--;
						displayHere(here, cells, width, height, point, goalPoint);
					}
					break;

				case 40: // Key[↓]
					if (canDown(here, width, height, cells)) {
						here += width;
						point[1]++;
						displayHere(here, cells, width, height, point, goalPoint);
					}
					break;
			}
		}
	});

	
}

playFirst();
