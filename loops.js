'use strict';

function max(numbers) {
  let i = 0; 
  let largest = numbers[0];
  while (i < numbers.length){
    if(numbers[i] > largest){
      largest = numbers[i];
    }
    i++;
  }
  return largest;
}
console.log(max([10,21,5,8,12]))
  

function min(numbers) {
  let i = 0;
  let smallest = numbers[0];
  while(i < numbers.length){
    if(numbers[i] < smallest){
      smallest = numbers[i];
    }
    i++;
  }
  return smallest;
}

console.log(min([10,21,5,8,12]))

function average(numbers) {
}