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

var width = 5;
var height = 4;
var cells = [
	[1, 0],
	[1, 0],
	[0, 'G'],
	[1, 0],
	[1, 0],

	[1, 0],
	[1, 0],
	[0, 0],
	[1, 0],
	[1, 0],

	[0, 'S'],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[1, 0],
	[1, 0],
	[0, 0],
	[1, 0],
	[1, 0],
];
var here = 10;
function checkList() {
	var cnt = 0;
	var list = [7, 11, 12, 13, 14, 17];
	for (var i = 0; i < 6; i++) {
		if (cells[list[i]][1] != 0) {
			cnt++;
		}
		if (cnt == 6) {
			$('.displayClear').css('display', 'block');
		}
	}
}
displayHere();

$('html').keyup(function(e) {
	switch (e.which) {
		case 39: // Key[→]
			if (canRight()) {
				here++;
				displayHere();
			}
			break;

		case 37: // Key[←]
			if (canLeft()) {
				here--;
				displayHere();
			}
			break;

		case 38: // Key[↑]
			if (canUp()) {
				here -= width;
				displayHere();
			}
			break;

		case 40: // Key[↓]
			if (canDown()) {
				here += width;
				displayHere();
			}
			break;
	}

	switch (here) {
		case 7:
			if (e.which == 79) {
				cells[here][1] = 'O';
				displayHere();
				checkList(here);
			}
			break;
		case 11:
		case 14:
			if (e.which == 84) {
				cells[here][1] = 'T';
				displayHere();
				checkList(here);
			}
			break;
		case 12:
			if (e.which == 65) {
				cells[here][1] = 'A';
				displayHere();
				checkList(here);
			}
			break;
		case 13:
			if (e.which == 82) {
				cells[here][1] = 'R';
				displayHere();
				checkList(here);
			}
			break;
		case 17:
			if (e.which == 76) {
				cells[here][1] = 'L';
				displayHere();
				checkList(here);
			}
			break;
	}
});
