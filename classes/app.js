"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programmer = /** @class */ (function () {
    function Programmer(name, age, tasks, taslLevel, salary) {
        this.name = name;
        this.age = age;
        this.tasks = tasks;
        this.taskLevel = taslLevel;
        this.salary = salary;
    }
    Programmer.prototype.GetTasks = function () {
        return this.tasks;
    };
    Programmer.prototype.ShowInfo = function () {
        return "Name: " + this.name + " | Age: " + this.age + " | TaskLevel: " + this.taskLevel;
    };
    return Programmer;
}());
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age, tasks) {
        return _super.call(this, name, age, tasks, 2, "2000$") || this;
    }
    Senior.prototype.GetSalary = function () {
        return this.salary;
    };
    return Senior;
}(Programmer));
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age, tasks) {
        return _super.call(this, name, age, tasks, 1, "1000$") || this;
    }
    Junior.prototype.GetSalary = function () {
        return this.salary;
    };
    return Junior;
}(Programmer));
var tasks = ["Fix bugs", "Deploying project", "Server repair"];
var Alex = new Junior("Alex", 20, tasks);
console.log(Alex.GetTasks());
console.log(Alex.ShowInfo());
console.log(Alex.GetSalary());
