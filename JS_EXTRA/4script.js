/* Arrays in JS:
An Array in JavaScript is a special type of object used to store ordered collections of items (elements), such as numbers, strings, or even other objects.
🧱 What is an Array?
An array is a list-like object with indexed elements, starting at index 0.
🔹 Declaration
let fruits = ["apple", "banana", "cherry"];
You can also use the constructor:
let numbers = new Array(1, 2, 3); // Not recommended usually
🔍 Accessing Elements
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"
✏️ Modifying Elements
fruits[1] = "mango";   // replaces "banana"
console.log(fruits);   // ["apple", "mango", "cherry"]
🔢 Array Length
console.log(fruits.length); // 3
📦 Adding & Removing Elements
🔹 Add
push() – Add at end
unshift() – Add at beginning
fruits.push("orange");      // ["apple", "mango", "cherry", "orange"]
fruits.unshift("grape");    // ["grape", "apple", ...]
🔹 Remove
pop() – Remove from end
shift() – Remove from beginning
fruits.pop();     // removes "orange"
fruits.shift();   // removes "grape"
🔁 Looping Through Arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let fruit of fruits) {
  console.log(fruit);
}
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
🧪 Arrays Can Hold Anything
let mixed = [
  1,
  "text",
  true,
  { name: "Shaily" },
  [1, 2, 3],
  function () { console.log("hello"); }
];
mixed[3].name;         // "Shaily"
mixed[4][1];           // 2
mixed[5]();            // "hello"
📚 Checking If It's an Array
Array.isArray(fruits); // true
typeof fruits;         // "object"
*/

/* Ways to create an array:
✅ 1. Using Array Literals (Most Common Way)
This is the simplest and most widely used method.
const fruits = ["apple", "banana", "cherry"];
Easy to read
Preferred in most use cases
✅ 2. Using the Array Constructor
const numbers = new Array(3, 5, 7); // [3, 5, 7]
⚠️ Caution: When used with a single number, it creates an empty array with a set length.
const emptyArray = new Array(5); // [ <5 empty items> ]
Use only if you need a specific length or plan to fill it later.
✅ 3. Using Array.of()
Creates an array from the arguments provided, even if it's a single number.
const nums = Array.of(5); // [5]
const letters = Array.of("a", "b", "c"); // ["a", "b", "c"]
Unlike new Array(5), this won’t create holes.
✅ 4. Using Array.from()
Creates a new array from an iterable or array-like object.
const str = "hello";
const chars = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
const squares = Array.from([1, 2, 3], x => x * x); // [1, 4, 9]
Also used to convert NodeLists, arguments objects, etc.
✅ 5. Using the Spread Operator (...)
const set = new Set([1, 2, 3]);
const arr = [...set]; // [1, 2, 3]
Used for:
Cloning arrays: const clone = [...original]
Combining arrays: const merged = [...a, ...b]
✅ 6. Using fill() with Array()
const filled = new Array(3).fill(0); // [0, 0, 0]
Useful to initialize an array with default values.
✅ 7. Using Loops (Manual creation)
const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(i);
}
// [0, 1, 2, 3, 4]
Useful when you want to build arrays dynamically.
*/

