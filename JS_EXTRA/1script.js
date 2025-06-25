// Polyfill
/*
✅ What is a Polyfill?
A polyfill is a piece of code (usually written in JavaScript) that adds a feature to older browsers that don’t support it yet. It’s like a backup version of a modern feature.
Simple Definition: A polyfill is a custom code that mimics the behavior of a new feature, so your code still works in older environments.
🧒 Analogy: Imagine a child doesn't know how to ride a bicycle (modern feature), so you give them training wheels (polyfill). They get the same experience, just with extra help!

✅ Example: Array.prototype.map Polyfill
Modern JS has .map():
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

But old browsers might not support .map(). 
So we write a polyfill:
if (!Array.prototype.map) {
  Array.prototype.map = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}
Now even in an old browser, you can do:
[1, 2, 3].map(n => n * 2);  // [2, 4, 6]

✅ Another Super Easy Example: startsWith Polyfill
Modern JS:
"hello".startsWith("he"); // true
Polyfill:
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(sub) {
    return this.indexOf(sub) === 0;
  };
}
Now you can use "hello".startsWith("he") even in old browsers.
*/
/*
In JavaScript, arrays are special types of objects, and they inherit methods from Array.prototype. 
Array.prototype.calculate = function(logic) {
    some code
};
You're telling JavaScript:
“Add a new method called calculate() to the list of things that all arrays can do.”

In this context, this refers to the array on which the calculate() method is called.
const radius = [1, 2, 3];
radius.calculate(area);  // <--- here, `this` inside `calculate()` refers to `radius`
So inside your method:
this.length → means the length of the radius array
this[i] → means the i-th element of the radius array
*/
