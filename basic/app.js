//basic types
var str = "string type";
var num = 1;
var t = true;
var anytype;
var str_or_num;
//arrays
var NumArray = [1, 2, 3];
var NumArray2 = [1, 2, 3];
var BoolArray = [true, false];
var BoolArray2 = [true, false];
var BoolArray3;
BoolArray3 = [true, false];
//tuples
var tuple1 = [1, "1"];
var tuple2 = [true, 1, "1"];
//functions
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7));
var sum2 = function () { return 5 + 3; };
console.log(sum2());
var Alex = {
    name: 'Alexandr',
    age: 21,
    languages: ['Python, C#, TypeScript'],
    github: 'https://github.com/sanyapalmero',
    status: 'working',
    getData: function () {
        var data = "name: " + this.name + ", age: " + this.age + ", status: " + this.status;
        return data;
    }
};
console.log(Alex.getData());
//test noImplicitAny flag: with true and with false no errors
var test; //it must be: let test: any;
