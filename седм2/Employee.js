import {Person} from './Person'

export class Employee extends Person {
    constructor (name, birthday, ssn, salary){
        super(name, birthday)
        this.ssn = ssn
        this.salary = salary
    }

    getSSN() {
        console.log(`SSN is ${this.ssn}`)
    }

    getSalary() {
        console.log(`Salary is ${this.salary}`)
    }
}