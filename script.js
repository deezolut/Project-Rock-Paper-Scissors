// Create function that randomly returns: “rock”, “paper” or “scissors”.
function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice <= 0.33) {
        return rock;
    }
    else if (randomChoice > 0.33 && randomChoice <= 0.66) {
        return paper;
    }
    else if (randomChoice > 0.66 && randomChoice <= 1) {
        return scissors;
    }
}

// Return one of the valid choices depending on what the user inputs.
let humanInput = prompt("Type one of the following: 'rock', 'paper' or 'scissors'.");
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function getHumanChoice(humanInput) {
    if (humanInput === "rock") {
        return rock;
    }
    else if (humanInput === "paper") {
        return paper;
    }
    else if (humanInput === "scissors") {
        return scissors;
    }
    else {
        alert("Not a valid option. Please type one of the following: “rock”, “paper” or “scissors”.");
        return "Try again"
    }    
}