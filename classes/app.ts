class Programmer {
    name: string;
    age: number;
    tasks: string[];

    constructor (name: string, age: number, tasks: string[]) {
        this.name = name;
        this.age = age;
        this.tasks = tasks;
    }
    
    GetTasks(): string[] {
        return this.tasks;
    }

    ShowInfo(): string {
        return `Name: ${this.name} | Age: ${this.age}`
    }
}

const tasks: string[] = ["Fix bugs", "Deploying project", "Server repair"];

let Alex = new Programmer("Alex", 20, tasks);

console.log(Alex.GetTasks());
console.log(Alex.ShowInfo());