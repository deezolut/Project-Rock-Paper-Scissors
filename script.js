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


// const buttons = document.querySelectorAll('button');
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', (playRound(e, computerChoice)))
// };

let humanScore = 0;
let computerScore = 0;



const buttons = document.querySelectorAll('button');
const para = document.querySelector('p');


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
    }

}