export class Person {
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