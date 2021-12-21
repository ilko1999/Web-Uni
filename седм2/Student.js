import {Person} from './Person'


export class Student extends Person {
    constructor (name, birthday, majorDepth){
        super(name, birthday)
        this.majorDepth = majorDepth
    }

    getMajorDepth() {
        console.log(`MajorDepth is ${this.majorDepth}`)
    }
}