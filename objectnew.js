'use strict';

//1
let loaf = {
    flour: 300,
    water: 210,
}

console.log(loaf.flour, loaf.water)
console.log(loaf.water)

loaf.hydration = (loaf.water / loaf.flour ) * 100;

console.log(loaf.hydration);

//2

const objTwo = {
    foo: 'foo',
    bar: 'bar',
    fum: 'fum',
    quux: 'quux',
    spam: 'spam'
}

for (const property in objTwo){
    console.log(`${property}: ${objTwo[property]}`)
}

//3
let hobbitMeals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(hobbitMeals.meals[3]);

//4
let jobOne = {
    name: 'Mavise Cerise Escher',
    jobTitle: 'Joungler',
    religion: 'Thrackerzod',
}

let jobTwo = {
    name: 'Trisala Vahadar',
    jobTitle: 'Foundation Executive',
    religion: 'lol'
}

let jobThree = {
    name: 'Arabell Frankenstein',
    jobTitle: 'Mad Scientist/Glass Blower',
    religion: 'lol'
}

let jobList = [jobOne, jobTwo, jobThree]

for (let i = 0; i < jobList.length; i++){
    console.log(jobList[i]);
}