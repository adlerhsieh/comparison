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
var life = 5;
var difficulty = 4;
var chain = 0;
var setTime = 0;
var setChain = 0;
var x = 10;

//setting scene
$(document).ready(function(){
	//lock smartphone scale
	$('body').bind('touchmove', function(e){e.preventDefault()});
	$('body').css("overflow", "hidden");
	$(".display_chain").css("display", "none");
	refresh();
	$(window).bind("keydown", start_by_enter);
	$(".countdown").text(countdown.toFixed(2));
	$(".life").text(life);
	// setting up animations
	$(".bottom_block").css("margin-top", "50%");
	$(".left_block").css("margin-left", "-50%");
	$(".right_block").css("margin-left", "50%");
	$(".game_over").css("margin-top", "-80%");
	$(".display_check").css("display", "none");
})

//Setting up click events
$(document).ready(function(){
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
		start_the_game();
	});

	$(".game_over").click(function(){
		show_score_board();
	});

	$(".restart").click(function(){
		document.location.reload();
	});

});

function check_answer(event){
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
	chain = chain + 1;
	$(".score").text(score);
	trigger_chain();
	display_correct();
	refresh();
}

function wrong_answer() {
	life = life - 1;
	chain = 0;
	trigger_chain();
	$(".life").text(life);
	display_wrong();
	if (life == 0) {
		game_over();
		$(".life").css("color", "red");
	} else {
		refresh();
	}
}

function trigger_chain () {
	clearInterval(setTime);
	clearInterval(setChain);
	$(".display_chain").stop();
	$(".display_chain").css("opacity", 1);
	x = chain % 5
	switch(true) {
		case (chain == 0):
			$(".display_chain").css("display", "none");
			break;
		case (chain == 10):
			countdown = countdown + 4;
			$(".chain_input").text("+3s");
			$(".display_chain").css("color", "#2EFE64");
			break;
		case (chain == 15):
			countdown = countdown + 6;
			$(".chain_input").text("+5s");
			$(".display_chain").css("color", "#2EFE64");
			break;
		case (chain == 20):
			countdown = countdown + 8;
			$(".chain_input").text("+10s");
			$(".display_chain").css("color", "#2EFE64");
			break;
		case(chain > 20 && x == 0):
			countdown = countdown + 10;
			$(".chain_input").text("+10s");
			$(".display_chain").css("color", "#2EFE64");
			break;
		case (chain > 3):
			$(".display_chain").css("color", "yellow");
			$(".display_chain").css("display", "table");
			$(".chain_input").text(chain);
			break;
	}
	setTime = setInterval(function(){
		$(".display_chain").fadeOut();
	}, 2000);
	setChain = setInterval(function(){
		chain = 0;
	}, 2500);	
}

function display_correct() {
	$(".display_check").attr("src", "/assets/correct_circle.png");
	$(".display_check").css("display", "block");
	$(".display_check").animate({opacity: 0}, 300);
	setTimeout(function(){
		$(".display_check").css("display", "none");
		$(".display_check").css("opacity", 1);
	}, 350);
}

function display_wrong() {
	$(".display_check").attr("src", "/assets/wrong.png");
	$(".display_check").css("display", "block");
	$(".display_check").animate({opacity: 0}, 300);
	setTimeout(function(){
		$(".display_check").css("display", "none");
		$(".display_check").css("opacity", 1);
	}, 350);
}

function start_by_enter(event) {
	if (event.which == 13) {
		start_the_game();	
	};
}

function start_the_game() {
	time = setInterval(time_count, 10);
	$(window).bind("keydown", check_answer);
	$(window).unbind("keydown", start_by_enter);
	flash_animation();
}

function continue_by_enter(event) {
	if (event.which == 13) {
		show_score_board();
	};
}

function show_score_board() {
	if ( $(window).width() < 700) {
		$(".bottom_block").fadeOut();
		$(".score_board").css("height", "100%");
	};
	$(".score_board").css("display", "block");
	$(".score_board").animate({opacity: 1});
	$(window).unbind("keydown", continue_by_enter);
	setTimeout(function() {
		$("#input_name").focus();
		$(window).bind("keydown", restart);	
	}, 100);
	if (score < no5) {
		$("#input_form").replaceWith("<div style='width:100px;display:block;margin:auto;left:0;right:0;' class='tiny button' onclick='document.location.reload()'>再玩一次</div>");
	}
}

function restart(event) {
	if (event.which == 13) {
		document.location.reload();
	};
}

function game_over() {
	$(".game_over").css("display", "block");
	$(".game_over").animate({marginTop: 0}, 300);
	$(window).unbind("keydown", check_answer);
	$(window).unbind("keydown", start_by_enter);
	$(window).bind("keydown", continue_by_enter);		
	clearInterval(time);
	$(".score_input").val(score);
	$(".score_display").text(score + "分");
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

function flash_animation () {
	$(".menu").animate({opacity: 0}, 500);
	setTimeout(function(){
		$(".menu").css("display", "none");
	}, 500);
	$(".bottom_block").animate({marginTop: 0}, 500);
	$(".left_block").animate({marginLeft: 0}, 500);
	$(".right_block").animate({marginLeft: 0}, 500);
}