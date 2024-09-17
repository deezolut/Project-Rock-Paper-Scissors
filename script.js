// Create function that randomly returns: “rock”, “paper” or “scissors”.
function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice <= 0.33) {
        return "rock"
    }
    else if (randomChoice > 0.33 && randomChoice <= 0.66) {
        return "paper"
    }
    else if (randomChoice > 0.66 && randomChoice <= 1) {
        return "scissors"
    }
}
