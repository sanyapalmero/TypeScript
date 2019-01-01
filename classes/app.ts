abstract class Programmer {
    name: string;
    age: number;
    tasks: string[];
    taskLevel: number;
    salary: string;

    constructor (name: string, age: number, tasks: string[], taslLevel: number, salary: string) {
        this.name = name;
        this.age = age;
        this.tasks = tasks;
        this.taskLevel = taslLevel;
        this.salary = salary;
    }
    
    abstract GetSalary (): string;

    GetTasks(): string[] {
        return this.tasks;
    }

    ShowInfo(): string {
        return `Name: ${this.name} | Age: ${this.age} | TaskLevel: ${this.taskLevel}`
    }
}

class Senior extends Programmer{
    constructor (name: string, age: number, tasks: string[]) {
        super(name, age, tasks, 2, "2000$")
    }

    GetSalary():string {
        return this.salary;
    }
}

class Junior extends Programmer {
    constructor (name: string, age: number, tasks: string[]) {
        super(name, age, tasks, 1, "1000$")
    }

    GetSalary():string {
        return this.salary;
    }
}

const tasks: string[] = ["Fix bugs", "Deploying project", "Server repair"];

let Alex = new Junior("Alex", 20, tasks);

console.log(Alex.GetTasks());
console.log(Alex.ShowInfo());
console.log(Alex.GetSalary());