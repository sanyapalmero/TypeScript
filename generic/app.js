"use strict";
function getter(data) {
    return data;
}
console.log(getter("palmero").length);
console.log(getter(5).length); //undefined here
function genericGetter(data) {
    return data;
}
console.log(genericGetter("palmero").length);
//console.log(genericGetter(5).lenght) //Property 'lenght' does not exist on type '5'.
console.log(genericGetter(5));
var Calculate = /** @class */ (function () {
    function Calculate(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculate.prototype.calculate = function () {
        console.log('sum: ', Number(this.a) + Number(this.b));
        console.log('dif: ', Number(this.a) - Number(this.b));
        console.log('mul: ', Number(this.a) * Number(this.b));
        console.log('div: ', Number(this.a) / Number(this.b));
    };
    return Calculate;
}());
var c = new Calculate(5, 7); //and with new Calculate('5', '7'); no errors
c.calculate();
