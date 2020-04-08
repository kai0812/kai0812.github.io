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
		else if (cells[here - width] == 1) {
			for (let i = 2; i < point[1] + 1; i++) {
				if (cells[here - width * i] == 0) {
					flag = i;
					break;
				}
			}
		}
	}

	return flag;
};
let canMoveDown = () => {
	let flag = 0;
	if (isDown()) {
		if (cells[here + width] == 0) flag = 1;
		else if (cells[here + width] == 1) {
			for (let i = 2; i < height - point[1]; i++) {
				if (cells[here + width * i] == 0) {
					flag = i;
					break;
				}
			}
		}
	}
	return flag;
};
let canMoveLeft = () => {
	let flag = 0;
	if (isLeft()) {
		if (cells[here - 1] == 0) flag = 1;
		else if (cells[here - 1] == 1) {
			for (let i = 2; i < point[0] + 1; i++) {
				if (cells[here - i] == 0) {
					flag = i;
					break;
				}
			}
		}
	}

	return flag;
};
let canMoveRight = () => {
	let flag = 0;
	if (isRight()) {
		if (cells[here + 1] == 0) flag = 1;
		else if (cells[here + 1] == 1) {
			for (let i = 2; i < width - point[0]; i++) {
				if (cells[here + i] == 0) {
					flag = i;
					break;
				}
			}
		}
	}
	return flag;
};

let swapRight = (num) => {
	cells[here + 1] = 0;
	for (let i = 2; i < num + 1; i++) {
		cells[here + i] = 1;
	}
};
let swapLeft = (num) => {
	cells[here - 1] = 0;
	for (let i = 2; i < num + 1; i++) {
		cells[here - i] = 1;
	}
};
let swapUp = (num) => {
	cells[here - width] = 0;
	for (let i = 2; i < num + 1; i++) {
		cells[here - width * i] = 1;
	}
};
let swapDown = (num) => {
	cells[here + width] = 0;
	for (let i = 2; i < num + 1; i++) {
		cells[here + width * i] = 1;
	}
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
	(let = (e) => {
		if (!clear_flag) {
			switch (e.which) {
				case 39: // Key[→]
					if (canMoveRight() != 0) {
						if (canMoveRight() >= 2) {
							swapRight(canMoveRight());
						}
						here++;
						point[0]++;
						displayHere();
					}
					break;

				case 37: // Key[←]
					if (canMoveLeft() != 0) {
						if (canMoveLeft() >= 2) {
							swapLeft(canMoveLeft());
						}
						here--;
						point[0]--;
						displayHere();
					}
					break;

				case 38: // Key[↑]
					if (canMoveUp() != 0) {
						if (canMoveUp() >= 2) {
							swapUp(canMoveUp());
						}
						here -= width;
						point[1]--;
						displayHere();
					}
					break;

				case 40: // Key[↓]
					if (canMoveDown() != 0) {
						if (canMoveDown() >= 2) {
							swapDown(canMoveDown());
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
