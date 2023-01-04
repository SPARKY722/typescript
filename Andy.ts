class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
let Andy: Person = new Person("Andy", 25);
console.log(Andy);
export {};