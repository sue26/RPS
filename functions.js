function play(input) {
	var user = input.id;
	document.getElementById("user_output").innerHTML = user;

	//Get computer output
	var comp = getCompItem();
	document.getElementById("comp_output").innerHTML = comp;

	//Compute win/lose
	var result = document.getElementById("game_result");
	var winner = isWinner(user, comp);
	switch (winner) {
		case -1:
			result.innerHTML = "You Lost!"
			break;
		case 0:
			result.innerHTML = "It's a tie!"
			break;
		case 1:
			result.innerHTML = "You Won!"
			break;
		default:
			alert("something's wrong");
	}

}

/* Generate computer output randomly */
function getCompItem() {
	var rand = Math.random();
	console.log(rand);

	if (rand < 1/3)
		return "rock";
	else if (rand < 2/3)
		return "paper";
	else
		return "scissor";
}

/* Determines whether user won the game or not 
 * output: -1 : user lost
 *		    0 : tie
 *			1 : user won
 */

function isWinner(user, comp) {
	if (user == comp) //a tie
		return 0;
	else if (user == "rock") 
		return (comp == "paper") ? -1 : 1;
	else if (user == "scissor")
		return (comp == "rock") ? -1: 1;
	else //user == "paper"
		return (comp == "scissor") ? -1: 1;
}