/* OOPS Intro:
JS does have classes, introduced with ES6, JS is primarily a prototype-based language, provides a more familiar syntax for developers coming from class-based languages.
object - collection of properties and methods
object literal
const user = {
    username : "shaily",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function () {
        console.log(`Username: ${this.username}`);
    }
}
*/

/* Object Literal in JavaScript
An object literal is the simplest and most direct way to create an object in JavaScript. It's a collection of key-value pairs enclosed in curly braces {}.
✅ Syntax
const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello!");
  }
};
📌 Key Features
🔹 1. Key-Value Pairs
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};
🔹 2. Accessing Properties
console.log(car.brand);     // Dot notation
console.log(car["model"]);  // Bracket notation
🔹 3. Adding/Modifying Properties
car.color = "blue";        // Add
car.year = 2023;           // Modify
🔹 4. Deleting Properties
delete car.model;
🔹 5. Methods in Object Literal
const user = {
  name: "Shaily",
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
user.sayHi(); // Hi, I'm Shaily
🔹 6. Nested Objects
const student = {
  name: "John",
  address: {
    city: "Delhi",
    zip: "110001"
  }
};
console.log(student.address.city); // Delhi
✨ Object Literal Shorthand (ES6+)
If your property name is the same as the variable name, you can use shorthand:
const name = "Shaily";
const age = 22;
const person = { name, age };
console.log(person); // { name: 'Shaily', age: 22 }
*/

/* OOPS in JS:
Object-Oriented Programming is a programming paradigm that organizes code into objects — self-contained units made up of data (properties) and behavior (methods).
JavaScript supports OOP via:
Constructor functions
ES6 Classes
Prototypes

🔑 Key OOP Concepts in JavaScript
Concept	Meaning in JavaScript
Class	Blueprint for creating objects (introduced in ES6)
Object	Instance created from a class
Constructor	Special method to initialize an object
Method	Function defined inside a class
this keyword	Refers to the current object instance
Inheritance	One class inherits properties/methods from another
Encapsulation	Keeping data private using closures or private fields
Polymorphism	Different classes having same method names with different behavior

🧱 1. Creating Objects
🔸 Using Object Literals
let person = {
  name: "Shaily",
  greet() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Hello, Shaily
🏗️ 2. Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hi, I'm " + this.name);
  };
}
let p1 = new Person("Alice", 22);
p1.greet(); // Hi, I'm Alice
📦 3. ES6 Classes (Modern Approach)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
let user1 = new Person("Shaily", 21);
user1.greet(); // Hi, I'm Shaily
🧬 4. Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
let dog = new Dog("Tommy");
dog.speak(); // Tommy barks.
🔐 5. Encapsulation
Using private fields (ES2022+):
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}
let acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
🎭 6. Polymorphism
Different classes with same method name:
class Bird {
  sound() {
    console.log("Tweet");
  }
}
class Cat {
  sound() {
    console.log("Meow");
  }
}
function makeSound(animal) {
  animal.sound();
}
makeSound(new Bird()); // Tweet
makeSound(new Cat());  // Meow
*/

/* Objects in JS:
🔹 1. Creating an Object
✅ Using Object Literal (most common)
let person = {
  name: "Shaily",
  age: 21,
  greet: function () {
    console.log("Hello, I'm " + this.name);
  }
};
✅ Using Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("Shaily", 21);
✅ Using new Object() (less common)
let obj = new Object();
obj.name = "Shaily";
🔹 2. Accessing Object Properties
✅ Dot Notation
console.log(person.name); // Shaily
✅ Bracket Notation
console.log(person["age"]); // 21
Use bracket notation when:
Key has spaces/special characters
Key is dynamic (variable)
🔹 3. Modifying Object Properties
person.age = 22;
person["name"] = "Shalini";
🔹 4. Adding and Deleting Properties
person.city = "Delhi";
delete person.age;
🔹 5. Iterating Over Objects
✅ for...in Loop
for (let key in person) {
  console.log(key, person[key]);
}
🔹 6. Object Methods
Objects can have functions (methods):
let car = {
  brand: "Toyota",
  start() {
    console.log("Car started");
  }
};
car.start(); // Car started
🔹 7. Object.keys(), Object.values(), Object.entries()
let user = { name: "Shaily", age: 21 };
console.log(Object.keys(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Shaily", 21]
console.log(Object.entries(user));// [["name", "Shaily"], ["age", 21]]
🔹 8. Object Destructuring
let { name, age } = user;
console.log(name); // Shaily
🔹 9. Nested Objects
let student = {
  name: "Shaily",
  address: {
    city: "Delhi",
    zip: 110001
  }
};
console.log(student.address.city); // Delhi
*/

