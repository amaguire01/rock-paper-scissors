/*getComputerChoice function decides computer's choice using math.random*/
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

/*getHumanChoice prompts user for their choice */
function getHumanChoice() {
    return window.prompt("Choose Rock, Paper, or Scissors.");
}


function playGame() {
    
    /*Declare player score variables */
    let humanScore = 0;
    let computerScore = 0;
    
    /*For loop to run playRound 5 times with correct parameters*/
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;

        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose.")
    }
}
playGame();