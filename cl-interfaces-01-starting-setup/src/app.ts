class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Department('bloxxom');
const accounting2 = new Department('hello');



console.log(accounting);
console.log(accounting2)