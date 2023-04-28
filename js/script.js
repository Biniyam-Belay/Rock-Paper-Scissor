const word = ["rock", "paper", "scissor"];

// A function that generates computerSelection randomly.
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3); // generate random number between 0 and 2
  if (randomNum === 0) {
    return 'Rock';
  } else if (randomNum === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// A function to accept player and computer Selection five times.

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose Rock, Paper, or Scissors:').toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playround(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith('You Win')) {
      playerScore++;
    } else if (result.startsWith('You Lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore} to ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose the game! Final score: ${playerScore} to ${computerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${playerScore} to ${computerScore}`);
  }
}



/* A function that takes the player and the computer selection. 
    check the scores for the player and the computer
*/
function playround(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "Paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "Scissors") {
      return "You Win! Rock beats Scissors";
    } else {
      return "It's a tie!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "Scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "Rock") {
      return "You Win! Paper beats Rock";
    } else {
      return "It's a tie!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "Rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Paper") {
      return "You Win! Scissors beats Paper";
    } else {
      return "It's a tie!";
    }
  } else {
    return "Invalid input! Please choose either Rock, Paper, or Scissors.";
  }
}
playround()
game()