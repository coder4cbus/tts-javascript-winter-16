/*
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
	totalBillWithTip = totalBillWithTip.toFixed(2);
	return totalBillWithTip;
}

// console.log("gratuity for tonight = " + gratuity(billAmount));
console.log("your total including gratuity is: $" + totalWithGrat(132));

// Like other objects, functions can be assigned to variables.
// It's often handy to declare a function on the fly without a name.
var calculator = {
    add: function(a,b) {
        return a + b;
    }
}

var adding = calculator.add(12,33) // 5
console.log("adding = " + adding);

// array of array, object, function
var arrayOfBartender = [
	['anonymous', 'array'],
	{ name: 'anonymous object' },
	// anonymous function
	function(){return 'anonymous function!'}
]

console.log(arrayOfBartender[0][1]) // array
console.log(arrayOfBartender[1].name) // anonymous object
console.log(arrayOfBartender[2]()) // anonymous function!
*/

// Exercise 2 (RPS Revisited)
// Exercise 2 (RPS Revisited)
// Exercise 2 (RPS Revisited)
var hands = ['rock', 'paper', 'scissors'];
var hand1;
var hand2;
var winner;
var isDraw = false;

var player1 = {
	name: 'Russell',
	hand: getHand();
	wins: 0;
}

var player2 = {
	name: 'Wilson',
	hand: getHand();
	wins: 0;
}

function getHand() {
	return hands[parseInt(Math.random()*10)%3];
}

function playRound(argPlayerObj1, argPlayerObj2) {
	hand1 = argPlayerObj1.getHand();
	hand2 = argPlayerObj2.getHand();

	if ( hand1 === "rock" && hand2 === "scissors" || hand1 === "paper" && hand2 === "rock" || hand1 === "scissors" && hand2 === "paper" ) {
		winner = player1.name;
	} else if ( hand1 === "rock" && hand2 === "paper" || hand1 === "paper" && hand2 === "scissors" || hand1 === "scissors" && hand2 === "rock" ) {
		winner = player2.name;
	} else {
		isDraw = true;
	}
	
	if (!isDraw) {
		console.log("winner = " + winner + " Round: " + player1.name + "'s hand = " + hand1 + " " + player2.name + "'s hand = " + hand2);		
	} else {
		console.log("it's a tie");
	}

}

function playGame(playerOne, playerTwo, playUntil) {
	// figure it out
	for (var i = 0; i < playUntil; i++) {
		// play round
		playRound(playerOne, playerTwo);
	}

}

playGame(player1, player2, 5);
// console.log(playRound(player1, player2));






















