const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
// console.log(calculatorScreen);

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
	if (currentNumber === "0") {
		currentNumber = number;
	} else {
		currentNumber += number;
	}
};

const inputOperator = (operator) => {
	prevNumber = currentNumber;
	calculationOperator = operator;
	currentNumber = "";
};

const updateScreen = (number) => {
	calculatorScreen.value = number;
	console.log(number);
};

const calculate = () => {
	let result = "";
	switch (calculationOperator) {
		case "+":
			result = parseInt(prevNumber) + parseInt(currentNumber);
			break;
		case "-":
			result = parseInt(prevNumber) - parseInt(currentNumber);
			break;
		case "*":
			result = parseInt(prevNumber) * parseInt(currentNumber);
			break;
		case "/":
			result = parseInt(prevNumber) / parseInt(currentNumber);
			break;

		default:
			return;
	}
	currentNumber = result;
	calculationOperator = "";
};

const clearAll = () => {
	prevNumber = "";
	calculationOperator = "";
	currentNumber = "0";
};

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	});
});

operators.forEach((operators) => {
	operators.addEventListener("click", (event) => {
		inputOperator(event.target.value);
	});
});

equalSign.addEventListener("click", () => {
	calculate();
	updateScreen(currentNumber);
});

clearBtn.addEventListener("click", () => {
	clearAll();
	updateScreen(currentNumber);
});
