// Async callbacks.
const people = [
    'Sang',
    'Amber',
    'Taylor',
    'Wilton',
    'Shaniqua',
]


console.log("Ready?");

function saySet() {
  console.log("Set!?");
  console.log('Are you really set?');
  console.log("Are you SURE you're ready?");
}

setTimeout(() => {
  console.log('Speak now or forever hold your peace...')
}, 20000);

setTimeout(saySet, 8000);

console.log("Go!");
