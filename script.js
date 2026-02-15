// Computer Choice 
function getComputerChoice() {
  
  const choices = ['rock','paper', 'scissors'];
  
  const randomIndex = Math.floor(Math.random()*3);
  
  const computerChoice = choices[randomIndex];
  
  return computerChoice;
  
}


//Player Choice

function getPlayerChoice() {
  let choice = prompt("Enter Your Choice: ");
  return choice;
}


//Game Round 


function playRound(computerChoice, playerChoice) {
  if(computerChoice === playerChoice) {
    return "It's Tie!";
  }
  else if(computerChoice === "paper" && playerChoice === "rock" || computerChoice === "rock" && playerChoice === "scissors" || computerChoice === "scissors" && playerChoice === "paper" ){
    return "Computer Wins!";
  }
  
  else {
    return "You Win!";
  }
}

const computerChoice = getComputerChoice();

const playerChoice = getPlayerChoice();

alert("Computer Selected: " + computerChoice);

const result = playRound(computerChoice, playerChoice);
alert(result);
