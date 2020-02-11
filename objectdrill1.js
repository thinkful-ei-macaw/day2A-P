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
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    } ,
  };
  return person;
}

console.log(personMaker());

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};
  
//4
function keyDeleter(obj) {
  delete obj.foo;
  return obj;
}

console.log(keyDeleter(sampleObj))