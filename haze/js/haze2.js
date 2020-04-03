function displayHere(here, cells, width, height) {
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
function checkList(here, cells) {
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
displayHere(here, cells, width, height);

$('html').keyup(function(e) {
	switch (e.which) {
		case 39: // Key[→]
			if (canRight(here, width, cells)) {
				here++;
				displayHere(here, cells, width, height);
			}
			break;

		case 37: // Key[←]
			if (canLeft(here, width, cells)) {
				here--;
				displayHere(here, cells, width, height);
			}
			break;

		case 38: // Key[↑]
			if (canUp(here, width, cells)) {
				here -= width;
				displayHere(here, cells, width, height);
			}
			break;

		case 40: // Key[↓]
			if (canDown(here, width, height, cells)) {
				here += width;
				displayHere(here, cells, width, height);
			}
			break;
	}

	switch (here) {
		case 7:
			if (e.which == 79) {
				cells[here][1] = 'O';
				displayHere(here, cells, width, height);
				checkList(here, cells);
			}
			break;
		case 11:
		case 14:
			if (e.which == 84) {
				cells[here][1] = 'T';
				displayHere(here, cells, width, height);
				checkList(here, cells);
			}
			break;
		case 12:
			if (e.which == 65) {
				cells[here][1] = 'A';
				displayHere(here, cells, width, height);
				checkList(here, cells);
			}
			break;
		case 13:
			if (e.which == 82) {
				cells[here][1] = 'R';
				displayHere(here, cells, width, height);
				checkList(here, cells);
			}
			break;
		case 17:
			if (e.which == 76) {
				cells[here][1] = 'L';
				displayHere(here, cells, width, height);
				checkList(here, cells);
			}
			break;
	}
});
