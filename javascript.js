

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

// Here is DOM manipulation

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const results = document.querySelector("#result");

const gameResults = document.createElement("p");
gameResults.classList.add("oneresult");


btnRock.addEventListener("click", () => {
    humannumber = 1 / 3;
    
    getComputerChoice();

    score();

    result()

    console.log(number)
    console.log(humannumber)

    fgameResult()

});

btnPaper.addEventListener("click", () => {
    humannumber = 2 / 3;
    
    getComputerChoice();

    score();

    result()

    console.log(number)
    console.log(humannumber)

});

btnScissors.addEventListener("click", () => {
    humannumber = 3 / 3;
    
    getComputerChoice();

    score();

    result()

    console.log(number)
    console.log(humannumber)

});

// There is a for loop for playing 5 rounds

 


function fgameResult() {

if (pcscore < humanscore) {
        gameResults.textContent = "You are Winning! - The score is " + humanscore + "/" + pcscore +" (Human/PC)";
        results.appendChild(gameResults);
    } else if (pcscore == humanscore) {
        gameResults.textContent = "Its a DRAW - The score is " + humanscore + "/" + pcscore +" (Human/PC)";
        results.appendChild(gameResults);
    } else {
        gameResults.textContent = "You are losing! - The score is " + humanscore + "/" + pcscore +" (Human/PC)";
        results.appendChild(gameResults);
    }

}

function result() {



    if (pcscore < humanscore) {
        console.log("You WIN! - The score is " + humanscore + "/" + pcscore +" (Human/PC)")
        } else if (pcscore == humanscore) {
            console.log("Its a DRAW - The score is " + humanscore + "/" + pcscore +" (Human/PC)")
        } else {
            console.log("You LOST! - The score is " + humanscore + "/" + pcscore +" (Human/PC)")
        }
    
    }

// There is section for five rounds
