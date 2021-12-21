function outsideFuncExecution(theName) {
    console.log(`Name from outside func ${theName}`)
}

class Person {
    constructor  (name, birthday){
        this.name = name
        this.birthday = birthday
    }

    getName() {
        console.log(`Name is ${this.name}`)
    }

    getBirthday() {
        console.log(`Birthday is on ${this.birthday}`)
    }

    outSideFunc() {
        return outsideFuncExecution(this.name)
    }
}

class Employee extends Person {
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

class Student extends Person {
    constructor (name, birthday, majorDepth){
        super(name, birthday)
        this.majorDepth = majorDepth
    }

    getMajorDepth() {
        console.log(`MajorDepth is ${this.majorDepth}`)
    }
}

let Person1 = new Person('Ilko', '15.10.1999')
let Employee1 = new Employee('Viktor', '09.07.1999', '9907097312', '1,4k')
let Student1 = new Student('Martin', '20.09.2001', '2')

console.log(Person1)

Person1.getBirthday()
Person1.getName()
Person1.outSideFunc()
console.log(Employee1)
Employee1.getSSN()
Employee1.getSalary()
console.log(Student1)
Student1.getMajorDepth()