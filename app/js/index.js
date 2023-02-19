/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */

logTitle('Classes in nutshell')

class Animal {
    constructor(name, age) {
        log(`${name} is an Animal and was created.`)
        this.name = name;
        this.age = age;
    }

    static iAmAStaticMethod() {
        log('I am a STATIC method in Animal Class.')
    }

    eat() {
        log(`${this.name} is eating.`);
    }
    sleep() {
        log(`${this.name} is sleeping.`);
    }

    wakeUp() {
        log(`${this.name} is waking up.`)
    }

    logAge() {
        log( `${this.name} is ${this.age} years old.` );
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    logBread() {
        log(`${this.name} is a ${this.breed}`)
    }

    logAgeFromDog() {
        super.logAge();
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    logAgeFromCat() {
        super.logAge();
    }
}

Animal.iAmAStaticMethod();
const bullDog = new Dog('boby', 3, 'bullDog');
bullDog.logBread();
bullDog.logAge();

log('-------------')
const moss = new Cat('Moss', 4);
moss.eat();
moss.sleep();
moss.wakeUp();
moss.logAgeFromCat();

  
