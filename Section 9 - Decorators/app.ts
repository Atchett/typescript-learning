function logged(constructorFn: Function) {
	console.log(constructorFn);
}

// log info about constructor
@logged
class Person {
	constructor() {
		console.log("Hi");
	}
}

// Factory
function logging(value: boolean) {
	return value ? logged : () => {};
}

// attach the result of the function 
// for execution
@logging(true)
class Car {

}

// Advanced decorator

// each object created or instantiated
// based on a class which has the printable decorator
// will automatically receive the print method
function printable(constructorFn: Function) {
	constructorFn.prototype.print = function() {
		console.log(this);
	}
}

@logging(true)
@printable
class Plant {
	name: string = "green plant";
}

const plant = new Plant();
// explicitly cast to type any // bug
(<any>plant).print();


// Method decorator
// Property decorator
function editable(value: boolean) {
	return function(target: any, propName: string, descriptor: PropertyDescriptor) {
		descriptor.writable = value;
	}
}

// should really be used as a listener
// read and react to values, not locking
function overwriteable(value: boolean) {
	return function(target: any, propName: string): any {
		const newDescriptor: PropertyDescriptor = {
			writable: value
		};
		return newDescriptor;
	}
}

class Project {
	@overwriteable(false)
	projectName: string;

	constructor(name: string) {
		this.projectName = name;
	}

	@editable(false)
	calcBudget() {
		console.log(1000);
	}
}

// commented out as correctly thowing an error, but blocks the JS thread
 
// const project = new Project("Super Project");
// project.calcBudget();
// project.calcBudget = function() {
// 	console.log(2000);
// }
// project.calcBudget();



// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
	console.log("Target: ", target);
	console.log("methodName: ", methodName);
	console.log("paramIndex: ", paramIndex);
}

class Course {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	printStudentNumbers(mode: string, @printInfo printAll: boolean) {
		if (printAll) {
			console.log(10000);
		} else {
			console.log(2000);
		}
	}
}

const course = new Course("Great Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);