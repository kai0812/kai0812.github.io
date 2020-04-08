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
let rotateArrow = () => {
	if (goalPoint[0] == point[0] && goalPoint[1] == point[1]) {
		$('#ue-img').css('display', 'none');
		$('.displayClear').css('display', 'block');
	} else {
		$('#ue-img').css('display', 'block');
	}

	let atan = Math.atan((goalPoint[1] - point[1]) / (goalPoint[0] - point[0])) * (180 / Math.PI);

	let theta;
	if (goalPoint[0] - point[0] >= 0) {
		theta = 90 + atan;
	} else {
		theta = atan - 90;
	}

	$('#ue-img').css('transform', 'rotate(' + theta + 'deg)');
};
let canMoveUp = () => {
	let flag = 0;
	if (isUp()) {
		if (cells[here - width] == 0) flag = 1;
	}
	if (here >= 2 * width) {
		if (cells[here - 2 * width] == 0 && cells[here - width] == 1) flag = 2;
	}
	console.log(flag);
	return flag;
};
let canMoveDown = () => {
	let flag = 0;
	if (isDown()) {
		if (cells[here + width] == 0) flag = 1;
	}
	if (here < width * (height - 2)) {
		if (cells[here + 2 * width] == 0 && cells[here + width] == 1) flag = 2;
	}
	console.log(flag);
	return flag;
};
let canMoveLeft = () => {
	let flag = 0;
	if (isLeft()) {
		if (cells[here - 1] == 0) flag = 1;
	}
	if (here % width > 1) {
		console.log(flag);
		if (cells[here - 2] == 0 && cells[here - 1] == 1) flag = 2;
	}
	return flag;
};
let canMoveRight = () => {
	let flag = 0;
	if (isRight()) {
		if (cells[here + 1] == 0) flag = 1;
	}
	if (here % width < width - 2) {
		if (cells[here + 2] == 0 && cells[here + 1] == 1) flag = 2;
	}
	console.log(flag);
	return flag;
};

let swapRight = () => {
	cells[here + 1] = 0;
	cells[here + 2] = 1;
};
let swapLeft = () => {
	cells[here - 1] = 0;
	cells[here - 2] = 1;
};
let swapUp = () => {
	cells[here - width] = 0;
	cells[here - 2 * width] = 1;
};
let swapDown = () => {
	cells[here + width] = 0;
	cells[here + 2 * width] = 1;
};
let width = 5;
let height = 5;
let cells = [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
let here = 9;
let point = [here % width, Math.floor(here / width)];
let goalPoint = [3, 4];
let clear_flag = false;
let windowHeight = window.innerHeight;

displayHere();
$('#ue-img').css('left', 'calc(50% - ' + (windowHeight * 0.98 * 155 * 0.5) / 909 + 'px)');

$('html').keyup(
	((e) => {
		if (!clear_flag) {
			switch (e.which) {
				case 39: // Key[→]
					if (canMoveRight() != 0) {
						if (canMoveRight() == 2) {
							swapRight();
						}
						here++;
						point[0]++;
						displayHere();
					}
					break;

				case 37: // Key[←]
					if (canMoveLeft() != 0) {
						if (canMoveLeft() == 2) {
							swapLeft();
						}
						here--;
						point[0]--;
						displayHere();
					}
					break;

				case 38: // Key[↑]
					if (canMoveUp() != 0) {
						if (canMoveUp() == 2) {
							swapUp();
						}
						here -= width;
						point[1]--;
						displayHere();
					}
					break;

				case 40: // Key[↓]
					if (canMoveDown() != 0) {
						if (canMoveDown() == 2) {
							swapDown();
						}
						here += width;
						point[1]++;
						displayHere();
					}
					break;
			}
		}
	})
);

$('.reset').click(
	(let = () => {
		str = [];
	})
);
