abstract class Department {
    protected id: string;
    private name: string;
    protected employees: string[] = [];

    static fiscalYear = 2002;

    constructor(n: string, id: string) {
        this.name = n;
        this.id = id;
    }

    set changeName(name: string) {
        this.name = name;
    }

    static createEmployee(name: string) {
        return {name};
    }

    abstract describe(this: Department): void;

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

    describe(): void {
        console.log('is it part describe :', this.id)
    }
}

class AccountingPart extends Department {
    private lastReport: string;
    private static instance: AccountingPart;
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

    private constructor(id: string) {
        super('x_x', id);
        this.lastReport = this.reports[this.reports.length - 1];
    }

    static getInstance() {
        if(this.instance) {
            return this.instance;
        }
        this.instance = new AccountingPart('accounted');
        return this.instance;
    }

    describe(): void {
        console.log('is account part describe :', this.id);
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

const employ01 = Department.createEmployee('new part');
const it = new ITpart('itttt', ['bloxxom', 'flower']);
const accounting = AccountingPart.getInstance();
const accounting2 = AccountingPart.getInstance();
accounting.addReports('hello');
accounting2.addEmploy('world');

console.log(it);


console.log(accounting);
console.log(accounting2)
it.describe();