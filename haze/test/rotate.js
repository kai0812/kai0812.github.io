var height = 6;
var width = 6;
var cells = [
	[1, 1, 0],
	[0, 0, 0],
	[1, 0, 0],
	[0, 1, 0],
	[0, 0, 0],
	[0, 0, 'S'],

	[0, 0, 0],
	[1, 0, 0],
	[0, 1, 0],
	[0, 0, 0],
	[0, 1, 0],
	[0, 1, 0],

	[0, 1, 0],
	[0, 0, 0],
	[1, 1, 0],
	[0, 1, 0],
	[0, 0, 0],
	[0, 0, 0],

	[0, 0, 0],
	[0, 1, 0],
	[1, 0, 0],
	[0, 0, 0],
	[1, 0, 0],
	[1, 1, 0],

	[1, 1, 0],
	[0, 1, 0],
	[0, 0, 0],
	[1, 1, 0],
	[0, 0, 0],
	[1, 0, 0],

	[1, 0, 'G'],
	[0, 0, 0],
	[0, 0, 0],
	[0, 1, 0],
	[0, 1, 0],
	[0, 0, 0],
];

var here = 5;
var point = [here % width, Math.floor(here / width)];
var start = 5;
var goal = 30;

makeBoard();
displayBoard();

$('html').keyup(function (e) {
	if (true) {
		switch (e.which) {
			case 39: // Key[→]
				if (canRight()) {
					here++;
					point[0]++;
					displayBoard();
				}
				break;

			case 37: // Key[←]
				if (canLeft()) {
					here--;
					point[0]--;
					displayBoard();
				}
				break;

			case 38: // Key[↑]
				if (canUp()) {
					here -= width;
					point[1]--;
					displayBoard();
				}
				break;

			case 40: // Key[↓]
				if (canDown()) {
					here += width;
					point[1]++;
					displayBoard();
				}
				break;

			case 191: // blue
				rotateCells(0);
				displayBoard();
				break;

			case 226: // red
				rotateCells(1);
				displayBoard();
				break;
		}
	}
});

function makeBoard() {
	for (var i = 0; i < height; i++) {
		$('table').append('<tr></tr>');
	}
	for (var i = 0; i < width; i++) {
		$('tr').append('<td></td>');
	}
}
function displayBoard() {
	for (var i = 0; i < width * height; i++) {
		if (cells[i][0] == 1) {
			if (cells[i][1] == 1) {
				$('td').eq(i).css('background-color', 'purple');
			} else {
				$('td').eq(i).css('background-color', 'blue');
			}
		} else {
			if (cells[i][1] == 1) {
				$('td').eq(i).css('background-color', 'red');
			} else {
				$('td').eq(i).css('background-color', 'white');
			}
		}
		cells[i][2] = 0;
	}

	cells[start][2] = 'S';
	cells[goal][2] = 'G';
	cells[here][2] = 'H';
	for (var i = 0; i < height * width; i++) {
		if (cells[i][2] != 0) {
			$('td').eq(i).text(cells[i][2]);
		} else {
			$('td').eq(i).text('');
		}
	}
}
function rotateCells(colorSign) {
	if (height != width) return;
	if (cells[Math.floor(here / width) + ((-here % width) + width - 1) * width][colorSign] == 1) return;

	var tmp_cells = [];
	for (var i = 0; i < height * width; i++) {
		var x = i % width;
		var y = Math.floor(i / width);
		tmp_cells[x * width - y + width - 1] = cells[i][colorSign];
	}
	for (var i = 0; i < height * width; i++) {
		cells[i][colorSign] = tmp_cells[i];
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
		if (cells[here + 1][0] == 0 && cells[here + 1][1] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canLeft() {
	var flag = false;
	if (isLeft()) {
		if (cells[here - 1][0] == 0 && cells[here - 1][1] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canUp() {
	var flag = false;
	if (isUp()) {
		if (cells[here - width][0] == 0 && cells[here - width][1] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canDown() {
	var flag = false;
	if (isDown()) {
		if (cells[here + width][0] == 0 && cells[here + width][1] == 0) {
			flag = true;
		}
	}
	return flag;
}
