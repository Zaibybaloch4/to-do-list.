#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todo = [];
console.log(chalk.bgBlue.bold("\n \t WELLCOME TO MY TODO LIST \n"));
let condition = true;
//using while loop;
/* while(condition)
   {
       let todoQuestions = await inquirer.prompt([
   {
       name : "question1",
       type : "input" ,
       message :  "What you want to add in your todo list?"
   },

   {
       name: "question2",
       type : "confirm",
       default : "true",
       message : "Do you want to add more in your todo list?"

   }

]);

todo.push(todoQuestions.question1);
console.log(todo);

//using loop condition for rnning question2;

condition = todoQuestions.question2
}; */
// ADDITION FUNCTION
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message: "SELECT ANY ONE OPTION",
                choices: ["Add", "Delete", "Update", "View", "Exist"],
            }
        ]);
        //conditional statement.
        if (option.choices === "Add") {
            await addTask();
        }
        else if (option.choices === "Delete") {
            await deleteTask();
        }
        else if (option.choices === "Update") {
            await updateTask();
        }
        else if (option.choices === "View") {
            await view();
        }
        else if (option.choices === "Exist") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "add",
            type: "input",
            message: "add your new task:",
        }
    ]);
    todo.push(newTask.add);
    console.log(chalk.bgGreen(`\n ${newTask.add}  ADDED SUCCESSFULLY `));
};
//VIEW FUNCTION
let view = () => {
    console.log(chalk.bgYellow(" \n \t TODO LIST \n"));
    todo.forEach((task, index) => {
        console.log(`${index + 1} : ${task}`);
    });
};
// for deleting function.
let deleteTask = async () => {
    await view();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "ENTER INDEX NUMBER.",
        }
    ]);
    let deletedTask = todo.splice(taskIndex.index - 1, 1);
    console.log(chalk.bgMagenta(`\n ${deletedTask} YOUR TASK IS DELETED.`));
};
// for updating todo list
let updateTask = async () => {
    await view();
    let updateTask = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "ENTER INDEX NUMBER.",
        },
        {
            name: "newTask",
            type: "input",
            message: "ENTER NEW UPDATED MESSAGE.",
        }
    ]);
    todo[updateTask.index - 1] = updateTask.newTask;
    console.log(chalk.bgGray(`\n index no ${updateTask} SUCCESSFULLY UPDATED.`));
};
main();