/* Destructuring in JS:
✅ What is Destructuring?
Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into individual variables in a clean and concise way.
🔹 Object Destructuring
✅ Basic Example:
const user = { name: "Shaily", age: 21 };
const { name, age } = user;
console.log(name); // "Shaily"
console.log(age);  // 21
🧠 JavaScript automatically:
Finds the name and age keys from the object
Assigns their values to new variables with the same names
🔸 Destructuring with Different Variable Names
const user = { name: "Shaily", age: 21 };
const { name: userName, age: userAge } = user;
console.log(userName); // "Shaily"
console.log(userAge);  // 21
Here you're renaming the destructured variables.
🔸 Default Values in Destructuring
const user = { name: "Shaily" };
const { name, age = 18 } = user;
console.log(name); // "Shaily"
console.log(age);  // 18 (default used since `age` doesn't exist)
🔸 Nested Object Destructuring
const student = {
  name: "Shaily",
  address: {
    city: "Delhi",
    zip: 110001
  }
};
const { address: { city, zip } } = student;
console.log(city); // "Delhi"
🔸 Destructuring in Function Parameters
Very common in React, APIs, etc.
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}
const user = { name: "Shaily", age: 21 };
greet(user); // Hello Shaily, age 21
*/

/* Object Properties and Methods:
✅ 1. What Are Object Properties?
Object properties are key-value pairs that store data inside an object.
🔸 Example:
let person = {
  name: "Shaily",
  age: 21,
  city: "Delhi"
};
Here:
name, age, city → keys/properties
"Shaily", 21, "Delhi" → values
You can think of this like a table:
Property	Value
name	Shaily
age	21
city	Delhi

🔹 Accessing Properties
✅ Dot Notation:
console.log(person.name); // Shaily
✅ Bracket Notation:
console.log(person["age"]); // 21
🧠 Bracket notation is helpful when the key is dynamic or has spaces:
let prop = "city";
console.log(person[prop]); // Delhi
✅ 2. What Are Object Methods?
Methods are functions inside an object — used to define behaviors.
🔸 Example:
let person = {
  name: "Shaily",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  }
};
person.greet(); // Hi, I'm Shaily
Here:
greet is a method.
this.name refers to person.name.
🔹 Shorthand Method Syntax (ES6+)
You can define methods more cleanly:
let car = {
  brand: "Toyota",
  start() {
    console.log(this.brand + " started");
  }
};
car.start(); // Toyota started
🔹 Adding/Deleting Properties or Methods
✅ Add Property:
person.gender = "Female";
✅ Add Method:
person.sayBye = function () {
  console.log("Bye!");
};
person.sayBye(); // Bye!
✅ Delete Property:
delete person.city;
🔹 Loop Through Properties
for (let key in person) {
  console.log(key + ":", person[key]);
}

✅ Commonly Used Object Utility Methods
🔹 Object.keys(obj)
Returns an array of property names (keys).
const user = { name: "Shaily", age: 21 };
console.log(Object.keys(user)); // ["name", "age"]
🔹 Object.values(obj)
Returns an array of values of the object's own properties.
console.log(Object.values(user)); // ["Shaily", 21]
🔹 Object.entries(obj)
Returns an array of [key, value] pairs.
console.log(Object.entries(user)); 
// [["name", "Shaily"], ["age", 21]]
🔹 Object.assign(target, ...sources)
Copies properties from source object(s) to a target object.
const user = { name: "Shaily" };
const info = { age: 21, city: "Delhi" };
const merged = Object.assign({}, user, info);
console.log(merged); // { name: "Shaily", age: 21, city: "Delhi" }
🔹 Object.freeze(obj)
Prevents modification (no adding/removing/updating properties).
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 10;     // Won’t change
obj.b = 2;      // Won’t be added
console.log(obj); // { a: 1 }
🔹 Object.seal(obj)
Prevents adding/removing properties, but allows modifying existing ones.
const user = { name: "Shaily" };
Object.seal(user);
user.name = "Priya"; // ✅ allowed
user.age = 22;       // ❌ won't be added
console.log(user);   // { name: "Priya" }
🔹 Object.hasOwn(obj, prop)
✅ (New ES2022) — checks if object has a property directly (not from prototype).
const user = { name: "Shaily" };
console.log(Object.hasOwn(user, "name")); // true
✅ Use this instead of obj.hasOwnProperty() in modern code.
🔹 Object.getOwnPropertyNames(obj)
Returns all own property names, even non-enumerable ones.
const obj = { a: 1 };
Object.defineProperty(obj, "hidden", {
  value: "secret",
  enumerable: false
});
console.log(Object.getOwnPropertyNames(obj)); // ["a", "hidden"]
🔹 Object.getOwnPropertyDescriptor(obj, prop)
Returns detailed metadata about a property (like writable, enumerable, etc.)
const obj = { name: "Shaily" };
const desc = Object.getOwnPropertyDescriptor(obj, "name");
console.log(desc);
// { value: "Shaily", writable: true, enumerable: true, configurable: true }
🔹 Object.defineProperty(obj, key, descriptor)
Used to manually define or modify a property with custom behavior.
const user = {};
Object.defineProperty(user, "age", {
  value: 22,
  writable: false, // cannot modify
});
console.log(user.age); // 22
user.age = 30;
console.log(user.age); // still 22
🔹 Object.fromEntries(array)
Converts an array of key-value pairs into an object.
const entries = [["name", "Shaily"], ["age", 21]];
const user = Object.fromEntries(entries);
console.log(user); // { name: "Shaily", age: 21 }
🔹 Object.is(value1, value2)
Compares two values like ===, but handles edge cases better.
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN);         // false
console.log(Object.is(0, -0));    // false (=== gives true)

Enumerable, Writable, Configurable : These are property descriptors in JavaScript used when working with objects using advanced methods like Object.defineProperty() or Object.getOwnPropertyDescriptor().
These flags control how an object property behaves.

🧱 The 3 Core Descriptors
Every property in an object has hidden attributes:
Descriptor	  What it controls
enumerable	  Whether the property shows up in for...in, Object.keys()
writable	    Whether the property’s value can be changed
configurable	Whether the property can be deleted or redefined

🔍 1. enumerable
If true: The property will appear in loops (for...in, Object.keys())
If false: It stays hidden in such loops
const obj = {};
Object.defineProperty(obj, "hidden", {
  value: "secret",
  enumerable: false
});
console.log(Object.keys(obj)); // [] ← 'hidden' not shown
console.log(obj.hidden);       // secret ← still accessible directly
🔍 2. writable
If true: You can change the value of the property
If false: Assignment will not update the value
const obj = {};
Object.defineProperty(obj, "name", {
  value: "Shaily",
  writable: false
});
obj.name = "Priya";
console.log(obj.name); // "Shaily" ← did not change
🔍 3. configurable
If true: You can delete the property or change its descriptors
If false: You cannot delete or redefine the property
const obj = {};
Object.defineProperty(obj, "id", {
  value: 123,
  configurable: false
});
delete obj.id;       // ❌ fails silently
console.log(obj.id); // 123
// Trying to redefine the property also fails
Object.defineProperty(obj, "id", {
  value: 456
}); // ❌ TypeError in strict mode
*/

