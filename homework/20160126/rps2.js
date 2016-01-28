var hands = ['rock', 'paper', 'scissors'];
var winner;

var player1 = {
	name: 'Russell',
	wins: 0,
	getHand: function() {
		return hands[parseInt(Math.random()*10)%3];
	}
}

var player2 = {
	name: 'Tyler',
	wins: 0,
	getHand: function() {
		return hands[parseInt(Math.random()*10)%3];
	}
}



function playRound(argPlayerObj1, argPlayerObj2) {
	var hand1 = argPlayerObj1.getHand();
	var hand2 = argPlayerObj2.getHand();
	// console.log("playround = " + hand1 + " --" + hand2);
	
	if ( hand1 === hand2 ) {
		console.log("It's a tie. Round: " + player1.name + "'s hand= " + hand1 + " & " + player2.name + "'s hand = " + hand2);
	} else {

		if ( (hand1 === "rock" && hand2 === "scissors") || (hand1 === "paper" && hand2 === "rock") || (hand1 === "scissors" && hand2 === "paper") ) {
			winner = player1.name;
			player1.wins++;
		} else {
			winner = player2.name;
			player2.wins++;
		}

		console.log("Winner = " + winner + ", Round: " + player1.name + "'s hand= " + hand1 + " & " + player2.name + "'s hand = " + hand2);
		return winner;
	}
	

}



function playGame(playerOne, playerTwo, playUntil) {
	// figure it out
	while (playerOne.wins < playUntil && playerTwo.wins < playUntil) {
		playRound(playerOne, playerTwo);
		// console.log("while");
	}

	if (playerOne.wins === playUntil) {
		console.log("Game Over! " + playerOne.name + " wins the game with " + playerOne.wins + " wins!");
	} else {
		console.log("Game Over! " + playerTwo.name + " wins the game with " + playerTwo.wins + " wins!");
	}		

}



function playTournament(playerOne, playerTwo, playerThree, playerFour, playUntil) {
	console.log("playTournament");
}


playGame(player1, player2, 5);




