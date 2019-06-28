console.log("LET & CONST");
// let = block scoped
// var = global scoped
// const = cannot be changed - immutable
let variable = "Test";
console.log(variable);
variable = "another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // wont work


// block scope
function reset() {
	//console.log(variable);
	let variable = null;
	console.log(variable);
}
reset();
console.log(variable);


// arrow functions
console.log("ARROW FUNCTIONS");

const addNumbers = function(number1: number, number2: number): number {
	return number1 + number2;
}
console.log(addNumbers(10,3));

// same
const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;
// const multiplyNumbers = (number1: number, number2: number): number => {
// 	return number1 * number2;
// };
console.log(multiplyNumbers(10, 3));

const greet = () => {
	console.log('Hello');
}
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend("John");

// Default parameters
console.log("DEFAULT PARAMETERS");

const countDown = (start: number = 10): void => {
	while (start > 0) {
		// console.log(start);
		start--;
	}
	console.log("Done!", start);
}
countDown(20);


// Spread Operator
console.log("REST AND SPREAD");
// work with arrays and lists of data

const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
// SPREAD operator
// turns array into a list of numbers
console.log(Math.max(...numbers));

// REST Operator
// can be multiple arguments turn passed in params into array
// combine arguments
function makeArray(...args: number[]) {
	return args;
}
console.log(makeArray(1,2,3,4,5));

function makeArrayAgain(name: string, ...args: number[]) {
	return args;
}
console.log(makeArrayAgain("Some val", 1, 2, 3, 4, 5));

// Since TypeScript 3, you can also use tuples as types for rest expressions.
// For example, these two function signatures are equal:
function printInfo(name: string, age: number) {
	console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}

function printInfoAgain(...info: [string, number]) {
	console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}


// Destructuring Arrays
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sport"];
const hobby1 = myHobbies[0];
const hobby2 = myHobbies[1];
console.log(hobby1, hobby2);

const [hob1, hob2] = myHobbies;
console.log(hob1, hob2);

// Destructuring Objects
const userData = {userName: "John", age: 43};
const userName = userData.userName;
const userAge = userData.age;
console.log(userName, userAge);

const {userName: uName, age: uAge} = userData;
console.log(uName, uAge);

// Template literals
console.log("TEMPLATE LITERALS");
const someName = "John";
const greeting = "Hello, I'm " + someName;
console.log(greeting);

const altGreeting = ` This is a heading!
	I'm ${someName}.
	This is cool.
`;
console.log(altGreeting);

