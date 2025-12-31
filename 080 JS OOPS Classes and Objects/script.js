// let obj = {
//     1 : "harry",
//     2 : "akash",
// };

// 🔥🔥[[Prototype]]🔥🔥
// JavaScript objects have a special property called Prototype that
// is either null or references another object
// OBJECT ---> PROTOTYPE OBJECT
//      [[Prototype]]
// When we try to read a property from a prototype and its missing,
// JavaScript automatically takes it from the prototype.
// This is called "Prototype Inheritance"
// keyword --->  __proto__

// 🔥🔥🔥Prototype is a way of adding more properties in an object

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// -------------------------------------------------------------------------------------------
class Animal{
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats() {
        console.log("Kha raha hoon")
    }
    jumps() {
        console.log("Kood raha hoon")
    }
}

// class Child extends Parent🔥
class Lion extends Animal {
    constructor(name) {
        super(name) // 🔥🔥🔥calls the super class (parent constructor)
        console.log("Object is created and he is a lion...")
    }

    eats() {
        super.eats()    // 🔥🔥🔥
        console.log("Kha raha hoon roar") // this one is am example of 
        // Method Overloading🔥🔥🔥
        // If we create our own implementation of anyMethod() like eats(),
        // it will not be taken from the parent class
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)

// 🔥🔥🔥Overriding Constructor
// With a constructor, things are a bit tricky/different
// if a class extends another class and has no constructor, then the following empty
// constructor is generated
    /*  class Child extends Parent {
            // auto generated
            constructor(...args) {
            super(...args);
            }
        }*/
// Constructors in inheriting classes must call super(...) and do ot before using ".this"
// We can also use super.method() in a Child method to call Parent method

// 🔥🔥🔥Static Method
// Static methods are used to implement functions that belong to a class as a whole
// and not to any particular object

    /*  class Employee {
            static sMethod() {
                alert("Hey")
            }
        }
        
        Employee.sMethod()*/
// 🔥Static methods aren't available for individual objects🔥