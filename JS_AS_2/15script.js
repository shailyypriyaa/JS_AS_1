// DOM Manipulation, Functional Programming
/*
DOM (Document Object Model) manipulation in JavaScript refers to interacting with and changing the structure, style, and content of HTML documents using JavaScript. It’s a fundamental part of creating dynamic, interactive web pages.
🧠 What is the DOM?
The DOM is a tree-like structure where each HTML element is an object (a node), and JavaScript can access and manipulate it.
Example:
<body>
  <h1 id="title">Hello World</h1>
  <button onclick="changeText()">Click me</button>
</body>
🔧 DOM Manipulation Methods
1. Selecting Elements
document.getElementById("title"); // Select by ID
document.getElementsByClassName("className"); // Returns HTMLCollection
document.getElementsByTagName("div"); // All <div> elements
document.querySelector(".my-class"); // First element that matches
document.querySelectorAll("p"); // NodeList of all <p> tags
2. Changing Content
document.getElementById("title").textContent = "New Title";
document.getElementById("title").innerHTML = "<i>Italic Title</i>";
3. Changing Styles
document.getElementById("title").style.color = "red";
document.querySelector("h1").style.fontSize = "40px";
4. Changing Attributes
document.querySelector("img").setAttribute("src", "newImage.jpg");
document.querySelector("a").removeAttribute("target");
5. Creating and Adding Elements
const newDiv = document.createElement("div");
newDiv.textContent = "I am a new div!";
document.body.appendChild(newDiv); // Add to end of <body>
6. Removing Elements
const element = document.getElementById("title");
element.remove();
7. Event Handling
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});
✅ Real Example
<h2 id="greeting">Hi!</h2>
<button onclick="changeGreeting()">Change</button>

<script>
  function changeGreeting() {
    const element = document.getElementById("greeting");
    element.textContent = "Hello, DOM!";
    element.style.color = "green";
  }
</script>
🚀 Bonus: Best Practices
Use querySelector for more flexible selections.
Cache selectors in variables if using them multiple times.
Avoid too much direct DOM manipulation; prefer frameworks (like React) for complex apps.
*/

/* 🧠 What is Functional Programming (FP) in JavaScript?
Functional Programming is a programming paradigm where functions are treated as first-class citizens and we emphasize:
Pure functions
Immutability
Function composition
Avoiding side effects
Higher-order functions

🔑 Core Concepts of FP in JavaScript
1. ✅ First-Class Functions
In JavaScript, functions can be:
Assigned to variables
Passed as arguments
Returned from other functions
const greet = () => 'Hello';
const callFunction = fn => fn();
console.log(callFunction(greet)); // Hello
2. ✅ Pure Functions
Always return the same output for the same input and have no side effects.
const add = (a, b) => a + b; // Pure
3. ✅ Immutability
Do not mutate (change) data. Instead, return new copies.
const arr = [1, 2, 3];
// Don't mutate:
const newArr = [...arr, 4]; // ✅ returns a new array
4. ✅ Higher-Order Functions
A function that takes one or more functions as arguments, or returns a function.
const withLogging = fn => (...args) => {
  console.log("Calling function...");
  return fn(...args);
};
const multiply = (a, b) => a * b;
const loggedMultiply = withLogging(multiply);
console.log(loggedMultiply(2, 3)); // Logs and returns 6
5. ✅ Function Composition
Combine simple functions into more complex ones.
const double = x => x * 2;
const square = x => x * x;
const compose = (...fns) => input =>
  fns.reduceRight((acc, fn) => fn(acc), input);
const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3)); // (3 * 2) ^ 2 = 36
6. ✅ Avoid Side Effects
Side effects = any change outside the function (DOM, console, API, mutation, etc.).
// ❌ impure
let count = 0;
const increase = () => count++;
// ✅ pure
const increasePure = count => count + 1;
📦 Built-in FP Tools in JavaScript
JavaScript has many array methods that support FP:
Method	    Use
map()	    Transform each item
filter()	Keep only items that match condition
reduce()	Combine items into a single value
forEach()	Iterate (side effects)

🧪 Example: Functional To-Do Filter
const todos = [
  { task: "Code", done: true },
  { task: "Sleep", done: false },
];
// Pure function to get unfinished tasks
const getUnfinished = todos => todos.filter(t => !t.done);
console.log(getUnfinished(todos));
*/