/* Object Creations Patterns:
🧱 1. Object Literal Pattern (Simplest)
Use when you need to create a single, simple object.
const user = {
  name: "Shaily",
  age: 22,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};
user.greet(); // Hello, I'm Shaily
🏗 2. Factory Function Pattern
Returns a new object each time the function is called. Good for creating multiple similar objects without using this or new.
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I'm ${this.name}`);
    }
  };
}
const user1 = createUser("Shaily", 22);
user1.greet(); // Hi, I'm Shaily
✅ Use when:
You don’t want to deal with new or this
You want encapsulation via closure

🧱 3. Constructor Function Pattern
A function used with the new keyword to create objects. Acts like a class.
function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}
const user2 = new User("Shaily", 22);
user2.greet(); // Hi, I'm Shaily
⚠️ Downside: Methods are duplicated for each instance. Use the prototype pattern to fix that.

🔁 4. Prototype Pattern
Methods are shared among all instances via the prototype chain.
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};
const user3 = new User("Shaily", 22);
user3.greet(); // Hello, I'm Shaily
✅ More memory-efficient since all instances share the same method.

🎓 5. ES6 Class Pattern (Modern, clean)
Syntactic sugar over prototype-based inheritance. Recommended for OOP in JS.
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hey, I'm ${this.name}`);
  }
}
const user4 = new User("Shaily", 22);
user4.greet(); // Hey, I'm Shaily
✅ Clean syntax
✅ Supports inheritance
✅ Widely used in modern JS (especially React)

🔒 6. Singleton Pattern
Creates only one instance of an object. Useful for shared config or app state.
const AppSettings = (function () {
  let instance;
  function createInstance() {
    return { theme: "dark", language: "en" };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
const settings1 = AppSettings.getInstance();
const settings2 = AppSettings.getInstance();
console.log(settings1 === settings2); // true
*/