/* Array Methods:
🔹 push() – Add to the End
Adds one or more elements to the end of the array.
const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]
🔹 pop() – Remove from the End
Removes the last element and returns it.
const fruits = ["apple", "banana", "cherry"];
const last = fruits.pop();
console.log(last);   // "cherry"
console.log(fruits); // ["apple", "banana"]
🔹 shift() – Remove from the Beginning
Removes the first element and returns it.
const fruits = ["apple", "banana", "cherry"];
const first = fruits.shift();
console.log(first);  // "apple"
console.log(fruits); // ["banana", "cherry"]
🔹 unshift() – Add to the Beginning
Adds one or more elements to the start of the array.
const fruits = ["banana", "cherry"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "cherry"]
🔹 slice(start, end) – Extract a Portion
Returns a shallow copy of a portion of an array. Original array is not modified.
const fruits = ["apple", "banana", "cherry", "date"];
const sliced = fruits.slice(1, 3);
console.log(sliced); // ["banana", "cherry"]
console.log(fruits); // unchanged
🔹 splice(start, deleteCount, ...items) – Add/Remove in Place
Modifies the array by removing and/or adding elements.
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "kiwi", "orange"); 
// Remove 1 item at index 1, then add "kiwi" and "orange"
console.log(fruits); // ["apple", "kiwi", "orange", "cherry"]
🔹 indexOf(value) – Find First Index
Returns the first index of the given value, or -1 if not found.
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("grape"));  // -1
🔹 includes(value) – Check for Value
Returns true if the value exists in the array.
const fruits = ["apple", "banana"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("kiwi"));   // false
🔹 reverse() – Reverse the Array
Reverses the elements of the array in place (modifies it).
const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]
🔹 sort() – Sort Alphabetically (or by custom logic)
Sorts the array in place. Default is alphabetical.
const fruits = ["cherry", "apple", "banana"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]
With numbers, use a compare function:
const nums = [10, 5, 20];
nums.sort((a, b) => a - b);
console.log(nums); // [5, 10, 20]
🔹 join(separator) – Convert to String
Joins all array elements into a string, using a separator.
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.join(", ")); // "apple, banana, cherry"
🔹 concat() – Merge Arrays
Creates a new array by combining two or more arrays.
const a = [1, 2];
const b = [3, 4];
const merged = a.concat(b);
console.log(merged); // [1, 2, 3, 4]
🔹 map() – Transform Elements
Creates a new array by applying a function to each item.
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6]
🔹 filter() – Keep Matching Elements
Returns a new array with elements that pass a condition.
const fruits = ["apple", "banana", "kiwi"];
const result = fruits.filter(fruit => fruit.length > 5);
console.log(result); // ["banana"]
🔹 find() – First Matching Element
Returns the first element that satisfies the condition.
const nums = [4, 7, 9, 12];
const found = nums.find(n => n > 8);
console.log(found); // 9
🔹 reduce() – Accumulate to One Value
Used to reduce an array to a single value (e.g., sum).
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 10
⚠️ Mutating vs Non-Mutating
✅ Non-mutating: slice(), map(), filter(), concat()
❌ Mutating: push(), pop(), shift(), unshift(), splice(), sort(), reverse()
*/

