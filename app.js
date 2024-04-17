#! /usr/bin/env node
//Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";
//Print the welcome message to the console
console.log(chalk.bgGreenBright("Welcome to the Word Counter App"));
//Declare a let 'answers' and assign it to the result of inquirer.prompt function
let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: (chalk.bgBlueBright("Enter your sentence to count the word: "))
    }
]);
let words = answers.Sentence.trim().split(" ");
//Print the array of words to the console
console.log(words);
//Print the words count of the sentence to the console
console.log(chalk.bgRed(`Your sentence word count is ${words.length}`));
