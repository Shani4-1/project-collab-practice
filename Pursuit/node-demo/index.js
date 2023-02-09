function addFruit(fruits, fruit) {
    fruits.push(fruit)

    return fruits;
}

const fruits = ['🍓', '🥭', '🍒'];
console.log(addFruit(fruits, '🥝'))

//
// const result1 = addFruit(fruits, 'kiwi');
// console.log(result1)