var width = 6;
var height = 6;
var cells = [
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	0,
	1,
	1,
	0,
	1,
	1,
	0,
	1,
	1,
	0,
	0,
	0,
	0,
	0,
	0,
];
var here = 0;
var point = [here % width, Math.floor(here / width)];
var clear_flag = false;
var str = [];
var check = [67, 69, 76, 76];

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
				for (var i = 0; i < 4; i++) {
					if (check[i] == str[i]) cnt++;
				}
				if (cnt == 4) {
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
		case 4:
		case 5:
			$('.box').css('border-bottom', '3px solid black');
			break;
		case 10:
		case 11:
			$('.box').css('border-bottom', '3px solid black');
			$('.box').css('border-top', '3px solid black');
			break;
		case 16:
		case 17:
			$('.box').css('border-top', '3px solid black');
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
			case 10:
			case 11:
			case 16:
			case 17:
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
			case 10:
			case 11:
			case 4:
			case 5:
				mini_flag = false;
		}
		if (cells[here + width] == 0 && mini_flag) {
			flag = true;
		}
	}
	return flag;
}
