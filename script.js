// Get computer to randomly return: “rock”, “paper” or “scissors”
function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice <= 0.33) {
        return "rock";
    }
    else if (randomChoice > 0.33 && randomChoice <= 0.66) {
        return "paper";
    }
    else if (randomChoice > 0.66 && randomChoice <= 1) {
        return "scissors";
    }
}

// Return one of the valid choices depending on what the human inputs
const rawHumanInput = prompt("Type one of the following: 'rock', 'paper' or 'scissors'.");
let humanInput;
if (rawHumanInput != undefined) {
    humanInput = rawHumanInput.toLowerCase();
}

function getHumanChoice(humanInput) {
    if (humanInput === "rock") {
        return "rock";
    }
    else if (humanInput === "paper") {
        return "paper";
    }
    else if (humanInput === "scissors") {
        return "scissors";
    }
    else if (humanInput != undefined) {
        alert("Not a valid option. Please type one of the following: “rock”, “paper” or “scissors”.");
        return "Try again"
    }    
}

// Keep track of the players score inside variables
let humanScore = 0;
let computerScore = 0;

// Declare winner after a single round between human and computer
function playRound(humanChoice, computerChoice) {
    // Make 'humanChoice' parameter case-insensitive
    if (humanChoice != undefined) {
        humanChoice = humanChoice.toLowerCase();
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        alert("You lose! Paper beats Rock");
        // Increment the humanScore or computerScore variable based on the round winner
        computerScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats Scissors");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats Rock");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("You lose! Scissors beats Paper");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("You lose! Rock beats Scissors");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats Paper");
        humanScore += 1;
    }
    else if (humanChoice === computerChoice) {
        alert("It's a tie!");
    }
}



const humanSelection = getHumanChoice(humanInput)
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
