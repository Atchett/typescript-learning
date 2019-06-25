class Person {
	name: string;
	// only accessible from object based on class
	private type: string;
	// as private additionally avaliable from inherited classes
	protected age: number = 43;

	//public username: string - this bit is a shortcut for creating a property above
	constructor(name: string, public username: string) {
		this.name = name;
	}

	printAge() {
		console.log(this.age);
		this.setType("Another Val");
	}

	private setType(type: string) {
		this.type = type;
		console.log(this.type);
	}
}

const person = new Person("John", "jrs");
console.log(person);
person.printAge();
// person.setType("Some val"); // won't work with private method

// Inheritance
class John extends Person {
	
	constructor(username: string) {
		super("John", username); // refers to parent class
		this.age = 47;
	}
}

const john = new John("jbs");
console.log(john);


// getters and setters
class Plant {
	private _species: string = "Default"; // don't normally use _ prefix

	set species(value: string) {
		if (value.length > 3) {
			this._species = value;
		} else {
			this._species = "Default";
		}
	}

	get species() {
		return this._species;
	}
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Willow";
console.log(plant.species);

// static properties and methods
class Helpers {
	static PI: number = 3.1415927; // static makes it available without instantiation
	static calcCircumference(diameter: number): number {
		return this.PI * diameter;
	}
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// abstract classes - can not be instantiated directly 
// - needs to be inherited from 
// - blueprint class
abstract class Project {
	projectName: string = "Default";
	budget: number = 1000;

	abstract changeName(name:string): void; // needs to be implemented

	calcBudget() {
		return this.budget * 2;
	}
}

class ITProject extends Project {
	changeName(name: string): void {
		this.projectName = name;
	}
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("IT Project Name");
console.log(newProject);


// private constructors
// singleton class - only one instance during runtime
// e.g. keep an array of data in the app in one instance
// readonly name property
class OnlyOne {
	private static instance: OnlyOne;
	public readonly name: string;

	private constructor(name: string) {}

	static getInstance() {
		if (!OnlyOne.instance) {
			OnlyOne.instance = new OnlyOne('The only one.')
		}
		return OnlyOne.instance;
	}
}

//let wrong = new OnlyOne('The only one');
let right = OnlyOne.getInstance();
console.log(right);

// right.name = 'Something else';

