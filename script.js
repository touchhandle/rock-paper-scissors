function getComputerChoice() {
    //return rock, paper, or scissors randomly
    let randomNumber = Math.floor(Math.random() * 3); //generate random number 0, 1, or 2
    switch (randomNumber) {
        case 0:
            computerChoice = 'ROCK';
            break;
        case 1:
            computerChoice = 'PAPER';
            break;
        case 2:
            computerChoice = 'SCISSORS';
            break;
        }
    return computerChoice;
}

function getUserChoice() {
    let keepgoing = true;
    while (keepgoing) {
        userChoice = prompt("Choose rock, paper, or scissors.");
        userChoice = userChoice.toUpperCase();
        if (userChoice == 'ROCK' || userChoice == 'PAPER' || userChoice == 'SCISSORS') {
            keepgoing = false;
        } else {
            console.log('typo? try again')
            keepgoing = true;
        }
    }
    return userChoice;
}

function getWinner (userChoice, computerChoice) {
    if (userChoice == computerChoice) return 'tie';
    if ((userChoice == 'ROCK') && (computerChoice == 'SCISSORS')) return 'user';
    if ((userChoice == 'PAPER') && (computerChoice == 'ROCK')) return 'user';
    if ((userChoice == 'SCISSORS') && (computerChoice == 'PAPER')) return 'user';
    else return 'computer';
}
let computerChoice;
let userChoice;
let winner;
let playing = true;

while (playing) {
    let userTally = 0;
    let compTally = 0;
    for (let i = 0; i < 3; i++) {
        console.log(`Round ${i + 1}`);
        winner = getWinner(getUserChoice(), getComputerChoice());
        console.log(`User picked ${userChoice}`);
        console.log(`Computer picked ${computerChoice}`);
        if (winner == 'user') {
            userTally++;
            console.log(`User won! ${userChoice} beats ${computerChoice}!`)
        } else if (winner == 'computer') {
            compTally++;
            console.log(`User lost... ${computerChoice} beats ${userChoice}!`)
        } else if (winner == 'tie') {
            console.log(`A tie. Both User and Computer picked ${userChoice}`)
        }
    }
    if (userTally > compTally) console.log(`User won with ${userTally} wins.`)
    else if (compTally > userTally) console.log(`Computer won with ${compTally} wins.`)
    else console.log(`User and Computer tied! Both had ${userTally} wins.`)


    if (prompt('Play again?') == 'yes') {
        playing = true;
    } else {
        playing = false;
    }
}