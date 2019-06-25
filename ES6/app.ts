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