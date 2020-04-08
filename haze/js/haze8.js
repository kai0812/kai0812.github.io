let displayHere = () => {
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

	let cnt = 0;
	for (let i = 0; i < width * height; i++) {
		if (cells[i] == 1) cnt++;
	}
	if (cnt == width * height - 1) {
		$('.displayClear').css('display', 'block');
		clear_flag = true;
		$('.box').css('background-color', 'black');
	}
};

let isRight = () => {
	return here % width != width - 1;
};
let isLeft = () => {
	return here % width != 0;
};
let isUp = () => {
	return here > width - 1;
};
let isDown = () => {
	return here < width * (height - 1);
};

let canRight = () => {
	let flag = false;
	if (isRight()) {
		if (cells[here + 1] == 0) {
			flag = true;
		}
	}
	return flag;
};
let canLeft = () => {
	let flag = false;
	if (isLeft()) {
		if (cells[here - 1] == 0) {
			flag = true;
		}
	}
	return flag;
};
let canUp = () => {
	let flag = false;
	if (isUp()) {
		let mini_flag = true;
		if (cells[here - width] == 0 && mini_flag) {
			flag = true;
		}
	}
	return flag;
};
let canDown = () => {
	let flag = false;
	if (isDown()) {
		let mini_flag = true;
		if (cells[here + width] == 0 && mini_flag) {
			flag = true;
		}
	}
	return flag;
};

let width = 7;
let height = 7;
let cells = [
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
	0,
	1,
	0,
	0,
	0,
	0,
	1,
	0,
	0,
	0,
	0,
	0,
	1,
	0,
	0,
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
	1,
	0,
	0,
	0,
	1,
	0,
	0,
	0,
	0,
	1,
	0,
	0,
	0,
];
let here = 27;
let point = [here % width, Math.floor(here / width)];
let clear_flag = false;

displayHere();

$('html').keyup((e) => {
	if (!clear_flag) {
		switch (e.which) {
			case 39: // Key[→]
				if (canRight()) {
					cells[here] = 1;
					here++;
					point[0]++;
					displayHere();
				}
				break;

			case 37: // Key[←]
				if (canLeft()) {
					cells[here] = 1;
					here--;
					point[0]--;
					displayHere();
				}
				break;

			case 38: // Key[↑]
				if (canUp()) {
					cells[here] = 1;
					here -= width;
					point[1]--;
					displayHere();
				}
				break;

			case 40: // Key[↓]
				if (canDown()) {
					cells[here] = 1;
					here += width;
					point[1]++;
					displayHere();
				}
				break;
		}
	}
});
