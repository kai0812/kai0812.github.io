'use strict';

var flag = false;
var flag_cnt = 0;
var num = [6, 0, 0, 0, 0, 0, 0, 0, 9];
var num_cnt = 1;
$('html').keyup(function (e) {
	if (!flag) {
		if (49 <= e.which && e.which <= 56) {
			inputNumber(e.which - 48);
		}
	}
	if (e.which == 13) {
		reset();
	}
});
$('.reset').click(function () {
	reset();
});
$('.button').click(function () {
	inputNumber($(this).data('num'));
});

function inputNumber(input) {
	var dif_cnt = 0;
	for (var i = 0; i < 9; i++) {
		if (num[i] != input) {
			dif_cnt++;
		}
	}
	if (dif_cnt == 9) {
		num[num_cnt] = input;
		$('.button' + input).css('opacity', 0);
		$('.n' + num_cnt).text(input);
		num_cnt++;
	}
	if (num_cnt == 8) {
		flag = true;
		displayCircle();
	}
}
function displayCircle() {
	var total = 0;
	var total2 = 0;
	for (var i = 0; i < 9; i++) {
		total = total * 10 + num[i];
		total2 = total2 * 10 + num[8 - i];
		if (total % num[i] == 0) {
			$('.u' + (i + 1)).css('background-color', 'white');
			flag_cnt++;
		} else {
			$('.u' + (i + 1)).css('background-color', 'black');
		}
		if (total2 % num[8 - i] == 0) {
			$('.s' + (-i + 9)).css('background-color', 'white');
			flag_cnt++;
		} else {
			$('.s' + (-i + 9)).css('background-color', 'black');
		}
		if (flag_cnt == 18) {
			$('.clear').addClass('displayClear');
			$('.clear-img').css('display', 'inline-block');
		}
	}
	$('.circle').css('opacity', 1);
}
function reset() {
	var reset_num = [1, 2, 3, 4, 5, 7, 8];
	for (var i = 1; i < 8; i++) {
		num[i] = 0;
		$('.mid-num').text('?');
		$('.button' + reset_num[i - 1]).css('opacity', 1);
	}
	num_cnt = 1;
	flag = false;
	$('.circle').css('opacity', 0);
}
