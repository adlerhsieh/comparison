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

var countdown = 2;
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
	$(document).bind("keydown", start_by_enter);
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

	$(".menu").click(function(){
		time = setInterval(time_count, 10);
		$(document).unbind("keydown", start_by_enter);
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
	if (countdown < 10) {
		$(".countdown").css("color", "red");
	}
	if (countdown < 0) {
		clearInterval(time);
		$(".countdown").text(0);
		game_over();
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
		game_over();
	} else {
		refresh();
	}
}

function start_by_enter() {
	if (event.which == 13) {
		time = setInterval(time_count, 10);
		$(document).bind("keydown", check_key);
		$(".menu").css("display", "none");
	};
}

function continue_by_enter() {
	if (event.which == 13) {
		show_score_board();
	};
}

function show_score_board() {
	$(".score_board").css("display", "block");
	$(".score_board").animate({opacity: 1});
}

function game_over() {
	$(".game_over").css("display", "block");
	$(document).unbind("keydown", check_key);
	$(document).bind("keydown", continue_by_enter);		
	clearInterval(time);
	$(".score_input").val(score);
}

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