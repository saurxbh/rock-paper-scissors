let ties = 0;
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('input');
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
})

function getComputerChoice() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection) {
    // let playerSelection = prompt('Select one: Rock, Paper or Scissors.').toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    let computerSelection = getComputerChoice().toLowerCase();
    const computer_selection = document.querySelector('#computer_selection');
    computer_selection.textContent = `Computer Selection: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;

    const result = document.querySelector('#result');
    const score = document.querySelector('#score');
    if (playerSelection === computerSelection) {
        result.textContent = `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties with ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
        ties += 1;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
                (playerSelection === 'paper' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'rock')) {
        result.textContent = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
        computerWins += 1;
    } else {
        result.textContent = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
        playerWins += 1;
    }
    score.textContent = `Player Wins: ${playerWins}, Computer Wins: ${computerWins}, Ties: ${ties}`;
    return
}