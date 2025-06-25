// Pure Functions, Immutability/side effects
// 1) always returns the same output for a given input, 2) no side-effects
let namesay = 'Shiv';
function salute() {
    return `Hello ${namesay}`
}

salute();
// prob is ki jitni baar namesay ki value change hogi utni baar alag output ayega, function has to go outside itself,grab the value into the string literal, and agar name hota hi nahi toh sirf Hello deta, it always depends on namesay(it could be blank, undefined, different names), but if we pass the variable namesay to func, then everything is solved, it always returns what it gets.

/* 🧼 What Are Pure Functions in JavaScript?
A pure function is a function that follows these two key rules:
✅ 1. Same Input → Same Output
Given the same arguments, a pure function always returns the same result.
function add(a, b) {
  return a + b;
}
add(2, 3); // always 5
✅ 2. No Side Effects
A pure function does not modify:
Global variables
Parameters
DOM
Files, DB, API
Console (console.log)
Anything outside itself
// ❌ Not pure
let counter = 0;
function increment() {
  return ++counter;
}
// ✅ Pure
function incrementPure(n) {
  return n + 1;
}
🧪 Example: Pure vs Impure
✅ Pure
function square(n) {
  return n * n;
}
❌ Impure
let multiplier = 2;
function multiply(n) {
  return n * multiplier; // depends on external value
}
💡 Why Use Pure Functions?
Benefit	                   Description
📦 Predictable	     Easier to understand and test
🧪 Testable	         No hidden dependencies
🧹 No Side Effects	 Safe to use anywhere
🔁 Reusable	         Can be used in different contexts
⚙️ Composable	     Combine with other pure functions

⚠️ Common Impure Patterns
Impure Code	                    Why?
console.log() inside function	Side effect
Math.random() / Date.now()	    Not deterministic
DOM manipulation	            Affects outside world
Modifying passed object/array	Mutation = side effect

🔄 Pure Function Example (Array)
const numbers = [1, 2, 3];
// ✅ Pure
const doubled = numbers.map(n => n * 2);
// ❌ Impure (mutates array)
numbers.forEach((val, i, arr) => arr[i] = val * 2);
✅ Summary
Feature	Pure Function
Same output for same input	✅
No side effects	✅
Easy to test & reuse	✅
Safe in concurrency	✅


🔒 What is Immutability?
✅ Definition:
Immutability means that data cannot be changed once created.
Instead of modifying an object/array, you create and return a new copy.
📦 Example: Immutable vs Mutable
❌ Mutable (changes original):
let arr = [1, 2, 3];
arr.push(4);  // modifies `arr`
console.log(arr); // [1, 2, 3, 4]
✅ Immutable (returns a new copy):
let arr = [1, 2, 3];
let newArr = [...arr, 4];  // does not modify `arr`
console.log(newArr); // [1, 2, 3, 4]
🚫 Why Mutation Is Bad in FP:
Makes debugging hard
Breaks pure functions
Introduces unpredictable state in apps (especially UI, Redux, etc.)
💥 What are Side Effects?
✅ Definition:
A side effect is any change outside the function’s local scope.
That includes:
Modifying global or outer variables
DOM manipulation
API calls / DB writes
Console logging
Time-dependent logic (Date.now(), Math.random())

🔍 Example: With vs Without Side Effects
❌ With Side Effect:
let count = 0;
function increment() {
  count++;  // modifies external variable
}
✅ Pure (No Side Effect):
function incrementPure(n) {
  return n + 1;
}    
🧠 Summary
Concept	   Meaning	  Example (Bad)    Example (Good)
Immutability	Don't change original data	arr.push(1)	[...arr, 1]
Side Effects	Don't change outside state/environment	console.log(), DOM update	Return values only, no mutations
*/

/* Let’s look at immutability and side effects in a small, real-world React example — a simple counter.
🧪 Example: Counter App (React)
We’ll show both:
✅ Immutability — how we update state correctly
✅ Side effects — using useEffect safely

✅ Example Code
import React, { useState, useEffect } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  // ✅ Immutability: use setCount with new value, not modifying directly
  const increment = () => {
    setCount(prevCount => prevCount + 1); // returns a new state
  };

  // ✅ Side Effect: This runs only when count changes
  useEffect(() => {
    document.title = `Count: ${count}`; // 👈 this is a side effect
  }, [count]); // 👈 dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>➕ Increment</button>
    </div>
  );
}

export default Counter;
🧠 What's Happening?
✅ Immutability:
We never modify count directly.
setCount(prev => prev + 1) returns a new state, preserving immutability.
✅ Side Effects:
useEffect() is used to update the document title — a side effect, but controlled.
React ensures it's done after rendering, avoiding unexpected behavior.

❌ What You Should Not Do
count = count + 1; // ❌ This is a direct mutation, React won't track this
Or:
document.title = "hello"; // ❌ Side effect without useEffect
*/