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

function check_if_equal() {
	if (left_option[0] == right_option[0]) {
		refresh();
	};
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
			formula_1(40);
			store_left_number_data();
			formula_2(30);
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
	check_if_equal();
};