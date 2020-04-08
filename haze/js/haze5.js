let displayHere = () => {
	$('#box-1').css('border', '1px solid black');
	if (cells[here][0] == 0) {
		$('#box-1').css('background-color', 'white');
	} else {
		$('#box-1').css('background-color', 'black');
	}
	if (cells[here][1] != 0) {
		$('#box-1').text(cells[here][1]);
	} else {
		$('#box-1').text('');
	}
	if (isRight()) {
		if (cells[here + 1][0] == 1) {
			$('#box-1').css('border-right', '6px solid black');
		}
	} else {
		$('#box-1').css('border-right', '3px solid black');
	}
	if (isLeft()) {
		if (cells[here - 1][0] == 1) {
			$('#box-1').css('border-left', '6px solid black');
		}
	} else {
		$('#box-1').css('border-left', '3px solid black');
	}
	if (isUp()) {
		if (cells[here - width][0] == 1) {
			$('#box-1').css('border-top', '6px solid black');
		}
	} else {
		$('#box-1').css('border-top', '3px solid black');
	}
	if (isDown()) {
		if (cells[here + width][0] == 1) {
			$('#box-1').css('border-bottom', '6px solid black');
		}
	} else {
		$('#box-1').css('border-bottom', '3px solid black');
	}

	rotateArrow();
};

let displayHere2 = () => {
	$('#box-2').css('border', '1px solid black');
	if (cells2[here2][0] == 0) {
		$('#box-2').css('background-color', 'white');
	} else {
		$('#box-2').css('background-color', 'black');
	}
	if (cells2[here2][1] != 0) {
		$('#box-2').text(cells2[here2][1]);
	} else {
		$('#box-2').text('');
	}
	if (isRight2()) {
		if (cells2[here2 + 1][0] == 1) {
			$('#box-2').css('border-right', '6px solid black');
		}
	} else {
		$('#box-2').css('border-right', '3px solid black');
	}
	if (isLeft2()) {
		if (cells2[here2 - 1][0] == 1) {
			$('#box-2').css('border-left', '6px solid black');
		}
	} else {
		$('#box-2').css('border-left', '3px solid black');
	}
	if (isUp2()) {
		if (cells2[here2 - width][0] == 1) {
			$('#box-2').css('border-top', '6px solid black');
		}
	} else {
		$('#box-2').css('border-top', '3px solid black');
	}
	if (isDown2()) {
		if (cells2[here2 + width][0] == 1) {
			$('#box-2').css('border-bottom', '6px solid black');
		}
	} else {
		$('#box-2').css('border-bottom', '3px solid black');
	}

	rotateArrow2();
};

let rotateArrow = () => {
	if (goalPoint[0] == point[0] && goalPoint[1] == point[1]) {
		$('#ue-img').css('display', 'none');
		clear_flag1 = true;
	} else {
		$('#ue-img').css('display', 'block');
		clear_flag1 = false;
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

let rotateArrow2 = () => {
	if (goalPoint2[0] == point2[0] && goalPoint2[1] == point2[1]) {
		$('#ue-img2').css('display', 'none');
		clear_flag2 = true;
	} else {
		$('#ue-img2').css('display', 'block');
		clear_flag2 = false;
	}

	let atan = Math.atan((goalPoint2[1] - point2[1]) / (goalPoint2[0] - point2[0])) * (180 / Math.PI);

	let theta;
	if (goalPoint2[0] - point2[0] >= 0) {
		theta = 90 + atan;
	} else {
		theta = atan - 90;
	}

	$('#ue-img2').css('transform', 'rotate(' + theta + 'deg)');

	if (clear_flag1 && clear_flag2) {
		clear_flag = true;
		$('.displayClear').css('display', 'block');
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

let isRight2 = () => {
	return here2 % width != width - 1;
};
let isLeft2 = () => {
	return here2 % width != 0;
};
let isUp2 = () => {
	return here2 > width - 1;
};
let isDown2 = () => {
	return here2 < width * (height - 1);
};

let canRight = () => {
	let flag = false;
	if (isRight()) {
		if (cells[here + 1][0] == 0) {
			flag = true;
		}
	}
	return flag;
};
let canLeft = () => {
	let flag = false;
	if (isLeft()) {
		if (cells[here - 1][0] == 0) {
			flag = true;
		}
	}
	return flag;
};
let canUp = () => {
	let flag = false;
	if (isUp()) {
		if (cells[here - width][0] == 0) {
			flag = true;
		}
	}
	return flag;
};
let canDown = () => {
	let flag = false;
	if (isDown()) {
		if (cells[here + width][0] == 0) {
			flag = true;
		}
	}
	return flag;
};

let canRight2 = () => {
	let flag = false;
	if (isRight2()) {
		if (cells2[here2 + 1][0] == 0) {
			flag = true;
		}
	}
	return flag;
};
let canLeft2 = () => {
	let flag = false;
	if (isLeft2()) {
		if (cells2[here2 - 1][0] == 0) {
			flag = true;
		}
	}
	return flag;
};
let canUp2 = () => {
	let flag = false;
	if (isUp2()) {
		if (cells2[here2 - width][0] == 0) {
			flag = true;
		}
	}
	return flag;
};
let canDown2 = () => {
	let flag = false;
	if (isDown2()) {
		if (cells2[here2 + width][0] == 0) {
			flag = true;
		}
	}
	return flag;
};

const width = 5;
const height = 4;
let cells = [
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 'G'],
	[0, 0],

	[0, 0],
	[0, 'S'],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 0],
	[1, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
];

let cells2 = [
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 'G'],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 'S'],

	[0, 0],
	[1, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
];

let here = 6;
let here2 = 9;
let point = [1, 1];
let point2 = [4, 1];
let goalPoint = [3, 0];
let goalPoint2 = [0, 1];
const windowHeight = window.innerHeight;
let arrowWidth = (windowHeight * 0.98 * 155 * 0.5) / 909;

let clear_flag = false;
let clear_flag1 = false;
let clear_flag2 = false;

$('#ue-img').css('left', 'calc(44vw - 30vh - ' + arrowWidth + 'px)');
$('#ue-img2').css('right', 'calc(44vw - 30vh - ' + arrowWidth + 'px)');

displayHere();
displayHere2();

$('html').keyup(
	(let = (e) => {
		if (!clear_flag) {
			switch (e.which) {
				case 39: // Key[→]
					if (canRight()) {
						here++;
						point[0]++;
						displayHere();
					}
					if (canRight2()) {
						here2++;
						point2[0]++;
						displayHere2();
					}
					break;

				case 37: // Key[←]
					if (canLeft()) {
						here--;
						point[0]--;
						displayHere();
					}
					if (canLeft2()) {
						here2--;
						point2[0]--;
						displayHere2();
					}
					break;

				case 38: // Key[↑]
					if (canUp()) {
						here -= width;
						point[1]--;
						displayHere();
					}
					if (canUp2()) {
						here2 -= width;
						point2[1]--;
						displayHere2();
					}
					break;

				case 40: // Key[↓]
					if (canDown()) {
						here += width;
						point[1]++;
						displayHere();
					}
					if (canDown2()) {
						here2 += width;
						point2[1]++;
						displayHere2();
					}
					break;
			}
		}
	})
);
