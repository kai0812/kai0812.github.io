function displayHere(here, cells, width, height, point, goalPoint, change) {
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
		} else if (cells[here + 1][0] == 2) {
			$('.box').css('border-right', '0px solid black');
		}
	} else {
		$('.box').css('border-right', '3px solid black');
	}
	if (isLeft(here, width)) {
		if (cells[here - 1][0] == 1) {
			$('.box').css('border-left', '6px solid black');
		} else if (cells[here - 1][0] == 2) {
			$('.box').css('border-left', '0px solid black');
		}
	} else {
		$('.box').css('border-left', '3px solid black');
	}
	if (isUp(here, width)) {
		if (cells[here - width][0] == 1) {
			$('.box').css('border-top', '6px solid black');
		} else if (cells[here - width][0] == 2) {
			$('.box').css('border-top', '0px solid black');
		}
	} else {
		$('.box').css('border-top', '3px solid black');
	}
	if (isDown(here, width, height)) {
		if (cells[here + width][0] == 1) {
			$('.box').css('border-bottom', '6px solid black');
		} else if (cells[here + width][0] == 2) {
			$('.box').css('border-bottom', '0px solid black');
		}
	} else {
		$('.box').css('border-bottom', '3px solid black');
	}
	rotateArrow(point, goalPoint, change);
}

