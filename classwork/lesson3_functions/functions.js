// Functions are procedures that take arguments and return values.
// Think about them like a sheet of paper with instructions on it.
// define a function
function doSomething(paramSomething) {
	console.log(paramSomething);
}

// Execute a function by calling it's name with () and passing in arguments.
doSomething("Helloooo!");

// Functions can 'return' a value. A function evaluates to its return value when run.
// All functions take any number of arguments, regardless of their declared signature.
function doAddition(number1, number2) {
	// explicitly 'return'
	return number1 + number2;
}

var sum = doAddition(12, 14);
console.log(sum);

function moreAddition () {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

var add = moreAddition(1,2,3,4,5,6,7);
console.log(add);

// Exercise 1 (function basics)
// Exercise 1 (function basics)
// Exercise 1 (function basics)
var billAmount = 100;
var tipAmount;
var tip;
var totalBillWithTip;

function gratuity(argBillAmount) {
	// do something
	tipAmount = argBillAmount * 0.2;
	return tipAmount;
}

function totalWithGrat(argAmount) {
	tip = gratuity(argAmount);
	totalBillWithTip = tip + argAmount;
	return totalBillWithTip;
}

// console.log("gratuity for tonight = " + gratuity(billAmount));
console.log("your total including gratuity is: " + totalWithGrat(130));