/* Object.create:
✅ Object.create() in JavaScript
Object.create() is a powerful built-in method in JavaScript used to create a new object, specifying its prototype and optionally its properties.
🔹 Syntax
Object.create(prototype, [propertiesObject])
Parameter	Description
prototype	An object to be used as the prototype of the new object
propertiesObject (optional)	Property descriptors for the new object

✅ 1. Basic Example
const person = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
const user = Object.create(person);
user.name = "Shaily";
user.greet(); // Hello, my name is Shaily
🧠 Here:
user is an empty object whose prototype is person.
greet() is not on user, but it's inherited from person.

✅ 2. Why Use Object.create()?
To create inheritance without using constructors or classes.
To create clean objects without the default prototype (Object.create(null)).
For more control over prototypes.

✅ 3. Prototype Chain
const animal = {
  eats: true
};
const rabbit = Object.create(animal);
rabbit.hops = true;
console.log(rabbit.eats); // true → inherited from animal
console.log(rabbit.hops); // true → own property
✅ 4. Using the 2nd Argument (Property Descriptors)
const cat = Object.create(Object.prototype, {
  name: {
    value: "Kitty",
    writable: true,
    enumerable: true,
    configurable: true
  }
});
console.log(cat.name); // "Kitty"
✅ 5. Create an Object with No Prototype
const obj = Object.create(null);
console.log(obj); // {} with no inherited methods (like toString)
console.log(Object.getPrototypeOf(obj)); // null
Used when you want a clean dictionary-like object with no inherited methods or keys.
*/

/* Traverse to object property using loop:
✅ Let's Say You Have This Object:
const user = {
  name: "Shaily",
  age: 25,
  city: "Delhi"
};
🔸 1. Using for...in loop (best for plain objects)
for (let key in user) {
  console.log(key, user[key]);
}
🔍 Output:
name Shaily
age 25
city Delhi
key is the property name ("name", "age", etc.)
user[key] accesses the value
🔸 2. Using Object.keys() + forEach()
Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});
Object.keys() gives you an array of keys
Works well when you want array methods like map, filter, etc.
🔸 3. Using Object.entries()
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}
Object.entries() returns an array of [key, value] pairs
🔸 4. Using for...of with Object.keys() or Object.entries()
for (let key of Object.keys(user)) {
  console.log(key, user[key]);
}
*/

/* Add or Delete new property of object, Comparing Objects 
✅ 1. Add or Delete a Property in an Object
🔹 Example Object:
let user = {
  name: "Shaily",
  age: 25
};
🔸 Add a Property
user.city = "Delhi";            // Dot notation
user["isActive"] = true;        // Bracket notation
console.log(user);
// { name: "Shaily", age: 25, city: "Delhi", isActive: true }
🔸 Delete a Property
delete user.age;
console.log(user);
// { name: "Shaily", city: "Delhi", isActive: true }
🧠 Notes:
Bracket notation is useful when the key is dynamic (e.g., a variable):
let key = "email";
user[key] = "shaily@example.com";
✅ 2. Comparing Objects in JavaScript
🔸 🔁 The Problem:
In JavaScript, objects are reference types, so comparing them directly checks reference, not content.
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2); // ❌ false (different memory addresses)
🔸 ✅ Shallow Comparison (basic)
You can compare keys and values manually:
function isEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
console.log(isEqual({ a: 1 }, { a: 1 })); // ✅ true
console.log(isEqual({ a: 1 }, { a: 2 })); // ❌ false
✅ This works for flat (non-nested) objects.
🔸 ✅ Deep Comparison (for nested objects)
You can use a library like Lodash:
npm install lodash
import _ from 'lodash';
let a = { name: "Shaily", info: { age: 25 } };
let b = { name: "Shaily", info: { age: 25 } };
console.log(_.isEqual(a, b)); // ✅ true
*/

