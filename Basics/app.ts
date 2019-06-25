//string
let myName = 'John';
// or
let myNameAgain : string = 'John';
// myName = 28;

// number
let myAge = 43;
// or
let myAgeAgain : number = 43.5;
// myAgeAgain = 'john';

// boolean
let isOld = true;
// or
let isOldAgain : boolean = true;
// isOld = 1;

//assign types
// no type
let myRealAge;
myRealAge = 43;
myRealAge = '43';

// with type
let myRealAgeAgain : number;
myRealAgeAgain = 43;

// arrays and types
// can only be array of strings
let hobbies = ['cooking', 'sport'];
console.log(hobbies[0]);
console.log(typeof hobbies);

// need array of any type
let moreHobbies: any[] = ['cooking', 'sport'];
moreHobbies = [100];

// tuples - arrays with mixed types and limited number of items
// currently is an any array
let address = ["Superstreet", 99];
// make tuple
let addressAgain : [string, number] = ["Superstreet", 99];

// Enums
enum Colour {
	Red, // 0
	Green = 100, // 1
	Blue // 2
}

let myColour: Colour = Colour.Red;
// returns 1 as it's the second item
console.log(myColour);

myColour = Colour.Green;
console.log(myColour);

myColour = Colour.Blue;
console.log(myColour);
// always refers to previous number to get the next number

// Any type
let car : any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

//functions
function returnMyName() {
	return myName;
}
console.log(returnMyName());

// assign a return type
function returnMyNameString() : string {
	return myName;
}
console.log(returnMyNameString());

// void - nothing being returned
function sayHello(): void {
	console.log('Hello');
}

// argument types
function multiply(value1:number, value2:number) : number {
	return value1 * value2;
}
console.log(multiply(2, 3));

// function types
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

// only allow specific types of function
let myMultiplyAgain : (val1: number, val2: number) => number;
// errors
// myMultiplyAgain = sayHello;
myMultiplyAgain = multiply;
console.log(myMultiplyAgain(5,2));


// objects and types
let userData = {
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
let userDataAgain : { name: string, age: number }  = {
	name: 'John',
	age: 43
};


// advanced object
// data property = array of numbers
// output property = function (boolean) - returns array of numnbers
let complex: {data: number[], output: (all: boolean) => number[]} = {
	data: [100, 3.99, 10],

	output: function (all: boolean): number[] {
		return this.data;
	}
};

// custom types
// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};
// assign type alias
let complexAgain: Complex = {
	data: [100, 3.99, 10],

	output: function (all: boolean): number[] {
		return this.data;
	}
};

// union types - can chain more than 2 types
let myRealRealAge: number | string = 43;
myRealRealAge = '43';

// check types
let finalValue = "A string";
// important to use the ""
if (typeof finalValue == "string") {
	console.log("Final value is a string")
}

// never type
// not a void because it does return something - i.e. an error
// should never be reached
function neverReturns():never {
	throw new Error('An error');
}

// nullable types - needs to be set ("strictNullChecks") in tsconfig.json
// union type
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull; // undefined
canAlsoBeNull = null;

let canThisBeAny = null;
canThisBeAny = 12;