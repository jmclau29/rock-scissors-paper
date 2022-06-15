//get the computer's move
function computerPlay() {
    let randomInt = Math.floor(Math.random() * 3); //generate a random integer between 0 and 2
    console.log(randomInt);
    switch(randomInt) { //assign a string based on the value of randomInt
        case randomInt === 0:
            return = 'rock';

        case randomInt === 1:
            return 'scissors';
        
        case randomInt === 2:
            return 'paper';
            
    }
}