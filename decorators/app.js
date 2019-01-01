"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function login_required(construtct) {
    var user = new User("root", "root");
    construtct.prototype.show = function () {
        if (user.isAuthorized()) {
            console.log(this.info);
        }
        else {
            console.log("You are not authorized");
        }
    };
}
var User = /** @class */ (function () {
    function User(login, password) {
        this.login = login;
        this.password = password;
    }
    User.prototype.isAuthorized = function () {
        return true;
    };
    return User;
}());
var Page = /** @class */ (function () {
    function Page(info) {
        this.info = info;
    }
    Page = __decorate([
        login_required
    ], Page);
    return Page;
}());
var page = new Page("something");
page.show();
