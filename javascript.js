console.log("Hello World")

// This is where i define my variables

let a = "rock"
let b = "paper"
let c = "scissors"
let pc = ""
let human = "" 

// This is the function for making a random choice for computer

function getComputerChoice() {

    let number = Math.random()

    console.log(number)

    if (number < 1 / 3) {
    pc = a
    } else if (number < 2 / 3) {
    pc = b
    } else {
    pc = c
    }

   return pc
}

// This is function for getting user choice

function getHumanChoice() {

    let human = prompt("Choose one and write it - Rock, Paper or Scissors?")

    return human
}


console.log(getHumanChoice())
console.log(getComputerChoice())

