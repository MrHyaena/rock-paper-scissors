

// This is where i define my variables

let a = "rock";
let b = "paper";
let c = "scissors";
let pc = "";
let human = "";
let number = 0;
let humannumber = 0;
let pcscore = 0;
let humanscore = 0;

// This is the function for making a random choice for computer

function getComputerChoice() {

    number = Math.random()

    if (number < 1 / 3) {
    pc = a
    } else if (number < 2 / 3) {
    pc = b
    } else {
    pc = c
    }

   return pc
}

// This is function for getting user choice and asigning number to it

function getHumanChoice() {

    human = prompt("Choose one and write it - rock, paper or scissors?")

    human = human.toLowerCase()

    if (human = "rock") {
       humannumber = 1 / 3
    } else if (human = "paper") {
        humannumber = 2 / 3
    } else {
        humannumber = 1
    }

    return humannumber
}


// This function is for counting the score

function score() {

    

    if (humannumber == 1 / 3 && number < 1 / 3 ) {
        humanscore = humanscore + 0;
        pcscore = pcscore + 0;
    } else if (humannumber == 1 / 3 && number < 2 / 3 ) {
        humanscore = humanscore + 0;
        pcscore = pcscore + 1;
    } else if (humannumber === 1 / 3 && number < 1 ) {
        humanscore = humanscore + 1;
        pcscore = pcscore + 0;
    } else if (humannumber == 2 / 3 && number < 1 / 3 ) {
        humanscore = humanscore + 1;
        pcscore = pcscore + 0;
    } else if (humannumber == 2 / 3 && number < 2 / 3 ) {
        humanscore = humanscore + 0;
        pcscore = pcscore + 0;
    } else if (humannumber == 2 / 3 && number < 1 ) {
        humanscore = humanscore + 0;
        pcscore = pcscore + 1;
    } else if (humannumber == 1 && number < 1 / 3 ) {
        humanscore = humanscore + 0;
        pcscore = pcscore + 1;
    } else if (humannumber == 1 && number < 2 / 3 ) {
        humanscore = humanscore + 1;
        pcscore = pcscore + 0;
    } else {
        humanscore = humanscore + 0;
        pcscore = pcscore + 0;
    }
    return humanscore && pcscore
}


// There is a function for starting one round of game


function playRound() {

getComputerChoice();


getHumanChoice();


score();

}

// There is a for loop for playing 5 rounds

for (let i = 0; i <= 4; i++) {

    playRound()
    console.log(i)
}

if (pcscore < humanscore) {
    console.log("You WIN! - The score is " + humanscore + "/" + pcscore +" (Human/PC)")
    } else if (pcscore == humanscore) {
        console.log("Its a DRAW - The score is " + humanscore + "/" + pcscore +" (Human/PC)")
    } else {
        console.log("You WON! - The score is " + humanscore + "/" + pcscore +" (Human/PC)")
    }

// There is a control in console
