class Department {
    name: string;
    employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('describe :', this.name);
    }

    addEmploy(this: Department, employee: string) {
        this.employees.push(employee);
    }

    printEmployee() {
        console.log('is employ :', this.employees);
    }
}

const accounting = new Department('bloxxom');
