class User {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let user = new User("alex", 20);
console.log(user);