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
var time = setInterval(time_count, 10);
var second_random = [0, 0];
var second_result = 0;
var second_string = "";


$(document).ready(function(){
	var left_option = [];
	var right_option = [];
	second_formula(5);
	left_option.push(second_result);
	left_option.push(second_string);
	$(".left_number").text(left_option[1]);
	second_formula(3);
	right_option.push(second_result);
	right_option.push(second_string);
	$(".right_number").text(right_option[1]);
});

$(document).click(function(){

});

function time_count() {
	countdown = countdown - 0.01;
	$(".countdown").text(countdown.toFixed(2));
	if (countdown < 0) {
		clearInterval(time);
		$(".countdown").text(0);
	};
};

function second_formula(rand_number){
	second_random = [Math.round(Math.random() * rand_number + 1), Math.round(Math.random() * rand_number + 1)];
	second_result = second_random[0] + second_random[1];
	second_string = second_random[0] + " + " + second_random[1];
};


