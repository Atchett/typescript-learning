"use strict";
// simple Generic
function echo(data) {
    return data;
}
console.log(echo("John"));
console.log(echo(43));
console.log(echo({ name: "John", age: 43 }));
// Better Generic
// <T> - telling typescript its a generic function
function betterEcho(data) {
    return data;
}
console.log(betterEcho("John").length);
console.log(betterEcho(43));
console.log(betterEcho({ name: "John", age: 43 }));
// Built-in generics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
//testResults.push("some");
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apples", "Bananas", "Cherries"]);
// Generic Types
// creating a new constant - echo2
// assigning a type <T>(data: T) => echo 
// remember everything after the : but before the = is the type assignment
// this is a function type
var echo2 = betterEcho;
console.log(echo2("Something"));
// Generic Classes
// + explicitly casting to a number
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
// const simpleMath = new SimpleMath<number>();
// simpleMath.baseValue = 10;
// simpleMath.multiplyValue = 2;
// console.log(simpleMath.calculate());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "2";
console.log(simpleMath.calculate());
// Multiple generics
var SimpleMathAgain = /** @class */ (function () {
    function SimpleMathAgain() {
    }
    SimpleMathAgain.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMathAgain;
}());
var simpleMathAgain = new SimpleMathAgain();
simpleMathAgain.baseValue = "10";
simpleMathAgain.multiplyValue = 2;
console.log(simpleMathAgain.calculate());
