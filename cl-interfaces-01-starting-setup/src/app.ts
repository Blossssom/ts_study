class Department {
    private readonly id: string;
    readonly name: string;
    private employees: string[] = [];

    constructor(n: string, id: string) {
        this.name = n;
        this.id = id;
    }

    describe(this: Department) {
        console.log('describe :', this.name, this.id);
    }

    addEmploy(this: Department, employee: string) {
        this.employees.push(employee);
    }

    printEmployee() {
        console.log('is employ :', this.employees);
    }
};

class ITpart extends Department {
    admin: string [] = [];
    constructor(id: string, admin: string[]) {
        super('blossom', id);
        this.admin = admin;
    }
}

class AccountingPart extends Department {
    reports: string[] = [];
    constructor(id: string) {
        super('x_x', id);

    }

    addReports(report: string) {
        this.reports.push(report);
    }
}

const it = new ITpart('itttt', ['bloxxom', 'flower']);
const account = new AccountingPart('account');

account.addReports('monthReport');
account.addReports('yearReport');

it.addEmploy('flower');

it.printEmployee();
it.describe();

console.log(it);
console.log(account)