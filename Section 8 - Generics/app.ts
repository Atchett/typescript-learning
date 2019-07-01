// simple Generic

function echo(data: any) {
	return data;
}

console.log(echo("John"));
console.log(echo(43));
console.log(echo({name: "John", age: 43 }));


// Better Generic
// <T> - telling typescript its a generic function
function betterEcho<T>(data: T) {
	return data;
}

console.log(betterEcho("John").length);
console.log(betterEcho<number>(43));
console.log(betterEcho({name: "John", age: 43 }));

// Built-in generics

const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
//testResults.push("some");
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
	args.forEach((element) => console.log(element));
}
printAll<string>(["Apples","Bananas","Cherries"]);

// Generic Types
// creating a new constant - echo2
// assigning a type <T>(data: T) => echo 
// remember everything after the : but before the = is the type assignment
// this is a function type
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));


// Generic Classes
// + explicitly casting to a number
class SimpleMath<T extends number | string> {
	baseValue: T;
	multiplyValue: T;
	calculate(): number {
		return +this.baseValue * +this.multiplyValue;
	}
}

// const simpleMath = new SimpleMath<number>();
// simpleMath.baseValue = 10;
// simpleMath.multiplyValue = 2;
// console.log(simpleMath.calculate());

const simpleMath = new SimpleMath<string>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "2";
console.log(simpleMath.calculate());


// Multiple generics
class SimpleMathAgain<T extends number | string, U extends number | string> {
	baseValue: T;
	multiplyValue: U;
	calculate(): number {
		return +this.baseValue * +this.multiplyValue;
	}
}

const simpleMathAgain = new SimpleMathAgain<string, number>();
simpleMathAgain.baseValue = "10";
simpleMathAgain.multiplyValue = 2;
console.log(simpleMathAgain.calculate());