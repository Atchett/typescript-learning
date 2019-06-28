// best for smaller applications
// tsc app.ts --outFile app.js
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import CircleMath = MyMath.Circle;

console.log(CircleMath.calculateCircumference(10));
console.log(MyMath.calculateRectangle(5,10));
