var width = 11;
var height = 7;
var cells = [
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	0,
	0,
	0,
	1,
	0,
	1,
	0,
	0,
	0,
	1,
	0,
	0,
	1,
	0,
	1,
	0,
	0,
	0,
	1,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	0,
	0,
	0,
	1,
	0,
	1,
	0,
	0,
	1,
	0,
	0,
	0,
	1,
	0,
	1,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	0,
	0,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
	1,
	0,
];
var here = 4;
var point = [here % width, Math.floor(here / width)];
var clear_flag = false;
var str = [];
var check = [83, 76, 73, 69, 78, 84];

displayHere();

$('html').keyup(function (e) {
	if (!clear_flag) {
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

			default:
				str.push(e.which);
				var cnt = 0;
				for (var i = 0; i < 6; i++) {
					if (check[i] == str[i]) cnt++;
				}
				if (cnt == 6) {
					$('.displayClear').css('display', 'block');
					clear_flag = true;
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
			$('.box').css('border-right', '3px solid black');
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isLeft()) {
		if (cells[here - 1] == 1) {
			$('.box').css('border-left', '3px solid black');
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}
	if (isUp()) {
		if (cells[here - width] == 1) {
			$('.box').css('border-top', '3px solid black');
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isDown()) {
		if (cells[here + width] == 1) {
			$('.box').css('border-bottom', '3px solid black');
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}

	switch (here) {
		case 27:
		case 53:
			$('.box').css('border-bottom', '3px solid black');
			break;
		case 38:
		case 64:
			$('.box').css('border-top', '3px solid black');
			break;
	}

	switch (here) {
		case 0:
			$('.box').text('L');
			break;
		case 2:
			$('.box').text('I');
			break;
		case 4:
			$('.box').text('S');
			break;
		case 6:
			$('.box').text('T');
			break;
		case 8:
			$('.box').text('E');
			break;
		case 10:
			$('.box').text('N');
			break;
		default:
			$('.box').text('');
			break;
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
		if (cells[here + 1] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canLeft() {
	var flag = false;
	if (isLeft()) {
		if (cells[here - 1] == 0) {
			flag = true;
		}
	}
	return flag;
}
function canUp() {
	var flag = false;
	if (isUp()) {
		var mini_flag = true;
		switch (here) {
			case 38:
			case 64:
				mini_flag = false;
		}
		if (cells[here - width] == 0 && mini_flag) {
			flag = true;
		}
	}
	return flag;
}
function canDown() {
	var flag = false;
	if (isDown()) {
		var mini_flag = true;
		switch (here) {
			case 53:
			case 27:
				mini_flag = false;
		}
		if (cells[here + width] == 0 && mini_flag) {
			flag = true;
		}
	}
	return flag;
}
