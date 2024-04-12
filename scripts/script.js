function getComputerChoice() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound() {
    let playerSelection = prompt('Select one: Rock, Paper or Scissors.').toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
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

// console.log(playRound(playerSelection, computerSelection));

let ties = 0;
let playerWins = 0;
let computerWins = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        let roundResult = playRound();
        console.log(roundResult);
        determineWinner(roundResult);
    }
    if (playerWins === computerWins) {
        console.log(`It's a tie, both you and the computer won ${playerWins} round(s).`);
    } else if (playerWins > computerWins) {
        console.log(`You win! You won ${playerWins} round(s) and the computer won ${computerWins} round(s).`)
    } else {
        console.log(`You lose! The computer won ${computerWins} round(s) and you won ${playerWins} round(s).`)
    }
}

function determineWinner(resultString) {
    if (resultString.includes('ties')) {
        ties++;
    } else if (resultString.includes('win')) {
        playerWins++;
    } else if (resultString.includes('lose')) {
        computerWins++;
    }
}

playGame()