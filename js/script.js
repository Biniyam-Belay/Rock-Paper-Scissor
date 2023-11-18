// Function to get the computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

let playerScore = 0
let computerScore = 0

// Function to play a single round
function playRound(playerSelection, computerSelection) {
  // Make playerSelection case-insensitive
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection, computerSelection)

  // Determine the winner
  if (playerSelection === computerSelection.toLowerCase()) {
      console.log( 'It\'s a tie!');
  } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
      console.log( `You Win! ${playerSelection} beats ${computerSelection}.`);

      playerScore += 1
      const scorep = document.querySelector('#scorep')
      scorep.textContent = `Player Score : ${playerScore}`
  } else {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);

      computerScore += 1
      const scorec = document.querySelector('#scorec')
      scorec.textContent = `Computer Score : ${computerScore}`
  }


//Winner check
// FIXME: The code needs to stop after the plaer or the computer wins the game. It's not doing that now.

  if (playerScore === 5){
    const winnerp = document.querySelector('#winner');
    winnerp.textContent = `The Winner is : you`
  }
  if (computerScore === 5){
    const winnerp = document.querySelector('#winner');
    winnerp.textContent = `The Winner is : The Computer`
  }

}

//buttons of respective rock paper or scissor
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  playRound("rock", computerSelection.toLowerCase());
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  playRound("paper", computerSelection.toLowerCase());
})

const scissor = document.querySelector('#scissors');
scissor.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  playRound("scissors", computerSelection.toLowerCase());
})