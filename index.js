#!/usr/bin/env node
// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colourfull welcome message
console.log(chalk.bold.bgRed("\n \t\t Welcome to the coding journey."));
console.log("=".repeat(60));
// Prompt the user to enter a Sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
// Triming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence 
console.log("=".repeat(60));
console.log(chalk.bold("Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.cyanBright(words.length)}`));
console.log("=".repeat(60));
