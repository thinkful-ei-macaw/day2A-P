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