/* Array Iteration Methods:
✅ 1. forEach()
🔸 Use: Executes a function for each array element.
Does not return anything.
Good for side effects like logging, updating DOM, etc.
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit, index) {
  console.log(index, fruit);
});
// Output:
// 0 "apple"
// 1 "banana"
// 2 "cherry"
✅ 2. map()
🔸 Use: Creates a new array by transforming each element.
Returns a new array.
Does not modify the original array.
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3]
✅ 3. filter()
🔸 Use: Returns a new array with items that match a condition.
const ages = [16, 21, 18, 14, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [21, 18, 30]
✅ 4. reduce()
🔸 Use: Reduces array to a single value (e.g., sum, product, etc.)
const numbers = [10, 20, 30];
const total = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(total); // 60
✅ 5. some()
🔸 Use: Returns true if any element matches the condition.
const scores = [45, 80, 90];
const hasFail = scores.some(score => score < 50);
console.log(hasFail); // true
✅ 6. every()
🔸 Use: Returns true only if all elements match the condition.
const scores = [80, 90, 100];
const allPassed = scores.every(score => score >= 50);
console.log(allPassed); // true
⚠️ Important Differences
Feature	some()	every()
Checks	If at least one matches	If every item matches
Returns	true or false	true or false
Stops at	First true	First false
Common usage	Validation, partial match	Strict validation, all pass
🧠 Real-Life Example
Imagine you have a list of checkboxes:
🔹 Want to know if any box is checked? Use some():
const checked = [false, false, true];
console.log(checked.some(x => x)); // true
🔹 Want to know if all are checked? Use every():
const allChecked = [true, true, true];
console.log(allChecked.every(x => x)); // true
✅ 7. find()
🔸 Use: Returns the first element that matches the condition.
const users = [
  { id: 1, name: "Shaily" },
  { id: 2, name: "Priya" },
  { id: 3, name: "Ankit" }
];
const result = users.find(user => user.name.startsWith("P"));
console.log(result); // { id: 2, name: "Priya" }
✅ 8. findIndex()
🔸 Use: Returns the index of the first matching element.
const nums = [4, 9, 13, 18];
const index = nums.findIndex(num => num > 10);
console.log(index); // 2
✅ 9. flat() (ES2019+)
🔸 Use: Flattens nested arrays into a single level.
const arr = [1, [2, [3, 4]]];
console.log(arr.flat(2)); // [1, 2, 3, 4]
🔸 flat() – What It Does
The Array.prototype.flat() method in JavaScript is used to flatten nested arrays — meaning it removes nesting and brings elements into a single-level array.
✅ Syntax:
array.flat(depth)
depth (optional): Specifies how deep you want to flatten the array.
Default depth is 1.
🧪 Example:
const arr = [1, [2, [3, 4]]];
Let’s visualize it:
[
  1,               // Level 0
  [                // Level 1
    2,             // Level 1
    [3, 4]         // Level 2
  ]
]
✅ arr.flat(1) (default)
arr.flat(1); 
// → [1, 2, [3, 4]]    ❌ still nested
Only flattens one level
[3, 4] is still nested inside
✅ arr.flat(2)
arr.flat(2); 
// → [1, 2, 3, 4] ✅ fully flattened
It flattens up to 2 levels deep
Now even [3, 4] gets pulled out
✅ In Summary:
Code	Result
flat(1)	[1, 2, [3, 4]]
flat(2)	[1, 2, 3, 4] ✅
flat(Infinity)	Flattens all levels
✅ 10. flatMap()
🔸 Use: Maps and flattens in one step.
const arr = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]
🔸 flatMap() – What It Does
flatMap() is a combination of:
👉 map() + flat(1)
It maps each element to a new value (like map()), and then flattens the result by one level.
🧪 Example You Gave:
const arr = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]
✅ Step-by-Step:
1. Mapping
You're mapping each x to an array:
x => [x, x * 2]
So this becomes:
[
  [1, 2],  // for x = 1
  [2, 4],  // for x = 2
  [3, 6]   // for x = 3
]
Result after .map() alone:
[[1, 2], [2, 4], [3, 6]]
2. Flattening One Level
flatMap() now flattens it one level deep, just like flat(1)[1, 2, 2, 4, 3, 6]
✅ Final Output:
[1, 2, 2, 4, 3, 6]
✅ 11. fill()
🔸 Use: Fills all or part of an array with a static value.
const arr = new Array(3).fill(0);
console.log(arr); // [0, 0, 0]
✅ 12. copyWithin()
🔸 Use: Copies part of the array within itself.
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // copy from index 3 to index 0
console.log(arr); // [4, 5, 3, 4, 5]
🔸 What is copyWithin()?
Array.prototype.copyWithin() copies a portion of the array to another location in the same array, overwriting the existing values — without changing the array length.
✅ Syntax:
arr.copyWithin(target, start, end)
target → index where to copy to
start → index to start copying from
end (optional) → index to stop (not inclusive)
🧪 Your Example:
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr); // [4, 5, 3, 4, 5]
✅ Let's Break It Down:
arr = [1, 2, 3, 4, 5]
copyWithin(0, 3) means:
Copy elements starting at index 3 (4)
Until the end of array (since end is not given)
Paste them starting at index 0
🔹 Step-by-step:
Slice from index 3 to end:
→ [4, 5]
Paste that starting at index 0:
→ [4, 5, 3, 4, 5]
✅ Final Array:
[4, 5, 3, 4, 5]
1 and 2 are replaced by 4 and 5
3, 4, 5 remain unchanged
🔁13. lastIndexOf()
The lastIndexOf() method returns the last index at which a given element can be found in the array.
It searches from right to left (i.e., end to beginning).
✅ Syntax:
array.lastIndexOf(searchElement, fromIndex)
🔸 Parameters:
searchElement – the value to search for.
fromIndex (optional) – the index to start searching backwards from.
Defaults to array.length - 1.
✅ Example 1 – Basic Use:
const fruits = ["apple", "banana", "cherry", "banana", "apple"];
const index = fruits.lastIndexOf("banana");
console.log(index); // 3
It finds the last occurrence of "banana" (index 3), not the first.
✅ Example 2 – With fromIndex
const items = [1, 2, 3, 2, 4, 2];
// Start searching backwards from index 3
console.log(items.lastIndexOf(2, 3)); // 3
// Start searching backwards from index 2
console.log(items.lastIndexOf(2, 2)); // 1
fromIndex helps narrow the search range.
*/