/* Prototype in JS:
🔹 What is a Prototype?
In JavaScript, every object has an internal link to another object called its prototype ([[Prototype]]).
This is how JavaScript supports inheritance.
You can access it using:
Object.getPrototypeOf(obj) // or obj.__proto__ (not recommended)
🔸 Example:
let person = {
  greet() {
    console.log("Hello!");
  }
};
let user = {
  name: "Shaily"
};
user.__proto__ = person; // now user inherits from person
user.greet(); // → "Hello!" (inherited from person)
✅ 2. Prototype Chain
If you try to access a property on an object and it’s not there, JavaScript will look up the prototype chain until it finds it or hits null.
console.log(user.toString()); // Found in Object.prototype

✅ prototype in JavaScript – Explained Clearly
In JavaScript, everything is an object, and every function in JS has a built-in property called prototype. This is the core of prototypal inheritance, where objects can inherit properties and methods from other objects.
🔧 What is prototype?
In JavaScript, functions (especially constructor functions and classes) have a .prototype object.
When you create an object using new, it inherits from that function's prototype.

🧱 Example: Understanding prototype
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};
const user1 = new Person("Shaily");
user1.greet(); // Hi, I'm Shaily
Here's what’s happening:
Person is a constructor function.
Person.prototype is an object { greet: function }
user1's hidden internal [[Prototype]] points to Person.prototype.

🔁 Prototype Chain
When you access user1.greet(), JavaScript:
Looks for greet in user1
If not found, looks in user1.__proto__ → Person.prototype
Keeps going up the chain until it finds the method or reaches null
console.log(user1.__proto__ === Person.prototype); // true
🔍 Check Prototype
console.log(Object.getPrototypeOf(user1)); // Same as user1.__proto__
👥 All Objects Have a Prototype
Even plain objects have a prototype:
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true
And:
console.log(Object.prototype.__proto__); // null
This ends the prototype chain.
*/

