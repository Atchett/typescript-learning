var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.1415927;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
// tsc app.ts --outFile app.js
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
console.log(MyMath.Circle.calculateCircumference(10));
console.log(MyMath.calculateRectangle(5, 10));
