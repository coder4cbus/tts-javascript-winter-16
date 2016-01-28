var playerOneName = "Matthew";
var playerTwoName = "Edwin";

var playerOneWins = 0;
var playerTwoWins = 0;

var gameIsWon = false;
var roundCount = 0;

while(!gameIsWon) {
	roundCount++;
	//console.log("roundCount= " + roundCount);

	var playerOneHand = parseInt(Math.random()*10)%3;
	var playerTwoHand = parseInt(Math.random()*10)%3;
	console.log("Round " + roundCount + " " + playerOneName + " formed " + playersHand(playerOneHand));
	console.log("Round " + roundCount + " " + playerTwoName + " formed " + playersHand(playerTwoHand));
	
	if ((playerOneHand === 0 && playerTwoHand === 0) || (playerOneHand === 1 && playerTwoHand === 1) || (playerOneHand === 2 && playerTwoHand === 2)) {
		console.log("Round " + roundCount + " is a draw");
	}

	else if ((playerOneHand === 0 && playerTwoHand === 1) || (playerOneHand === 1 && playerTwoHand === 2) || (playerOneHand === 2 && playerTwoHand === 0)) {
		console.log("Round " + roundCount + " winner is= " + playerTwoName);
		playerTwoWins++;
	}
	
	else {
		console.log("Round " + roundCount + " winner is= " + playerOneName);
		playerOneWins++;
	}

	if (playerOneWins === 3 || playerTwoWins === 3) {
		gameIsWon = true;

		if (playerOneWins === 3) {
			console.log("Game Over! " + playerOneName + " wins the game!");
		} else {
			console.log("Game Over! " + playerTwoName + " wins the game!");
		}	
	}

}

// convert playerHand from integer to word
function playersHand(paramHand) {
	switch(paramHand){
		case 0:
		return paramHand = "Rock";
		break;

		case 1:
		return paramHand = "Paper";
		break;

		case 2:
		return paramHand = "Scissors";
		break;
	}	
}