interface IUser {
    name: string;
    age: number;
}

class User implements IUser {
    name: string;
    age: number;
    email: string;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let user = new User("Alex", 20);
user.email = "email@email.ru";
console.log(user);