//global values to track score
let playerScore = 0;
let computerScore = 0;

//variables for the score
let playerScoreDiv = document.querySelector('#playerScore');
let computerScoreDiv = document.querySelector('#computerScore');

//variables for announcing the round and game winners or losers
let roundAnnounceDiv = document.querySelector('#roundAnnounce');
let gameAnnouncement = document.querySelector('#gameAnnounce');

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

    //checks if either player has reached five points, and finishes the function if they have. This prevents extra button clicks from continuing the game after five points
    if (playerScore === 5 || computerScore === 5) {
        return;
    }

    //check for a tie
    if (playerSelection === computerSelection) { 
        roundAnnounceDiv.textContent = 'You and PC played the same move! It\'s a tie!';
    }

    //compare the player and computer moves to see who wins.
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            ++playerScore;
            playerScoreDiv.textContent = playerScore;
            roundAnnounceDiv.textContent = 'PC played scissors! You win! Rock beats scissors!';
        } else if (computerSelection === 'paper') {
            ++computerScore;
            computerScoreDiv.textContent = computerScore;
            roundAnnounceDiv.textContent = 'PC played paper! You lose! Paper beats rock!';
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            ++playerScore;
            playerScoreDiv.textContent = playerScore;
            roundAnnounceDiv.textContent = 'PC played rock! You win! Paper beats rock!';
        } else if (computerSelection === 'scissors') {
            ++computerScore;
            computerScoreDiv.textContent = computerScore;
            roundAnnounceDiv.textContent = 'PC played scissors! You lose! Scissors beats paper!';
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            ++playerScore;
            playerScoreDiv.textContent = playerScore;
            roundAnnounceDiv.textContent = 'PC played paper! You win! Scissors beats paper!';
        } else if (computerSelection === 'rock') {
            ++computerScore;
            computerScoreDiv.textContent = computerScore;
            roundAnnounceDiv.textContent = 'PC played rock! You lose! Rock beats scissors!';
        }
    }

    //checks if either player has reached five points, and displays a message announcing whether the player has won or lost the game
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            gameAnnouncement.textContent = 'Game over! Congratulations, you win!';
        } else if (playerScore < computerScore) {
            gameAnnouncement.textContent = 'Game over! Oh no! You lose!';
        }
    }
    
    

}

//defines the buttons as const
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

function game() {

    
    //event listeners for buttons when they are clicked. Plays function playRound() on click.
    rockButton.addEventListener('click', () => {
        playRound('rock', computerPlay());
    });

    paperButton.addEventListener('click', () => {
        playRound('paper', computerPlay());
    });

    scissorsButton.addEventListener('click', () => {
        playRound('scissors', computerPlay());
    });
}

game();