/* Inheritance in JS:
🧬 Inheritance in JavaScript – Explained Clearly
Inheritance is a fundamental concept in object-oriented programming that allows one object to access properties and methods of another.
In JavaScript, inheritance is prototypal, meaning:
Objects can inherit directly from other objects via the prototype chain.

✅ Types of Inheritance in JavaScript
Type	Based on	Example Used
Prototypal Inheritance	Objects	Object.create()
Constructor Function	Functions + prototype	new + Function.prototype
ES6 Class Inheritance	class & extends	class A extends B

🔹 1. Prototypal Inheritance (with Object.create())
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};
const dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats); // true (inherited)
dog.walk(); // Animal walks
✅ dog is inheriting from animal.

🔹 2. Inheritance with Constructor Functions + Prototypes
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};
function Dog(name) {
  Animal.call(this, name); // Call parent constructor
}
Dog.prototype = Object.create(Animal.prototype); // Inherit
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log(`${this.name} barks`);
};
const d = new Dog("Tommy");
d.speak(); // Tommy makes a sound
d.bark();  // Tommy barks

🔷 The Goal:
You are creating an Animal base constructor and a Dog constructor that inherits from Animal.
✅ 1. Define the Animal Constructor
function Animal(name) {
  this.name = name;
}
Animal is a constructor function.
When you do new Animal("Tommy"), it sets this.name = "Tommy".
✅ 2. Add Method to Animal's Prototype
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};
The speak() method is added to Animal's prototype.
All instances of Animal will inherit this method through the prototype chain.
✅ 3. Create the Dog Constructor
function Dog(name) {
  Animal.call(this, name); // Call parent constructor
}
Dog is also a constructor function.
Animal.call(this, name) means:
You're calling the Animal constructor inside the Dog constructor.
It sets this.name = name inside the new Dog object.
Without this, Dog wouldn’t set name.
🧠 This is how we inherit the properties (like name) of Animal.
✅ 4. Inherit Animal's Prototype Methods
Dog.prototype = Object.create(Animal.prototype);
This line sets up prototype inheritance.
Dog.prototype becomes an object that delegates to Animal.prototype.
So now, d.speak() will work, even though it was defined in Animal.
⚠️ Without this line, Dog instances won’t inherit methods like speak.
✅ 5. Reset the constructor property
Dog.prototype.constructor = Dog;
After doing Dog.prototype = Object.create(...), the constructor property now points to Animal.
This line resets it back to Dog, so that:
d.constructor === Dog; // true
✅ Good practice, but not mandatory unless you rely on constructor checks.
✅ 6. Add Method Specific to Dog
Dog.prototype.bark = function () {
  console.log(`${this.name} barks`);
};
This adds a method only available to Dog instances, not all Animals.
✅ 7. Create an Instance
const d = new Dog("Tommy");
This creates a new Dog instance named "Tommy".
Internally, it:
Calls Dog() → which calls Animal() via call(this)
Sets up the prototype chain so that d inherits from Dog.prototype → which inherits from Animal.prototype
✅ 8. Method Calls
d.speak(); // Inherited from Animal → "Tommy makes a sound"
d.bark();  // Defined in Dog → "Tommy barks"

🔹 3. ES6 Class Inheritance (Modern Way)
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}
const dog1 = new Dog("Shiro");
dog1.speak(); // Shiro makes a sound
dog1.bark();  // Shiro barks
✅ extends sets up prototype inheritance automatically
✅ super() is used to call the parent constructor

🧠 What Actually Happens Behind the Scenes?
In class inheritance:
Dog.prototype.__proto__ === Animal.prototype; // true
This sets up the prototype chain:
dog1 → Dog.prototype → Animal.prototype → Object.prototype

🌐 4. Multilevel Inheritance
One class inherits from another, and that class is inherited by a third.
class A {
  methodA() {
    console.log("A");
  }
}
class B extends A {
  methodB() {
    console.log("B");
  }
}
class C extends B {
  methodC() {
    console.log("C");
  }
}
const obj = new C();
obj.methodA(); // A
obj.methodB(); // B
obj.methodC(); // C
⛓️ 5. Hierarchical Inheritance
Multiple classes inherit from a single parent class.
class Animal {
  eat() {
    console.log("Eating");
  }
}
class Dog extends Animal {}
class Cat extends Animal {}
const d = new Dog();
const c = new Cat();

d.eat(); // Eating
c.eat(); // Eating
❌ JavaScript Does NOT Support:
Multiple Inheritance directly (like class A extends B, C)
But it can be mimicked using mixins.

🧪 6. Mixin Inheritance (Behavior Sharing)
Combines multiple behaviors into one object (pseudo multiple inheritance).
const canWalk = {
  walk() {
    console.log("Walking");
  }
};
const canSwim = {
  swim() {
    console.log("Swimming");
  }
};
const person = Object.assign({}, canWalk, canSwim);
person.walk(); // Walking
person.swim(); // Swimming
*/

