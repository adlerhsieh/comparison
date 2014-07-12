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
	answer_result = answer_random[0] - answer_random[1];
	answer_string = answer_random[0] + " - " + answer_random[1];
};

function formula_4(rand_number){
	answer_random = [Math.round(Math.random() * rand_number + 1), Math.round(Math.random() * rand_number + 1)];
	answer_result = answer_random[0] * answer_random[1];
	answer_string = answer_random[0] + " * " + answer_random[1];
};

function check_if_equal() {
	if (left_option[0] == right_option[0]) {
		refresh();
	};
}

function refresh() {
	clear_data();
	if (score > difficulty) {
		difficulty = difficulty + 4;
	};
	switch(difficulty) {
		case 4:
			formula_1(20);
			store_left_number_data();
			formula_1(20);
			store_right_number_data();
			break;
		case 8:
			formula_1(100);
			store_left_number_data();
			formula_1(100);
			store_right_number_data();
			break;
		case 12:
			formula_1(40);
			store_left_number_data();
			formula_2(30);
			store_right_number_data();
			break;
		case 16:
			formula_2(40);
			store_left_number_data();
			formula_2(40);
			store_right_number_data();
			break;
		case 20:
			formula_2(120);
			store_left_number_data();
			formula_2(120);
			store_right_number_data();
			break;
		case 24:
			formula_2(200);
			store_left_number_data();
			formula_2(200);
			store_right_number_data();
			break;
		case 28:
			formula_3(20);
			store_left_number_data();
			formula_3(20);
			store_right_number_data();
			break;
		case 32:
			formula_3(60);
			store_left_number_data();
			formula_3(60);
			store_right_number_data();
			break;
		case 36:
			formula_4(100);
			store_left_number_data();
			formula_4(100);
			store_right_number_data();
			break;
		case 40:
			formula_4(200);
			store_left_number_data();
			formula_4(200);
			store_right_number_data();
			break;
		case 44:
			formula_2(100);
			store_left_number_data();
			formula_3(200);
			store_right_number_data();
			break;
		case 48:
			formula_3(200);
			store_left_number_data();
			formula_4(50);
			store_right_number_data();
			break;
		case 52:
			formula_4(100);
			store_left_number_data();
			formula_2(1000);
			store_right_number_data();
			break;
		case 56:
			formula_1(10000000000);
			store_left_number_data();
			formula_1(10000000000);
			store_right_number_data();
			break;
		default:
			formula_1(10000000000000);
			store_left_number_data();
			formula_1(10000000000000);
			store_right_number_data();
			break;
	};
	check_if_equal();
};