/* Spread Operators in JS:
The spread operator (...) is used to "spread out" the elements of iterables (like arrays, strings, or objects) into individual elements.
✅ Syntax:
...iterable
It can be used in:
Arrays
Objects
Function calls
✅ 1. Spread in Arrays
🔹 A. Copying an Array (Shallow Copy)
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]
Changes to copy won't affect original (unless they contain objects inside – shallow copy only).
🔹 B. Merging Arrays
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]
🔹 C. Inserting Elements in Between
const nums = [1, ...[100, 200], 2];
console.log(nums); // [1, 100, 200, 2]
🔹 D. Using with Strings (string → array)
const str = "hello";
const chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']
✅ 2. Spread in Objects (ES2018+)
🔹 A. Copying Objects
const user = { name: "Shaily", age: 25 };
const copy = { ...user };
console.log(copy); // { name: "Shaily", age: 25 }
🔹 B. Merging Objects
const user = { name: "Shaily" };
const info = { age: 25, city: "Delhi" };
const combined = { ...user, ...info };
console.log(combined); // { name: "Shaily", age: 25, city: "Delhi" }
🔹 C. Overwriting Properties
const user = { name: "Shaily", age: 25 };
const updated = { ...user, age: 30 };
console.log(updated); // { name: "Shaily", age: 30 }
If duplicate keys exist, the last one wins.
✅ 3. Spread in Function Calls
🔹 A. Passing Array Elements as Arguments
function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6
Equivalent to writing: sum(1, 2, 3)
*/

/* Spread vs Rest in JS:
🟢 SPREAD OPERATOR (...) – Expands/Unpacks
📌 Purpose:
Used to spread (unpack) elements of an iterable (like arrays, objects, or strings) into individual elements.
🔸 1. Spread in Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // spread arr1 into arr2
console.log(arr2); // [1, 2, 3, 4, 5]
🔸 2. Spread in Objects
const obj1 = { name: "Shaily", age: 25 };
const obj2 = { ...obj1, city: "Delhi" };
console.log(obj2); // { name: "Shaily", age: 25, city: "Delhi" }
🔸 3. Spread in Function Calls
const numbers = [5, 10, 15];
function add(a, b, c) {
  return a + b + c;
}
console.log(add(...numbers)); // 30 → spread array into arguments
🔸 4. Cloning Arrays/Objects
const original = [1, 2, 3];
const copy = [...original];
const user = { name: "Shaily" };
const clone = { ...user };
🔴 REST PARAMETERS (...) – Collects/Groups
📌 Purpose:
Used in function definitions to gather multiple arguments into a single array.
🔸 1. Rest in Functions
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10 → all args collected in nums
🔸 2. Rest with Named Parameters
function greet(first, ...others) {
  console.log(first);   // "Hello"
  console.log(others);  // ["World", "!"]
}
greet("Hello", "World", "!");
🔸 3. Rest in Destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);      // 1
console.log(others); // { b: 2, c: 3 }
🔁 SPREAD vs REST
Feature	Spread (...)	Rest (...)
Purpose	Expands items out	Collects items in
Use in	Arrays, objects, function calls	Function definitions, destructuring
Returns	Individual values	An array
*/

