"use strict";
//string
var myName = 'John';
// or
var myNameAgain = 'John';
// myName = 28;
// number
var myAge = 43;
// or
var myAgeAgain = 43.5;
// myAgeAgain = 'john';
// boolean
var isOld = true;
// or
var isOldAgain = true;
// isOld = 1;
//assign types
// no type
var myRealAge;
myRealAge = 43;
myRealAge = '43';
// with type
var myRealAgeAgain;
myRealAgeAgain = 43;
// arrays and types
// can only be array of strings
var hobbies = ['cooking', 'sport'];
console.log(hobbies[0]);
console.log(typeof hobbies);
// need array of any type
var moreHobbies = ['cooking', 'sport'];
moreHobbies = [100];
// tuples - arrays with mixed types and limited number of items
// currently is an any array
var address = ["Superstreet", 99];
// make tuple
var addressAgain = ["Superstreet", 99];
// Enums
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Green"] = 100] = "Green";
    Colour[Colour["Blue"] = 101] = "Blue"; // 2
})(Colour || (Colour = {}));
var myColour = Colour.Red;
// returns 1 as it's the second item
console.log(myColour);
myColour = Colour.Green;
console.log(myColour);
myColour = Colour.Blue;
console.log(myColour);
// always refers to previous number to get the next number
// Any type
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// assign a return type
function returnMyNameString() {
    return myName;
}
console.log(returnMyNameString());
// void - nothing being returned
function sayHello() {
    console.log('Hello');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
// function types
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// only allow specific types of function
var myMultiplyAgain;
// errors
// myMultiplyAgain = sayHello;
myMultiplyAgain = multiply;
console.log(myMultiplyAgain(5, 2));
// objects and types
var userData = {
    name: 'John',
    age: 43
};
// will error - no properties
// userData = {};
// will error - property names don't match
// userData = {
// 	a: "hello",
// 	b: 23
// };
// declare the type
var userDataAgain = {
    name: 'John',
    age: 43
};
// advanced object
// data property = array of numbers
// output property = function (boolean) - returns array of numnbers
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// assign type alias
var complexAgain = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types - can chain more than 2 types
var myRealRealAge = 43;
myRealRealAge = '43';
// check types
var finalValue = "A string";
// important to use the ""
if (typeof finalValue == "string") {
    console.log("Final value is a string");
}
// never type
// not a void because it does return something - i.e. an error
// should never be reached
function neverReturns() {
    throw new Error('An error');
}
// nullable types - needs to be set ("strictNullChecks") in tsconfig.json
// union type
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull; // undefined
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
