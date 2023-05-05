class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    isValidEmail() {
        return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.email);
    }
}

function* filterAdults(people) {
    for (const person of people) {
        if (person.age >= 18) {
            yield person;
        }
    }
}

const people = [
    new Person("Alice", 30, "alice@example.com"),
    new Person("Bob", 15, "bob@example.com"),
    new Person("Charlie", 22, "charlie@example.com"),
];

for (const adult of filterAdults(people)) {
    console.log(adult.name);
}
