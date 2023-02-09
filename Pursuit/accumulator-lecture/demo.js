/// Accumulator Patterns

// What is a pattern? A type of solution that's repeated often enough that it gets a name.

// Some examples.

// The Cascading Conditionals Pattern.

// Each condition is checked in turn, and as soon as one is true, we skip the
// rest.  Can be done a bunch of different ways! A function that returns, an
// if/else chain, a switch statement... these are all ways to implement the same
// pattern.
const rolls = [4, 2];
if (rolls.length === 0) {
  console.log("No dice have been rolled.");
} else if (rolls.length === 1) {
  console.log("1 die has been rolled.");
} else {
  console.log(`${rolls.length} dice have been rolled.`);
}

// The Guard Clause Pattern.

// Do an operation, but first make sure you're working with what you're thinking
// you're working with.  Usually it's an if check AT THE VERY START of the
// function, so you can return or throw an error and prevent the below code from
// running.
function rollDie(sides) {
  if (typeof sides !== "number") {
    return "Value inputted must be a number.";
  }

  return Math.ceil(Math.random() * sides);
}

const roll1 = rollDie("six");
const roll2 = rollDie(6);
console.log(roll1);
console.log(roll2);

// The Accumulator Pattern is a common set of steps for taking a series of
// values and accumulating them into one value.

// The classic example is summing all numbers in an array.
function sumAll(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    // or you can shorten the above with `sum += numbers[i]`
  }

  return sum;
}

// We've got 3 basic steps here:
//
// 1. Create a default value.
//   If no values are passed in (an empty array), what should the return value be?
//   This is usually created with a `let`, because we're going to reassign it.
// 2. Loop through the inputted values.
//   Usually this is a standard for loop, since we usually want to hit every
//   value in the array!
// 3. Inside the loop, accumulate into your original, default value.

// This can be done with strings, too! Let's try writing one together where we
// take a collection of strings and put them into one string.
function listClass(students) {}

console.log(listClass([]) === "whatever our default value is")
// The below specification does NOT take care of any trailing ands, but let's
// stick to the basics of the pattern (for now!).
console.log(listClass(["Ariunaa", "Christine", "Howard"]) === "Ariunaa and Christine and Howard and ");
console.log(listClass(["Christian", "Jenel", "Isaiah", "Elizabeth"]) === "Ariuuna and Jenel and Isaiah and Elizabeth and ");

// Let's take a minute in pairs to write `multiplyAll` and `takeAtendance`.
function multiplyAll(numbers) {}

console.log(multiplyAll([]) === "whatever our default value is");
console.log(multiplyAll([3, 2]) === 6);
console.log(multiplyAll([5, 3, 6]) === 90);

function takeAttendance(classRoster) {}

console.log(takeAttendance([]) === "");
// Don't worry about the trailing space for now. This spec is simpler to code a solution to!
console.log(takeAttendance(["Keeanu", "Riya", "Jyoti"]) === "Is Keeanu here? Is Riya here? Is Jyoti here? ");
console.log(takeAttendance(["Sang", "Eric"]) === "Is Sang here? Is Eric here? ");

// You can do all kinds of more complex ones, too.
// Like finding the lowest value.
function lowestValue(numbers) {
  // Lowest value is the very first number.
  // What will we return with an empty array passed in?
  let lowest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i]
    }
  }

  return lowest
}

lowestValue([6, 7, 4, 5, 3, 8]) //> 3

// Or returning a boolean to indicate whether a value is in the array.
function isStudentHere(classRoster, student) {
  let present = false;
  for (let i = 0; i < present.length; i++) {
    if (classRoster[i] === student)  {
      present = true;
    }
  }

  return present;
}

isStudentHere(['Nathaniel', 'Ari', 'Ryan'], 'Nathaniel'); //> true
isStudentHere(['Jennifer', 'Wilton', 'Shani', 'Yasser'], 'Alex'); //> false

// Or accumulating an array of objects into an array of strings.
function surnames(people) {
  const names = [];
  for (let i = 0; i < people.length; i++) {
    const valueWereLookingFor = people[i].lastName
    names.push(valueWereLookingFor);
  }

  return names
}

const people = [
  {
    firstName: 'Andre',
    lastName: 'Ortiz',
    cohort: '9.3',
  },
  {
    firstName: 'Michelle',
    lastName: 'Ortega',
    cohort: '9.3',
  },
  {
    firstName: 'Billy',
    lastName: 'Dominique',
    cohort: '8.1',
  },
]

surnames(people) //> ['Ortiz', 'Ortega', 'Dominique']

// Or an array into an object.
function getUniqueRolls(rolls) {
  let accumulator = {};

  for (let i = 0; i < rolls.length; i++) {
    const roll = rolls[i];
    accumulator[roll] = true;
  }

  return accumulator;
}

const rolls2 = [4, 5, 6, 1, 5, 4, 4, 1];
getUniqueRolls(rolls2); //> { '1': true, '4': true, '5': true, '6': true }