/* Classical Inheritance vs Prototype Inheritance:
🏛️ Classical Inheritance
Classical inheritance comes from languages like Java, C++, and C#. It is class-based, where you define classes and then create instances from them. JavaScript mimics this through the use of constructor functions and, more recently, the class keyword introduced in ES6.
Key Characteristics:
Classes are blueprints for creating objects.
Inheritance is defined using class and extends.
A child class can inherit properties and methods from a parent class using the super() keyword.
Encourages a hierarchical structure (Parent → Child → Grandchild).
Tightly coupled structure — methods are often defined in the class body.
Example:
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} speaks`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}
This is how most object-oriented languages work, and it's familiar to many developers coming from those backgrounds.

🧬 Prototypal Inheritance
Prototypal inheritance is native to JavaScript. It is object-based, meaning that one object can directly inherit from another using its prototype.
Instead of creating "classes", you create objects that serve as prototypes for other objects. You can extend or override properties and methods as needed. It is more flexible and dynamic than classical inheritance.
Key Characteristics:
Objects inherit directly from other objects.
No need for classes or constructor functions (though they can be used).
Achieved using Object.create(), Object.setPrototypeOf(), or __proto__.
Encourages composition over hierarchy — you can build objects by combining multiple sources.
Great for delegation and behavior sharing.

Example:
const animal = {
  speak() {
    console.log(`${this.name} speaks`);
  }
};
const dog = Object.create(animal);
dog.name = "Buddy";
dog.bark = function () {
  console.log(`${this.name} barks`);
};
dog.speak(); // Buddy speaks
dog.bark();  // Buddy barks
This is true inheritance in JavaScript — working directly with objects rather than simulating classes.

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Dog");
dog.speak(); // "Dog makes a sound."
dog inherits speak() from Animal.prototype.

🧠 Conceptual Differences
Classical inheritance is static and hierarchical. Once a class is defined, its structure is mostly fixed.
Prototypal inheritance is dynamic and flexible. You can add, remove, or change properties and methods even after the object is created.
Classical inheritance encourages structure and planning, while prototypal inheritance encourages composability and reuse.
JavaScript supports both, but under the hood, even ES6 classes use prototypes — classes are syntactic sugar over prototype-based behavior.
*/

/* Constructor Function and new keyword:
🏗️ What is a Constructor Function?
A constructor function is a regular JavaScript function that is used to create multiple objects with the same structure (i.e., properties and methods).
✅ Key Points:
Its name is usually capitalized by convention.
It is called with the new keyword.
Inside the constructor, this refers to the new object being created.

🔹 Basic Example:
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}
const user1 = new Person("Shaily", 22);
user1.greet(); // Hi, I'm Shaily
🧠 How Does the new Keyword Work?
When you write new Person("Shaily", 22), the new keyword does several things automatically behind the scenes:
Creates a new empty object: {}
Sets the prototype of the new object to Person.prototype
Binds this inside Person to that new object
Returns the new object (unless the constructor explicitly returns another object)
So the above line is functionally similar to:

const user1 = {
  name: "Shaily",
  age: 22,
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  }
};
But with reusability built in.

🔍 Constructor vs Regular Function
Feature	Constructor Function (new)	Regular Function
Called with	new	regular function call
Purpose	To create and initialize objects	To perform actions/calculate
this refers to	The new object	Global object (or undefined in strict mode)
Return value	Returns the new object	Returns whatever is explicitly returned

✅ Constructor + prototype for Shared Methods
To avoid creating separate method copies for each object:
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};
const user2 = new Person("Priya", 23);
user2.greet(); // Hi, I'm Priya
This saves memory because greet() is shared among all instances.
*/

/* Object Clone(Shallow & Deep copy):
Cloning an object in JavaScript means creating a copy of that object — either:
Shallow clone (copies top-level properties only)
Deep clone (copies all nested properties/objects too)

✅ 1. Shallow Clone
Clones only the first level — nested objects still reference the same memory.
🔹 Using Object.assign()
const original = { name: "Shaily", age: 25 };
const clone = Object.assign({}, original);
console.log(clone); // { name: "Shaily", age: 25 }
🔹 Using Spread Operator (...)
const original = { name: "Shaily", age: 25 };
const clone = { ...original };
⚠️ Both Object.assign() and spread operator don’t clone nested objects deeply.

✅ 2. Deep Clone
Clones everything, including nested objects and arrays.
🔹 Using JSON.stringify() + JSON.parse()
const original = {
  name: "Shaily",
  address: { city: "Delhi", pin: 110001 }
};
const clone = JSON.parse(JSON.stringify(original));
clone.address.city = "Mumbai";
console.log(original.address.city); // "Delhi" ✅ (original is unaffected)
⚠️ Limitations:
Doesn’t work with Date, undefined, functions, regex, circular references
Converts them to null or loses them

🔹 Using Lodash _.cloneDeep()
✅ Best for real-world deep cloning.
npm install lodash
import _ from 'lodash';
const deepClone = _.cloneDeep(original);
✅ 3. Custom Clone (for full control)
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}
*/