/* ES6 Features:
✅ 1. let and const
🔹 let – block-scoped variable (can be updated)
let age = 25;
age = 26;
🔹 const – block-scoped constant (cannot be reassigned)
const name = "Shaily";
// name = "Priya"; ❌ Error
Difference from var:
var is function-scoped and hoisted.
let and const are block-scoped and not hoisted in the same way.
✅ 2. Arrow Functions (=>)
Shorter, cleaner way to write functions.
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
Note:
Arrow functions do not have their own this.
Great for callbacks and array methods.
✅ 3. Template Literals (Backticks)
Allows multiline strings and variable interpolation.
const name = "Shaily";
const message = `Hello, ${name}!`;
console.log(message); // Hello, Shaily!
✅ 4. Destructuring (Objects & Arrays)
Array Destructuring:
const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b); // 1 2
Object Destructuring:
const user = { name: "Shaily", age: 25 };
const { name, age } = user;
✅ 5. Default Parameters
Set default values for function arguments.
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
✅ 6. Rest and Spread Operators (...)
Spread:
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5]; // [1, 2, 3, 4, 5]
Rest:
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
✅ 7. Enhanced Object Literals
Shorthand syntax for defining objects.
const name = "Shaily";
const user = {
  name,
  greet() {
    console.log("Hello");
  }
};
✅ 8. Classes and Inheritance
Class Syntax:
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
Inheritance:
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
✅ 9. Modules (import / export)
Split code into reusable files.
// add.js
export function add(a, b) {
  return a + b;
}
// main.js
import { add } from './add.js';
✅ 10. Promises
Handle asynchronous operations in a clean way.
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
};
fetchData().then(data => console.log(data));
✅ 11. for...of loop
Iterates over iterable items like arrays, strings, etc.
for (const item of ["a", "b", "c"]) {
  console.log(item);
}
⚠️ for...in is for keys of objects/arrays, while for...of is for values.
✅ 12. Map and Set
Map – key-value pairs, any type of key
const map = new Map();
map.set("name", "Shaily");
console.log(map.get("name")); // "Shaily"
Set – unique values only
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set { 1, 2, 3 }
✅ 13. Symbol (Primitive Type)
Unique identifiers for object keys.
const id = Symbol("id");
const user = { [id]: 123 };
✅ 14. Object.assign()
Copies properties from one or more objects to a new one.
const a = { name: "Shaily" };
const b = { age: 25 };
const combined = Object.assign({}, a, b);
✅ 15. Object.entries() / Object.keys() / Object.values()
const user = { name: "Shaily", age: 25 };
console.log(Object.keys(user));    // ["name", "age"]
console.log(Object.values(user));  // ["Shaily", 25]
console.log(Object.entries(user)); // [["name", "Shaily"], ["age", 25]]
*/

