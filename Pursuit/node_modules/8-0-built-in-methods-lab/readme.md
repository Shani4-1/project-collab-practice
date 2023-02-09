# Built-in Methods Lab

You've been tasked with improving some of the functionality of Canvas by building a few new functions that will help educators evaluate student submissions. Complete the functions in this Lab using what you've learned about built-in methods.

## Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

## Instructions

You'll complete three functions inside of the `index.js` file. For each function, you will need to use at least one built-in method. Each function is described in the `index.js` file and examples can be found in the tests.

### Input data

When a function references `assignments` as a parameter, it's referring to an object with the following shape.

```js
const assignments = {
  quizzes: [
    { title: "Arrays", score: { received: 4, max: 5 } },
    { title: "Objects", score: { received: 5, max: 6 } },
    { title: "Loops", score: { received: 2, max: 4 } },
  ],
  labs: [
    { title: "Arrays", score: { received: 0, max: 1 } },
    { title: "Objects", score: { received: 1, max: 1 } },
    { title: "Loops", score: { received: 1, max: 1 } },
  ],
  projects: [
    { title: "Music Box", score: { received: 14, max: 18 } },
    { title: "Calculator", score: { received: 12, max: 12 } },
  ],
};
```

The keys in the `assignments` object relate to different categories of assignments. Each category has as its value an array with any number of objects. Each object includes the following keys:

- **title**: The title of the assignment.
- **score**: An object representing what the student scored on an assignment.
- **score.received**: The actual value received on the assignment.
- **score.max**: The maximum value that could be received on the assignment.

If a function references `score`, it refers to the value of the `score` key inside of an object. For example:

```js
{ received: 14, max: 18 }
```

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your repository.

```
npm test
```

This will run the test output once.

#### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.
