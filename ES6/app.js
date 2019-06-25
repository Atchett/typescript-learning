"use strict";
console.log("LET & CONST");
// let = block scoped
// var = global scoped
// const = cannot be changed - immutable
var variable = "Test";
console.log(variable);
variable = "another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // wont work
// block scope
function reset() {
    //console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// arrow functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
// same
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
// const multiplyNumbers = (number1: number, number2: number): number => {
// 	return number1 * number2;
// };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log('Hello');
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("John");
// Default parameters
console.log("DEFAULT PARAMETERS");
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        // console.log(start);
        start--;
    }
    console.log("Done!", start);
};
countDown(20);
// Spread Operator
console.log("REST AND SPREAD");
// work with arrays and lists of data
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
// SPREAD operator
// turns array into a list of numbers
console.log(Math.max.apply(Math, numbers));
// REST Operator
// can be multiple arguments turn passed in params into array
// combine arguments
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3, 4, 5));
function makeArrayAgain(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArrayAgain("Some val", 1, 2, 3, 4, 5));
// Since TypeScript 3, you can also use tuples as types for rest expressions.
// For example, these two function signatures are equal:
function printInfo(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
function printInfoAgain() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
// Destructuring Arrays
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sport"];
var hobby1 = myHobbies[0];
var hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var hob1 = myHobbies[0], hob2 = myHobbies[1];
console.log(hob1, hob2);
// Destructuring Objects
var userData = { userName: "John", age: 43 };
var userName = userData.userName;
var userAge = userData.age;
console.log(userName, userAge);
var uName = userData.userName, uAge = userData.age;
console.log(uName, uAge);
// Template literals
console.log("TEMPLATE LITERALS");
