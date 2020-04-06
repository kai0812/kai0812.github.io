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

$('.reset').on('click touchstart', function () {
	reset();
});
$('.button').on('click touchstart', function () {
	if (0 < $(this).data('num')) {
		inputNumber($(this).data('num'));
	}else {
		reset();
	}
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
		$('.button' + input).css('visibility', 'hidden');
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
	}

	$('.circle').css('opacity', 1);
	if (flag_cnt == 18) {
		$('.clear').addClass('displayClear');
		$('.clear-img').css('display', 'inline-block');
		displayShareButton();
		$(window).resize(function () {
			displayShareButton();
		});
	} else {
		flag_cnt = 0;
	}
}
function reset() {
	var reset_num = [1, 2, 3, 4, 5, 7, 8];
	for (var i = 1; i < 8; i++) {
		num[i] = 0;
		$('.mid-num').text('?');
		$('.button' + reset_num[i - 1]).css('visibility', 'visible');
	}
	num_cnt = 1;
	flag = false;
	$('.circle').css('opacity', 0);
	flag_cnt = 0;
}

function displayShareButton() {
	var window_width = window.innerWidth;
	var window_height = window.innerHeight;
	var clear_width = $('.clear-img').width();
	var clear_height = $('.clear-img').height();
	$('.share-btn').css({
		top: window_height / 2 + clear_height / 2 + 'px',
		right: window_width / 2 - clear_width / 2 + 'px',
	});
}

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
$('table').css('top', (windowHeight / 100) * 15 + 'px');
$('.button-wrap').css({
	top: (windowHeight / 100) * 20 + (windowWidth / 100) * 24 + 'px',
});
