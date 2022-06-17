//global values to track score
let playerScore = 0;
let computerScore = 0;

//get the computer's move
function computerPlay() {
    let randomInt = Math.floor(Math.random() * 3); //generate a random integer between 0 and 2

    if (randomInt === 0) { //assign a string based on the integer generated
        let result = 'rock';
        return result;
    } else if (randomInt === 1) {
        let result = 'scissors';
        return result;
    } else {
        let result = 'paper';

        return result;
    }
}

//play one round of rock paper scissors
function playRound(playerSelection, computerSelection) {


    //Set player's move to lowercase 
    let lowerPlayerSelection = playerSelection.toLowerCase();

    //check for incorrect input, return no points if so
    if (lowerPlayerSelection != 'paper' && lowerPlayerSelection != 'rock' && lowerPlayerSelection != 'scissors') {
        return 'That\'s not a valid move! No points, try again!';
    }

    //check for a tie
    if (lowerPlayerSelection === computerSelection) {
        return 'It\'s a tie!';
    }

    //compare the player and computer moves to see who wins.
    if (lowerPlayerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            ++playerScore;
            return 'You win! Rock beats scissors!';
        } else if (computerSelection === 'paper') {
            ++computerScore;
            return 'You lose! Paper beats rock!';
        }
    }

    if (lowerPlayerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            ++playerScore;
            return 'You win! Scissors beats paper!';
        } else if (computerSelection === 'rock') {
            ++computerScore;
            return 'You lose! Rock beats scissors!';
        }
    }

    if (lowerPlayerSelection === 'paper') {
        if (computerSelection === 'rock') {
            ++playerScore;
            return 'You win! Paper beats rock!';
        } else if (computerSelection === 'scissors') {
            ++computerScore;
            return 'You lose! Scissors beats paper!';
        }
    }
}
function game() {
    //play five rounds of rock, paper, scissors
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Let\'s play "Rock, Paper, Scissors! Please enter one of either "Rock", "Paper", or "Scissors"!');
        console.log(playRound(playerSelection, computerPlay()));
        console.log('Player score: ' + playerScore);
        console.log('Computer score: ' + computerScore);
    }
}

game();

if (playerScore > computerScore) {
    console.log('Congratulations, you win!');
} else if (playerScore < computerScore) {
    console.log('Oh no! You lose!');
} else if (playerScore === computerScore) {
    console.log('It\'s a tie!?');
}