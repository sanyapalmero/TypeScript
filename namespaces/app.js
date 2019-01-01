"use strict";
var Mathematics;
(function (Mathematics) {
    var EXP = Math.E;
    var PI = Math.PI;
    var SIN = Math.sin;
    function getSinExp() {
        console.log(SIN(EXP));
    }
    Mathematics.getSinExp = getSinExp;
    function getSinPi() {
        console.log(SIN(PI));
    }
    Mathematics.getSinPi = getSinPi;
})(Mathematics || (Mathematics = {}));
Mathematics.getSinExp();
Mathematics.getSinPi();
