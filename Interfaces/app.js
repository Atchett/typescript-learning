"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Bob";
}
var person = {
    firstName: "John",
    hobbies: ['cooking', 'sport'],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
greet(person);
//greet({firstName: "Max", age: 73});
changeName(person);
greet(person);
person.greet("Anything");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    ;
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Fred";
myPerson.lastName = "Something";
greet(myPerson); // not class method
myPerson.greet("Dalton");
