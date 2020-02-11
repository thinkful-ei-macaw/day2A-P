'use strict';

let myObj = {
  foo: 'fee'
}


//1
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


//2
function updateObject(myObj) {
  myObj.foo = 'foo';
  myObj.bar = 'bar';
  myObj.bizz = 'bizz';
  myObj.bang = 'bang';
  return myObj;
}

console.log(updateObject(myObj))

//3
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