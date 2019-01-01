namespace Mathematics {
    const EXP = Math.E;
    const PI = Math.PI;
    const SIN = Math.sin;
    
    export function getSinExp(): void {
        console.log(SIN(EXP));
    }

    export function getSinPi(): void {
        console.log(SIN(PI));
    }
}

Mathematics.getSinExp();
Mathematics.getSinPi();