function getComputerChoice() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

console.log(getComputerChoice())