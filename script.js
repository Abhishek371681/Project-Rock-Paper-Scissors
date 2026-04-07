const buttons = document.querySelectorAll('button');
let playerChoice = null;
const givenChoices = ["Rock", "Paper", "Scissors"];
let computerChoice = null;
let computerDisplay = document.getElementById('computerDisplay');
let playerDisplay = document.getElementById('playerDisplay');
let winnerDisplay = document.getElementById('winnerDisplay');
let Winner = document.getElementById('Winner');


    function getComputerChoice() {
  let RandomIndex = Math.floor(Math.random()* 3);
  let choice = givenChoices[RandomIndex];
  console.log(choice);
  return choice;
  

}


function getWinner() {
if(playerChoice === 'Rock' && computerChoice === 'Scissors' || playerChoice === "Scissors" && computerChoice === "Paper" || playerChoice === 'Paper' && computerChoice === 'Rock' ) {
  Winner.innerText = 'Player Won!';
}
else if(playerChoice === 'Scissors' && computerChoice === 'Rock' || playerChoice === "paper" && ComputerChoice === "Scissors" || playerChoice === 'Rock' && computerChoice === 'Paper') {
  Winner.innerText = 'Computer Won!';
}
else {
  Winner.innerText = 'Its Tie!';
}

}




buttons.forEach((button) => {
  button.addEventListener('click', () => 
    {
    playerChoice = button.textContent;
    console.log('Player Chose: ', playerChoice);

    computerChoice = getComputerChoice();


    getWinner(playerChoice, computerChoice);



  });



});




  




