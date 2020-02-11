'use strict';

function createMyObject() {
  let myObj ={
    foo: "bar",
    answerToUniverse: 42,
    'olly olly': 'oxenfree',
    sayHello: function(){
      return 'hello';
    },
  };
    
  return myObj;
}

console.log(createMyObject());

function updateObject(obj) {

}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: null,
  };
  return person;
}

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};
  
function keyDeleter(obj) {
  // your code here
}