/* Set and Map in JS:
🔷 1. Set – Collection of Unique Values
✅ Key Features:
Only stores unique values (no duplicates)
Order is preserved (insertion order)
Can store any type (primitive or object)
🔸 Creating a Set:
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate — ignored
console.log(set); // Set {1, 2}
You can also create from an array:
const nums = [1, 2, 2, 3];
const uniqueNums = new Set(nums);
console.log(uniqueNums); // Set {1, 2, 3}
🔸 Useful Methods:
Method	Description
add(value)	Adds a new value
delete(value)	Removes a value
has(value)	Returns true if value exists
clear()	Removes all values
size	Returns number of items
🔸 Example:
const colors = new Set(["red", "blue"]);
colors.add("green");    // add
colors.delete("red");   // delete
console.log(colors.has("blue")); // true
console.log(colors.size);        // 2
colors.forEach(c => console.log(c)); // iterate
🔸 Convert to Array:
const arr = Array.from(colors); // or [...colors]
🔷 2. Map – Key-Value Pairs with Any Type of Key
✅ Key Features:
Stores key-value pairs
Keys can be any data type (unlike object keys which are strings or symbols)
Maintains insertion order
🔸 Creating a Map:
const map = new Map();
map.set("name", "Shaily");
map.set(1, "one");
map.set(true, "yes");
console.log(map);
🔸 Useful Methods:
Method	Description
set(key, value)	Adds or updates an entry
get(key)	Returns the value for a key
has(key)	Returns true if key exists
delete(key)	Removes the key-value pair
clear()	Removes all entries
size	Returns number of entries
🔸 Example:
const map = new Map();
map.set("fruit", "apple");
map.set(1, "one");
map.set({ id: 123 }, "object value");
console.log(map.get("fruit")); // "apple"
console.log(map.has(1));       // true
console.log(map.size);         // 3
// Looping
for (const [key, value] of map) {
  console.log(key, value);
}
🔸 Convert Map to Array:
const arr = Array.from(map); // [[key1, value1], [key2, value2]]
*/

/* Classes in JS:
A class is a blueprint for creating objects with shared properties and methods.
🧱 Basic Syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}
const p1 = new Person("Shaily", 25);
p1.greet(); // Hi, I'm Shaily and I'm 25 years old.
🧩 Components of a Class
🔹 constructor()
Special method called when you create a new instance with new.
Used to initialize properties.
🔹 Instance Methods
Defined inside the class (like greet() above).
Shared across all instances (on the prototype).
🔹 Creating Instances
const person1 = new Person("Priya", 22);
🧬 Inheritance with extends
Classes can inherit from other classes using extends.
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
const dog = new Dog("Tommy");
dog.speak(); // Tommy barks
🪄 The super Keyword
super() is used to call the constructor or methods of the parent class.
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls Animal's constructor
    this.breed = breed;
  }
}
🟢 Getters and Setters
Encapsulate property access with special methods.
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get area() {
    return Math.PI * this._radius ** 2;
  }
  set radius(r) {
    this._radius = r;
  }
}
const c = new Circle(10);
console.log(c.area); // 314.159...
c.radius = 5;
console.log(c.area); // 78.539...
🔐 Public vs Private Fields (ES2022+)
#privateField makes a property truly private (only accessible inside the class).
class Counter {
  #count = 0;
  increment() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increment(); // 1
// counter.#count; ❌ SyntaxError
🧠 Why Use Classes?
Cleaner syntax than prototype-based OOP
Easy to read and maintain
Inheritance made simpler
Widely used in frameworks like React (class components)
*/

/* Modules (import, export):
📦 What are JavaScript Modules?
Modules let you split your code into separate files and share variables, functions, or classes between them using export and import.
✅ Think of modules as self-contained files that expose only what’s needed.
🔹 1. export – Sharing from a file
You can export anything you want to share with other files: variables, functions, classes, etc.
🔸 Named Export
You can export multiple items by name.
// utils.js
export const PI = 3.14;
export function add(a, b) {
  return a + b;
}
🔸 Default Export
Only one default export per file. Use when exporting a main function/class/object.
// calculator.js
export default function subtract(a, b) {
  return a - b;
}
🔹 2. import – Bringing into another file
🔸 Import Named Exports
// main.js
import { PI, add } from './utils.js';
console.log(PI); // 3.14
console.log(add(2, 3)); // 5
You can also rename while importing:
import { add as sum } from './utils.js';
console.log(sum(1, 2)); // 3
🔸 Import Default Export
import subtract from './calculator.js';
console.log(subtract(10, 4)); // 6
🔸 Import Everything
import * as math from './utils.js';
console.log(math.PI);       // 3.14
console.log(math.add(5, 5)); // 10
*/

// A race condition happens when two or more asynchronous operations try to access or modify shared data at the same time, and the final outcome depends on the order in which they complete. 

