function getComputerChoice() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

const playerSelection = prompt('Select one: Rock, Paper or Scissors.').toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties with ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
                (playerSelection === 'paper' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    } else {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }
}

console.log(playRound(playerSelection, computerSelection));