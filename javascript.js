

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


// There is a control in console

getComputerChoice();


getHumanChoice();


score()


console.log("tady jsou základní hodnoty voleb")

console.log(human);
console.log(pc);

console.log(humannumber);
console.log(number);


console.log("tady je skóre")

console.log(humanscore);
console.log(pcscore);