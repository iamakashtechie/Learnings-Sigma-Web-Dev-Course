class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
console.log(user.name); // John

// user = new User("Joe");
user.name = "Joe"; // Name is too short.
console.log(user.name);

// 🔥🔥🔥instanceof Operator
// The instanceof operator allows to check (returns true/false) whether an object belongs to a
// certain Class or any other Class inheriting form it
// <obj> 🔥instanceof🔥 <class>

// Getters and Setters
// Classes may include getters and setters to get & set the compute properties
    /* class Person {
           ...
           get name () {
               return this._name;
           }
           set name (newName) {
               this._name = newName;
           }
       }*/
// 1st the name property is changed to _name to avoid the name collision with the getter & setter.
// Then the getter uses the get keyboard as shown above.