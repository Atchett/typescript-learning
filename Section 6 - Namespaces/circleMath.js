"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.1415927;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
