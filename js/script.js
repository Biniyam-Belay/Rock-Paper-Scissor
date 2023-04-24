let paper;
let rock;
let computer = 0;
let player = 0;
function getcomputerChoice (){
  const elements = ["Rock", "Paper", "Scissor"];
  const random = Math.floor(Math.random() * elements.length);

  return elements[random];
}

function playround(playerSelection, computerselection){
   if(playerSelection === game){
       computer += 1;
   }else if(computerselection === game){
       player += 1;
   }
   
   if(computer >= 3){
       console.log("Compuetr won the game.")
   }else if(player >= 3){
       console.log("you won the game")
   }
}

function game(){
   for (i=1; i <= 5; i++ ){
       console.log(playround());
   }
   
}

const playerSelection = prompt("select rock, paper, or scissor");
const computerselection = getcomputerChoice();
game()
console.log(playround(playerSelection, computerselection));