"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //public username: string - this bit is a shortcut for creating a property above
    function Person(name, username) {
        this.username = username;
        // as private additionally avaliable from inherited classes
        this.age = 43;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Another Val");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("John", "jrs");
console.log(person);
person.printAge();
// person.setType("Some val"); // won't work with private method
// Inheritance
var John = /** @class */ (function (_super) {
    __extends(John, _super);
    function John(username) {
        var _this = _super.call(this, "John", username) || this;
        _this.age = 47;
        return _this;
    }
    return John;
}(Person));
var john = new John("jbs");
console.log(john);
// getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default"; // don't normally use _ prefix
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Willow";
console.log(plant.species);
// static properties and methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.1415927; // static makes it available without instantiation
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// abstract classes - can not be instantiated directly 
// - needs to be inherited from 
// - blueprint class
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("IT Project Name");
console.log(newProject);
// private constructors
// singleton class - only one instance during runtime
// e.g. keep an array of data in the app in one instance
// readonly name property
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one.');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne('The only one');
var right = OnlyOne.getInstance();
console.log(right);
// right.name = 'Something else';
