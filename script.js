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




let humanScore = 0;
let computerScore = 0;



const buttons = document.querySelectorAll('button');
const para = document.querySelector('#results');
const scoreOfHuman = document.querySelector('#score-of-human');
const scoreOfComputer = document.querySelector('#score-of-computer');
const results = document.querySelector('#results');

buttons.forEach((button) => {
    button.addEventListener('click', playGame)
})


function playGame(e) {
    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();
    playRound();
    function playRound() {
        if (humanChoice == "rock" && computerChoice == "paper") {
            para.textContent = "You lose! Paper beats Rock";
            computerScore += 1;
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            para.textContent = "You win! Rock beats Scissors"
            humanScore += 1;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            para.textContent = "You win! Paper beats Rock";
            humanScore += 1;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            para.textContent = "You lose! Scissors beats Paper";
            computerScore += 1;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            para.textContent = "You lose! Rock beats Scissors";
            computerScore += 1;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            para.textContent = "You win! Scissors beats Paper";
            humanScore += 1;
        }
        else if (humanChoice == computerChoice) {
            para.textContent = "It's a tie!";
        }


        scoreOfHuman.textContent = `Your score: ${humanScore}`
        scoreOfComputer.textContent= `Computer's score: ${computerScore}`


        if (humanScore == 5) {
            results.textContent = "You are the winner!"
            buttons.forEach((button => {
                button.removeEventListener('click', playGame);
            }))
        };

        if (computerScore == 5) {
            results.textContent = "You lost..."
            buttons.forEach((button => {
                button.removeEventListener('click', playGame);
            }))
        };
    }

}

