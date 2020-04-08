let displayHere = () => {
	switch (currentFace[here][0]) {
		case 0:
			$('.box').css('background-color', 'black');
			break;
		case 1:
			$('.box').css('background-color', 'white');
			break;
		case 2:
			$('.box').css('background-color', 'white');
			break;
	}
	if (isUp()) {
		switch (currentFace[here - width][0]) {
			case 0:
				$('.box').css('border-top', '6px solid black');
				break;
			case 1:
				$('.box').css('border-top', '1px solid black');
				break;
			case 2:
				if (currentFace[here - width][3] == 1) {
					$('.box').css('border-top', '3px solid black');
				} else {
					$('.box').css('border-top', '1px solid black');
				}
				break;
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isRight()) {
		switch (currentFace[here + 1][0]) {
			case 0:
				$('.box').css('border-right', '6px solid black');
				break;
			case 1:
				$('.box').css('border-right', '1px solid black');
				break;
			case 2:
				if (currentFace[here + 1][4] == 1) {
					$('.box').css('border-right', '3px solid black');
				} else {
					$('.box').css('border-right', '1px solid black');
				}
				break;
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isDown()) {
		switch (currentFace[here + width][0]) {
			case 0:
				$('.box').css('border-bottom', '6px solid black');
				break;
			case 1:
				$('.box').css('border-bottom', '1px solid black');
				break;
			case 2:
				if (currentFace[here + width][1] == 1) {
					$('.box').css('border-bottom', '3px solid black');
				} else {
					$('.box').css('border-bottom', '1px solid black');
				}
				break;
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}
	if (isLeft()) {
		switch (currentFace[here - 1][0]) {
			case 0:
				$('.box').css('border-left', '6px solid black');
				break;
			case 1:
				$('.box').css('border-left', '1px solid black');
				break;
			case 2:
				if (currentFace[here - 1][2] == 1) {
					$('.box').css('border-left', '3px solid black');
				} else {
					$('.box').css('border-left', '1px solid black');
				}
				break;
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}

	if (currentFace[here][0] == 2) {
		if (currentFace[here][1] == 1) $('.box').css('border-top', '3px solid black');
		if (currentFace[here][2] == 1) $('.box').css('border-right', '3px solid black');
		if (currentFace[here][3] == 1) $('.box').css('border-bottom', '3px solid black');
		if (currentFace[here][4] == 1) $('.box').css('border-left', '3px solid black');
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

let reset = () => {
	str = [];
};

let updatePoint = () => {
	point = [here % width, Math.floor(here / width)];
};
let updateHere = (direction) => {
	switch (direction) {
		case 0:
			here -= width;
			break;
		case 1:
			here += 1;
			break;
		case 2:
			here += width;
			break;

		case 3:
			here -= 1;
			break;
	}
};
let canMove = (direction) => {
	switch (direction) {
		case 0:
			if (isUp()) {
				switch (currentFace[here - width][0]) {
					case 0:
						return false;
					case 1:
						return true;
					case 2:
						if (currentFace[here - width][3] == 1) {
							return true;
						} else {
							return false;
						}
				}
			}
			break;
		case 1:
			if (isRight()) {
				switch (currentFace[here + 1][0]) {
					case 0:
						return false;
					case 1:
						return true;
					case 2:
						if (currentFace[here + 1][4] == 1) {
							return true;
						} else {
							return false;
						}
				}
			}
			break;
		case 2:
			if (isDown()) {
				switch (currentFace[here + width][0]) {
					case 0:
						return false;
					case 1:
						return true;
					case 2:
						if (currentFace[here + width][1] == 1) {
							return true;
						} else {
							return false;
						}
				}
			}
			break;
		case 3:
			if (isLeft()) {
				switch (currentFace[here - 1][0]) {
					case 0:
						return false;
					case 1:
						return true;
					case 2:
						if (currentFace[here - 1][2] == 1) {
							return true;
						} else {
							return false;
						}
				}
			}
			break;
	}
};
let rotateFaceOne = (face_in) => {
	let tmp_face = [];
	for (let i = 0; i < height * width; i++) {
		let x = i % width;
		let y = Math.floor(i / width);

		tmp_face[x * width - y + width - 1][0] = face[i][0];
		if (face[i][0] == 2) {
			for (let k = 1; k < 5; k++) {
				tmp_face[x * width - y + width - 1][(k % 4) + 1] = face[i][k];
			}
		}
	}
};
let rotateFace = (face, status) => {
	if (status == 0) return face;
	let rotatedFace = [];
	for (let i = 0; i < height * width; i++) {
		let x = i % width;
		let y = Math.floor(i / width);
		rotatedFace[x * width - y + width - 1] = [];
		rotatedFace[x * width - y + width - 1][0] = face[i][0];
		if (face[i][0] == 2) {
			for (let k = 1; k < 5; k++) {
				rotatedFace[x * width - y + width - 1][(k % 4) + 1] = face[i][k];
			}
		}
	}
	return rotateFace(rotatedFace, status - 1);
};

const width = 3;
const height = 3;
const face1 = [[1], [1], [1], [1], [2, 1, 0, 1, 0], [2, 1, 0, 1, 0], [1], [1], [1]];
const face2 = [[1], [1], [1], [2, 0, , 0, 1, 0], [2, 1, 0, 1, 0], [2, 1, 0, 0, 0], [1], [1], [1]];
const face3 = [[1], [1], [1], [1], [0], [0], [1], [1], [1]];
const face4 = [[1], [1], [1], [1], [2, 1, 0, 0, 0], [1], [1], [0], [1]];
const face5 = [[1], [1], [1], [1], [2, 1, 0, 0, 0], [1], [1], [0], [0]];
const face6 = face1;
let clear_flag = false;
let here = 4;
let point = [here % width, Math.floor(here / width)];
let str = [];
const comparedStr = [69, 83, 67, 66, 80, 69];
let currentFace = face1;

displayHere(currentFace);

$('html').keyup((e) => {
	if (!clear_flag) {
		switch (e.which) {
			case 38: // Key[↑]
				if (canMove(0)) {
					updateHere(0);
					updatePoint();
					displayHere();
				}else {

				}
				break;
			case 39: // Key[→]
				if (canMove(1)) {
					updateHere(1);
					updatePoint();
					displayHere();
				}
				break;
			case 40: // Key[↓]
				if (canMove(2)) {
					updateHere(2);
					updatePoint();
					displayHere();
				}
				break;
			case 37: // Key[←]
				if (canMove(3)) {
					updateHere(3);
					updatePoint();
					displayHere();
				}
				break;
			default:
				if (65 <= e.which && e.which <= 90) {
					str.push(e.which);
					let cnt = 0;
					for (let i = 0; i < 6; i++) {
						if (str[i] == comparedStr[i]) cnt++;
					}
					if (cnt == 6) {
						$('.displayClear').css('display', 'block');
						clear_flag = true;
					}
				}
				break;
		}
	}
});

$('.reset').on('click', () => reset());
