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

jobThree.boss = 'Trisala';
jobOne.boss = 'Trisala';


/*for (let i = 0; i < jobList.length; i++){
    console.log(jobList[i]);
}
*/

//5
    jobList.forEach(element => {
        if(element.boss === undefined) {
            console.log(`${element.jobTitle} ${element.name} doesn't report to anybody.`)
        } else {
        console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}`)}
});

//6

const decoder = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
}

function decode(word) {
    let result = '';
    let firstLetter = word[0];
    if (firstLetter in decoder){
        let index = decoder[firstLetter];
        result = word[index];
    } else {
        result = ' ';
    }
    return result;
  }
  
  function decodeWords(words){
    words = words.split(' ');
    return words.map(decode)
  }
  console.log(decodeWords('craft block argon meter bells brown croon droop'));
  