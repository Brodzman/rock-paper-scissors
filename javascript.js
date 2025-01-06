

function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice >= 0 && computerChoice < 0.33) {
        return 'rock';
    } else if (computerChoice >= 0.33
        && computerChoice < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
    
}

function getHumanChoice(humanChoice) {
    if (humanChoice == 'rock'
        || humanChoice == 'paper'
        || humanChoice == 'scissors') {
            return humanChoice;
        } else {
            return null;
        }
}



function playerTurn() {
    let userInput = prompt();
    let output = getHumanChoice(userInput);
    if (output === null) {
        playerTurn();
    } else
    console.log(output);
}


playerTurn();


