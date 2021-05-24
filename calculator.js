const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);


const number1 = parseInt(prompt("Please enter the first number: "));
const number2 = parseInt(prompt("Please enter the second number: "));
const operation = prompt("Please choose the operation (+, -, /, *): ");

console.log("\n--------------\n");

let result = 0;

// if (operation === "+") result = number1 + number2;
// else if (operation === "-") result = number1 - number2;
// else if (operation === "/") result = number1 / number2;
// else if (operation === "*") result = number1 * number2;

result = operation === "+"? (number1+number2) : operation === "-"? (number1-number2) : operation === "*"? (number1*number2) : operation === "/"? (number1/number2) : Infinity;

if (result == Infinity) 
    console.log("Invalid operation!")
else console.log(`${number1} ${operation} ${number2} = ${result}`);