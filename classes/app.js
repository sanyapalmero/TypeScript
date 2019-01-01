"use strict";
var Programmer = /** @class */ (function () {
    function Programmer(name, age, tasks) {
        this.name = name;
        this.age = age;
        this.tasks = tasks;
    }
    Programmer.prototype.GetTasks = function () {
        return this.tasks;
    };
    Programmer.prototype.ShowInfo = function () {
        return "Name: " + this.name + " | Age: " + this.age;
    };
    return Programmer;
}());
var tasks = ["Fix bugs", "Deploying project", "Server repair"];
var Alex = new Programmer("Alex", 20, tasks);
console.log(Alex.GetTasks());
console.log(Alex.ShowInfo());
