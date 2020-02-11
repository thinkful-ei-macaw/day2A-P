'use strict';

let loaf = {
    flour: 300,
    water: 210,
}

console.log(loaf.flour, loaf.water)
console.log(loaf.water)

loaf.hydration = (loaf.water / loaf.flour ) * 100;

console.log(loaf.hydration);