// Function to get the computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
  // Make playerSelection case-insensitive
  playerSelection = playerSelection.toLowerCase();

  // Determine the winner
  if (playerSelection === computerSelection.toLowerCase()) {
      return 'It\'s a tie!';
  } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
      return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Function to play the game
function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
      const playerChoice = prompt('Enter Rock, Paper, or Scissors:');
      const computerChoice = getComputerChoice();

      const result = playRound(playerChoice, computerChoice);
      console.log(result);

      if (result.includes('Win')) {
          playerScore++;
      } else if (result.includes('Lose')) {
          computerScore++;
      }
  }

  // Display the final result
  const finalResult =
      playerScore > computerScore
          ? 'Congratulations! You win the game.'
          : playerScore < computerScore
          ? 'Sorry, you lose the game.'
          : 'It\'s a tie!';

  document.getElementById('result').innerText = finalResult;
}