"use strict";
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user = new User("Alex", 20);
user.email = "email@email.ru";
console.log(user);
