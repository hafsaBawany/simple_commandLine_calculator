#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t A simple calculator for your simple problems\n");
const answer = await inquirer.prompt([
    { message: "enter your first number", type: "number", name: "firstNumber" },
    { message: "enter your second number", type: "number", name: "secondNumber" },
    { message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(/*"your answer is "*/ +answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "substraction") {
    console.log(/*"your answer is "*/ +answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(/*"your answer is "*/ +answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(/*"your answer is "*/ +answer.firstNumber / answer.secondNumber);
}
else {
    console.log("syntax error");
}
;
