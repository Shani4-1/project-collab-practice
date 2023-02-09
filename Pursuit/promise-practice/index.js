/*
  The `askQuestion()` function will fail in the following scenarios:
    - The argument given is not a string.
    - The argument given is less than three characters long.
*/
const askQuestion = require("./askQuestion");

const successQuestion = "Will it rain tomorrow?";
const failureQuestion = "y?";

const promise = askQuestion(failureQuestion)
  .then(result => {
    console.log("My question was:", successQuestion);
    console.log(result);
  })
  .catch(error => {
    console.log("Something went wrong!");
    console.log(error);
  });

console.log("The promise:", promise);
 