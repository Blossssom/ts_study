class Department {
    private readonly id: string;
    readonly name: string;
    protected employees: string[] = [];

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
    private lastReport: string;
    reports: string[] = [];

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport
        }
        throw new Error('empty report');
    }

    set setRecentReport(report: string) {
        if(!report) {
            throw new Error('require input report value');
        }
        this.addReports(report);
    }

    constructor(id: string) {
        super('x_x', id);
        this.lastReport = this.reports[this.reports.length - 1];
    }

    addEmploy(name: string) {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReports(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }
}

const it = new ITpart('itttt', ['bloxxom', 'flower']);
const account = new AccountingPart('account');
const basic = new Department('basic', 'Department');
basic.addEmploy('hello');
account.setRecentReport = 'change value';
account.addReports('hello!');
account.printEmployee();
it.describe();

console.log(account.mostRecentReport);