// interface is a contract which can be used as a type
// makes sure all the required conditions setup in the interface
// are fullfilled by whatever is of the type
interface NamedPerson {
	firstName: string;
	age?: number; // ? = optional
	[propName: string]: any; // optional - but could be anything (name or value) // flexible keyname
	greet(lastName: string): void;
}

function greet(person: NamedPerson): void {
	console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson): void {
	person.firstName = "Bob";
}

const person: NamedPerson = {
	firstName: "John",
	hobbies: ['cooking', 'sport'],
	greet(lastName: string) {
		console.log("Hi, I am " + this.firstName + " " + lastName);
	}
}

greet(person);
//greet({firstName: "Max", age: 73});
changeName(person);
greet(person);
person.greet("Anything");

class Person implements NamedPerson {
	firstName: string;
	lastName: string;
	greet(lastName: string) {
		console.log("Hi, I am " + this.firstName + " " + lastName);
	};
}

const myPerson = new Person();
myPerson.firstName = "Fred";
myPerson.lastName = "Something";
greet(myPerson); // not class method
myPerson.greet("Dalton");