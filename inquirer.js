// install inquirer
// 1. npm i inquirer
// 2. npm i @types/inquirer -d
// install chalk
// npm i chalk 
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your Name"
    },
    {
        name: "age",
        type: "number",
        message: "Enter Your Age"
    },
    {
        name: "password",
        type: "password",
        message: "Enter Your Password",
        mask: "*"
    },
    {
        name: "programming",
        type: "list",
        message: "Select Your Favourite Programming Language",
        choices: ["Python", "Javascript", "HTML", "CSS", "Typescript", "Next.js"]
    }
]);
console.log(chalk.green("My name is " + answer.name));
console.log(chalk.blue("Inshallah! in " + (60 - answer.age) + " years You will be 60 Years old.."));
console.log(chalk.red("Password " + answer.password));
console.log(chalk.magenta("My favourite language " + answer.programming));
