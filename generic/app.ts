function getter (data:any) {
    return data;
}

console.log(getter("palmero").length);
console.log(getter(5).length);//undefined here

function genericGetter<T>(data: T): T {
    return data;
}

console.log(genericGetter<string>("palmero").length);
//console.log(genericGetter(5).lenght) //Property 'lenght' does not exist on type '5'.
console.log(genericGetter<number>(5));

class Calculate <T extends number | string> {
    constructor (private a: T, private b: T) {}

    public calculate(): void {
        console.log('sum: ', Number(this.a) + Number(this.b));
        console.log('dif: ', Number(this.a) - Number(this.b));
        console.log('mul: ', Number(this.a) * Number(this.b));
        console.log('div: ', Number(this.a) / Number(this.b));
    }
}

let c = new Calculate(5, 7); //and with new Calculate('5', '7'); no errors
c.calculate();