function rotateArrow(point, goalPoint, change) {
	if (goalPoint[0] == point[0] && goalPoint[1] == point[1] && change == 0) {
		$('#ue-img').css('display', 'none');
		$('.displayClear').css('display', 'block');
		return 0;
	}
	var atan = 180 - Math.atan((goalPoint[0] - point[0]) / (goalPoint[1] - point[1])) * (180 / Math.PI);
	if (goalPoint[1] < point[1]) {
		atan = 360 - Math.atan((goalPoint[0] - point[0]) / (goalPoint[1] - point[1])) * (180 / Math.PI);
	}
	$('#ue-img').css('transform', 'rotate(' + atan + 'deg)');
	console.log(180 - atan);
	console.log(point);
	console.log(goalPoint);
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

function playSecond() {
	var width = 4;
	var height = 4;
	var cells = [
		[0, 'S'],
		[0, 0],
		[0, 0],
		[0, 0],

		[1, 0],
		[0, 0],
		[1, 0],
		[0, 0],

		[0, 'G'],
		[1, 0],
		[0, 0],
		[0, 0],

		[0, 0],
		[1, 0],
		[2, 0],
		[0, 0],
	];
	var here = 0;
	var point = [0, 0];
	var goalPoint = [0, 2];
	var imgWidth = document.getElementById('ue-img').clientWidth;
	$('#ue-img').css('left', 'calc(50% - ' + imgWidth / 2 + 'px)');

	var change = 0;
	$('.changeW').click(function() {
		$(this).css('display', 'none');
		change = 1;
		here = 0;
		point = [0, 0];
		displayHere(here, cells, width, height, point, goalPoint, change);
	});
	$('.changeWB').click(function() {
		$('.changeW').css('display', 'block');
		change = 0;
		here = 0;
		point = [0, 0];
		displayHere(here, cells, width, height, point, goalPoint, change);
	});

	displayHere(here, cells, width, height, point, goalPoint, change);

	$('html').keyup(function(e) {
		if (change == 0) {
			switch (e.which) {
				case 13:
					var canMove = 0;
					var moveList = [0, 0, 0, 0];
					if (isUp(here, width)) {
						moveList[0] = 1;
					}
					if (isRight(here, width)) {
						moveList[1] = 1;
					}
					if (isDown(here, width, height)) {
						moveList[2] = 1;
					}
					if (isLeft(here, width)) {
						moveList[3] = 1;
					}

					for (var i = 0; i < 4; i++) {
						if (moveList[i] == 1) {
							switch (i) {
								case 0:
									if (cells[here - width][0] == 2) {
										canMove = -width;
									}
									break;
								case 1:
									if (cells[here + 1][0] == 2) {
										canMove = 1;
									}
									break;
								case 2:
									if (cells[here + width][0] == 2) {
										canMove = width;
									}
									break;
								case 3:
									if (cells[here - 1][0] == 2) {
										canMove = -1;
									}
									break;
							}
						}
					}

					if (canMove != 0) {
						var tmpList = cells[here];

						cells[here] = [2, 0];
						cells[here + canMove] = tmpList;
						here = here + canMove;

						switch (canMove) {
							case -width:
								point[1]--;
								break;
							case 1:
								point[0]++;
								break;
							case width:
								point[1]++;
								break;
							case -1:
								point[0]--;
								break;
						}
					}

					displayHere(here, cells, width, height, point, goalPoint, change);
					break;

				case 39: // Key[→]
					if (canRight(here, width, cells)) {
						here++;
						point[0]++;
						displayHere(here, cells, width, height, point, goalPoint, change);
					}
					break;

				case 37: // Key[←]
					if (canLeft(here, width, cells)) {
						here--;
						point[0]--;
						displayHere(here, cells, width, height, point, goalPoint, change);
					}
					break;

				case 38: // Key[↑]
					if (canUp(here, width, cells)) {
						here -= width;
						point[1]--;
						displayHere(here, cells, width, height, point, goalPoint, change);
					}
					break;

				case 40: // Key[↓]
					if (canDown(here, width, height, cells)) {
						here += width;
						point[1]++;
						displayHere(here, cells, width, height, point, goalPoint, change);
					}
					break;
			}
		} else if (change == 1) {
			switch (e.which) {
				case 13:
					var canMove = 0;
					var moveList = [0, 0, 0, 0];
					if (isUp(here, width)) {
						moveList[0] = 1;
					}
					if (isRight(here, width)) {
						moveList[1] = 1;
					}
					if (isDown(here, width, height)) {
						moveList[2] = 1;
					}
					if (isLeft(here, width)) {
						moveList[3] = 1;
					}

					for (var i = 0; i < 4; i++) {
						if (moveList[i] == 1) {
							switch (i) {
								case 0:
									if (cells[here - width][0] == 2) {
										canMove = -width;
									}
									break;
								case 1:
									if (cells[here + 1][0] == 2) {
										canMove = 1;
									}
									break;
								case 2:
									if (cells[here + width][0] == 2) {
										canMove = width;
									}
									break;
								case 3:
									if (cells[here - 1][0] == 2) {
										canMove = -1;
									}
									break;
							}
						}
					}

					if (canMove != 0) {
						var tmpList = cells[here];

						cells[here] = [2, 0];
						cells[here + canMove] = tmpList;
						here = here + canMove;

						switch (canMove) {
							case -width:
								point[1]--;
								break;
							case 1:
								point[0]++;
								break;
							case width:
								point[1]++;
								break;
							case -1:
								point[0]--;
								break;
						}
					}

					displayHere(here, cells, width, height, point, goalPoint, change);
					break;

				case 39: // Key[→]
					if (isRight(here, width, cells)) {
						if (cells[here + 1][0] != 2) {
							here++;
							point[0]++;
							displayHere(here, cells, width, height, point, goalPoint, change);
						}
					}
					break;

				case 37: // Key[←]
					if (isLeft(here, width, cells)) {
						if (cells[here - 1][0] != 2) {
							here--;
							point[0]--;
							displayHere(here, cells, width, height, point, goalPoint, change);
						}
					}
					break;

				case 38: // Key[↑]
					if (isUp(here, width, cells)) {
						if (cells[here - width][0] != 2) {
							here -= width;
							point[1]--;
							displayHere(here, cells, width, height, point, goalPoint, change);
						}
					}
					break;

				case 40: // Key[↓]
					if (isDown(here, width, height, cells)) {
						if (cells[here + width][0] != 2) {
							here += width;
							point[1]++;
							displayHere(here, cells, width, height, point, goalPoint, change);
						}
					}
					break;
			}
		}
	});
}

playSecond();
