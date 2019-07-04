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

@logging(true)
class Car {

}