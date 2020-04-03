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
			$('.box').css('border-right', '3px solid black');
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isLeft()) {
		if (cells[here - 1][0] == 1) {
			$('.box').css('border-left', '3px solid black');
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}
	if (isUp()) {
		if (cells[here - width][0] == 1) {
			$('.box').css('border-top', '3px solid black');
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isDown()) {
		if (cells[here + width][0] == 1) {
			$('.box').css('border-bottom', '3px solid black');
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}

	rotateArrow();
}

function rotateArrow() {
	if (goalPoint[0] == point[0] && goalPoint[1] == point[1]) {
		$('#ue-img').css('display', 'none');
	} else {
		$('#ue-img').css('display', 'block');
	}
	if (goalPoint2[0] == point[0] && goalPoint2[1] == point[1]) {
		$('#ue-img2').css('display', 'none');
	} else {
		$('#ue-img2').css('display', 'block');
	}
	if (goalPoint3[0] == point[0] && goalPoint3[1] == point[1]) {
		$('#ue-img3').css('display', 'none');
	} else {
		$('#ue-img3').css('display', 'block');
	}
	if (goalPoint4[0] == point[0] && goalPoint4[1] == point[1]) {
		$('#ue-img4').css('display', 'none');
	} else {
		$('#ue-img4').css('display', 'block');
	}
	if (goalPoint5[0] == point[0] && goalPoint5[1] == point[1]) {
		$('#ue-img5').css('display', 'none');
	} else {
		$('#ue-img5').css('display', 'block');
	}
	if (goalPoint6[0] == point[0] && goalPoint6[1] == point[1]) {
		$('#ue-img6').css('display', 'none');
	} else {
		$('#ue-img6').css('display', 'block');
	}

	var atan = Math.atan((goalPoint[1] - point[1]) / (goalPoint[0] - point[0])) * (180 / Math.PI);
	var atan2 = Math.atan((goalPoint2[1] - point[1]) / (goalPoint2[0] - point[0])) * (180 / Math.PI);
	var atan3 = Math.atan((goalPoint3[1] - point[1]) / (goalPoint3[0] - point[0])) * (180 / Math.PI);
	var atan4 = Math.atan((goalPoint4[1] - point[1]) / (goalPoint4[0] - point[0])) * (180 / Math.PI);
	var atan5 = Math.atan((goalPoint5[1] - point[1]) / (goalPoint5[0] - point[0])) * (180 / Math.PI);
	var atan6 = Math.atan((goalPoint6[1] - point[1]) / (goalPoint6[0] - point[0])) * (180 / Math.PI);

	var theta, theta2, theta3, theta4, theta5, theta6;
	if (goalPoint[0] - point[0] >= 0) {
		theta = 90 + atan;
	} else {
		theta = atan - 90;
	}
	if (goalPoint2[0] - point[0] >= 0) {
		theta2 = 90 + atan2;
	} else {
		theta2 = atan2 - 90;
	}
	if (goalPoint3[0] - point[0] >= 0) {
		theta3 = 90 + atan3;
	} else {
		theta3 = atan3 - 90;
	}
	if (goalPoint4[0] - point[0] >= 0) {
		theta4 = 90 + atan4;
	} else {
		theta4 = atan4 - 90;
	}
	if (goalPoint5[0] - point[0] >= 0) {
		theta5 = 90 + atan5;
	} else {
		theta5 = atan5 - 90;
	}
	if (goalPoint6[0] - point[0] >= 0) {
		theta6 = 90 + atan6;
	} else {
		theta6 = atan6 - 90;
	}

	$('#ue-img').css('transform', 'rotate(' + theta + 'deg)');
	$('#ue-img2').css('transform', 'rotate(' + theta2 + 'deg)');
	$('#ue-img3').css('transform', 'rotate(' + theta3 + 'deg)');
	$('#ue-img4').css('transform', 'rotate(' + theta4 + 'deg)');
	$('#ue-img5').css('transform', 'rotate(' + theta5 + 'deg)');
	$('#ue-img6').css('transform', 'rotate(' + theta6 + 'deg)');
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

var width = 6;
var height = 5;
var cells = [
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 'G'],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 'S'],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],

	[0, 0],
	[0, 0],
	[1, 0],
	[1, 0],
	[1, 0],
	[1, 0],
];

function typeAst(key_number) {
	var check_cnt = 0;
	var check_list = [83, 81, 85, 65, 82, 69];

	if (ast_cnt < 6) {
		ast_list[ast_cnt] = key_number;
		ast_cnt++;
	}
	for (var i = 0; i < ast_cnt; i++) {
		$('#span-' + (i + 1)).css('opacity', 1);
	}
	for (var i = 0; i < 6; i++) {
		if (check_list[i] == ast_list[i]) {
			check_cnt++;
		}
	}
	if (check_cnt == 6) {
		$('.displayClear').css('display', 'block');
		clear_flag = false;
	}
	console.log(ast_list);
}

function deleteAst() {
	if (1 <= ast_cnt <= 6) {
		$('#span-' + ast_cnt).css('opacity', 0);
		ast_cnt--;
		ast_list[ast_cnt] = 0;
		console.log(ast_list);
	}
}
var here = 18;
var point = [0, 3];
var goalPoint = [0, 3];
var goalPoint2 = [4, 2];
var goalPoint3 = [2, 3];
var goalPoint4 = [0, 0];
var goalPoint5 = [5, 2];
var goalPoint6 = [4, 0];
var windowHeight = window.innerHeight;
var ast_list = [0, 0, 0, 0, 0, 0];
var ast_cnt = 0;
var clear_flag = true;

$('.img-arrow').css('left', 'calc(50% - ' + (windowHeight * 0.98 * 155 * 0.5) / 909 + 'px)');

displayHere();

$('html').keyup(function(e) {
	if (clear_flag) {
		switch (e.which) {
			case 8:
				deleteAst();
				break;
			case 13:
				typeAst(here + 65);
				break;
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
		}
	}
});
