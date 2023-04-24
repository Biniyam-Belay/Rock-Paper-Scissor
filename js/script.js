let computer = 0;
let player = 0;

const word = ["rock", "paper", "scissor"];

// A function that generates computerSelection randomly.
function getcomputerChoice() {
  const randomIndex = Math.floor(Math.random() * word.length);
  computerSelection = word[randomIndex];
  return computerSelection;
}

// A function to accept player and computer Selection five times.
function game() {
  for (i = 1; i <= 5; i++) {
    // Gets the copmputerChoice.
    computerSelection = getcomputerChoice();
    computerSelection = computerSelection.toLowerCase();

    // generates random from the array.
    function random() {
      const randomIndex = Math.floor(Math.random() * word.length);
      ranWord = word[randomIndex];
      return ranWord;
    }

    // takes the player selection.
    playerSelection = prompt("Select rock, paper or scissor.");
    playerSelection = playerSelection.toLowerCase();
  }
}

/* A function that takes the player and the computer selection. 
    check the scores for the player and the computer
*/
function playround(playerSelection, computerSelection) {
  // Calls for the game function
  game();

    // checks the score.
  if (playerSelection === ranWord) {
    player += 1;
    console.log(`Player : ${player}`);
  } else if (computerSelection === ranWord) {
    computer += 1;
    console.log(`Computer : ${computer}`);
  } else if (playerSelection === computerSelection)
  console.log(`Tie game!`);

//   determines the winner.
  if (computer > player) {
    console.log("You've lost the game.");
  } else 
    console.log("You've won the game");
}
playround();