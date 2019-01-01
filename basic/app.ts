//basic types
let str: string = "string type";
let num: number = 1;
let t: boolean = true;
let anytype: any;
let str_or_num: string | number;

//arrays
let NumArray: number[] = [1, 2, 3];
let NumArray2: Array<number> = [1, 2, 3];
let BoolArray = [true, false];
let BoolArray2: boolean[] = [true, false];
let BoolArray3: Array<boolean>
BoolArray3 = [true, false]

//tuples
let tuple1: [number, string] = [1, "1"];
let tuple2: [boolean, number, string] = [true, 1, "1"];

//functions
function sum(a:number, b:number):number
{
    return a+b;
}
console.log(sum(5,7))

const sum2 = () => 5 + 3;
console.log(sum2())

//objects
type Programmer = {
    name: string,
    age: number, 
    languages: string[], 
    github: string, 
    status?: string,// ? - optional field
    getData: () => string
}

let Alex: Programmer = {
    name: 'Alexandr',
    age: 21,
    languages: ['Python, C#, TypeScript'],
    github: 'https://github.com/sanyapalmero',
    status: 'working',
    getData():string{
        let data: string = `name: ${this.name}, age: ${this.age}, status: ${this.status}`;
        return data;
    }
}

console.log(Alex.getData())

//test noImplicitAny flag: with true and with false no errors
let test;//it must be: let test: any;

//enum
enum Languages {
    Python,
    TypeScript,
    JavaScript
}

let lang1 = Languages.Python;
console.log(lang1)

//never 
function ThrowNewError(error: string): never{
    throw new Error(error);
}

//null
let newVar;
newVar = null; //undefined and null

let number: number | null = 5;
number = null;