class Person {
    constructor(firstName, lastName, age, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }

    getName() {
        console.log(`Full name: ${this.firstName} ${this.lastName}`);
    }

    getAge() {
        console.log(`My age is : ${this.age}`);
    }

    setAge(age) {
        this.age = age;
    }

    getIntro() {
        console.log(`Hi I am ${this.firstName} ${this.lastName}, I'm ${this.age} years old and working as a ${this.role}.`);
    }
}

//Instantiation
const peson1 = new Person("Ajithkumar", "Kothandapani", 26 , "Software Engineer");
console.log(peson1);
peson1.getName();
peson1.setAge(22);
peson1.getIntro();


