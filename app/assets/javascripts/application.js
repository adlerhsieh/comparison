// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var countdown = 30;
var time = 0;
var answer_random = [0, 0];
var answer_result = 0;
var answer_string = "";
var left_option = [];
var right_option = [];
var random_formula = 0;
var score = 0;
var life = 3;
var difficulty = 5;

$(document).ready(function(){
	refresh();
	$(".countdown").text(countdown.toFixed(2));
	$(".left_block").click(function(){
		if (left_option[0] >= right_option[0]) {
			correct_answer();
		} else {
			wrong_answer()
		};
	});

	$(".right_block").click(function(){
		if (right_option[0] >= left_option[0]) {
			correct_answer();
		} else {
			wrong_answer()
		};
	});

	
	$(document).keydown(function(){
		if (event.which == 13) {
			document.location.reload();
		};
	});

	$(".menu").click(function(){
		time = setInterval(time_count, 10);
		$(document).bind("keydown", check_key);
		$(".menu").css("display", "none");
	});

	$(".game_over").click(function(){
		document.location.reload();
	});

	$(".restart").click(function(){
		document.location.reload();
	});
});

function check_key(){
	if (event.which == 37) {
			if (left_option[0] >= right_option[0]) {
				correct_answer();
			} else {
				wrong_answer()
			};
		};
	if (event.which == 39) {
		if (right_option[0] >= left_option[0]) {
			correct_answer();
		} else {
			wrong_answer();
		};
	};
}

function time_count() {
	countdown = countdown - 0.01;
	$(".countdown").text(countdown.toFixed(2));
	if (countdown < 0) {
		clearInterval(time);
		$(".countdown").text(0);
	};
};

function correct_answer() {
	score = score + 1;
	$(".score").text(score);
	refresh();
}

function wrong_answer() {
	life = life - 1;
	$(".life").text(life);
	if (life == 0) {
		$(".game_over").css("display", "block");
		$(document).unbind("keydown", check_key);
		clearInterval(time);
	} else {
		refresh();
	}
}

function refresh() {
	clear_data();
	if (score > difficulty) {
		difficulty = difficulty + 5;
	};
	switch(difficulty) {
		case 5:
			formula_1(20);
			store_left_number_data();
			formula_1(20);
			store_right_number_data();
			break;
		case 10:
			formula_1(100);
			store_left_number_data();
			formula_1(100);
			store_right_number_data();
			break;
		case 15:
			formula_1(500);
			store_left_number_data();
			formula_1(500);
			store_right_number_data();
			break;
		case 20:
			formula_2(20);
			store_left_number_data();
			formula_2(20);
			store_right_number_data();
			break;
		case 25:
			formula_2(60);
			store_left_number_data();
			formula_2(60);
			store_right_number_data();
			break;
		case 30:
			formula_2(100);
			store_left_number_data();
			formula_2(100);
			store_right_number_data();
			break;
		case 35:
			formula_2(500);
			store_left_number_data();
			formula_2(500);
			store_right_number_data();
			break;
		default:
			formula_3(100);
			store_left_number_data();
			formula_3(100);
			store_right_number_data();
			break;
	};

};

function clear_data() {
	left_option = [];
	right_option = [];
}

function store_left_number_data() {
	left_option.push(answer_result);
	left_option.push(answer_string);
	$(".left_number").text(left_option[1]);
};

function store_right_number_data() {
	right_option.push(answer_result);
	right_option.push(answer_string);
	$(".right_number").text(right_option[1]);
};

function formula_1(rand_number){
	answer_random = Math.round(Math.random() * rand_number + 1);
	answer_result = answer_random;
	answer_string = answer_random;
};

function formula_2(rand_number){
	answer_random = [Math.round(Math.random() * rand_number + 1), Math.round(Math.random() * rand_number + 1)];
	answer_result = answer_random[0] + answer_random[1];
	answer_string = answer_random[0] + " + " + answer_random[1];
};

function formula_3(rand_number){
	answer_random = [Math.round(Math.random() * rand_number + 1), Math.round(Math.random() * rand_number + 1), Math.round(Math.random() * rand_number + 1)];
	answer_result = answer_random[0] + answer_random[1] + answer_random[2];
	answer_string = answer_random[0] + " + " + answer_random[1] + " + " + answer_random[2];
};

function formula_4(rand_number){
	answer_random = [Math.round(Math.random() * rand_number + 1), Math.round(Math.random() * rand_number + 1), Math.round(Math.random() * rand_number + 1), Math.round(Math.random() * rand_number + 1)];
	answer_result = answer_random[0] + answer_random[1] + answer_random[2] - answer_random[3];
	answer_string = answer_random[0] + " + " + answer_random[1] + " + " + answer_random[2] + " - " + answer_random[3];
};