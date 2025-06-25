// Function Composition
function add(a, b) {
    return a + b;
}

function square(val) {
    return val * val;
}
const addResult = add(2, 3);
console.log(square(addResult));
// if we have to add and then find square of that number, but we want a func whic performs the same task for us.

function addTwoandSquare(a, b) {
    return square(add(a, b));
}
console.log(addTwoandSquare(2, 3));
// this is done using creating a func and then calling it, but what if we have 100s of functions like this, then we create generic compose function:
function composeTwoFunction(fn1, fn2) {
    return function(a, b) {
        return fn2(fn1(a, b));
    }
}
// this is old way of writing, below written in new way: c2f function we have, which takes 2 parameters: fn1 and fn 2, which will return a func which takes 2 parameters, which returns f2(fn1(a, b)).

const c2f = (fn1, f2) => (a, b) => f2(fn1(a, b));

// const task = composeTwoFunction(add, square);
const task = c2f(add, square);
console.log(task(2, 3));

// now we have to compose unlimited functions: then use compose(), send unlimited arguments (...fns), return a func which passes unlimited values (...values), ab fns pr reverse iterate krna h(right to left), (jaise upar pahle fn2 then fn1 tha vaise hi), we have reduceRight jo right se shuru krta h, isme functions aate jayenge like a and b, then we have to do b(a), and then pass values.

function compose(...fns) {
    return function(...values) {
        return fns.reduceRight((a, b) => b(a), values)
    }
}
const composeAll = (...fns) => (...val) => fns.reduce((a, b) => b(a), val);
// acc to modern js

/* 🔗 What is Function Composition in JavaScript?
Function Composition is a technique in functional programming where you combine two or more functions to produce a new function.
Instead of calling functions step by step, composition lets you write them in a way where the output of one function becomes the input of the next — creating a clean, readable pipeline of transformations.

✅ Example
Let’s say you have two functions:
const add5 = x => x + 5;
const double = x => x * 2;
Instead of doing:
let result = double(add5(10)); // 30
You can compose them:
const composed = x => double(add5(x));
console.log(composed(10)); // 30

🧠 Function Composition = f(g(x))
Mathematically:
If f(x) = x * 2 and g(x) = x + 5,
Then f(g(x)) is f(g(x)) = (x + 5) * 2

🔄 Generic compose Function
You can build a reusable compose function:
const compose = (f, g) => x => f(g(x));
// Usage
const add5 = x => x + 5;
const double = x => x * 2;
const addThenDouble = compose(double, add5); // double(add5(x))
console.log(addThenDouble(10)); // 30
🔁 Compose Multiple Functions (Right to Left)
const compose = (...fns) => input =>
  fns.reduceRight((acc, fn) => fn(acc), input);

// Usage
const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`;
const cleanHTML = compose(wrapInDiv, toLower, trim);
console.log(cleanHTML("   Hello WORLD   ")); 
// <div>hello world</div>

➕ Compare with pipe (Left to Right)
const pipe = (...fns) => input =>
  fns.reduce((acc, fn) => fn(acc), input);

const transform = pipe(trim, toLower, wrapInDiv);
console.log(transform("   Hello WORLD   ")); 
// <div>hello world</div>

✅ Benefits of Function Composition
Cleaner and more declarative code
Encourages modular, reusable functions
Easy to build data processing pipelines
Works great with currying

✅ Real Example
const trim = str => str.trim();
const toUpper = str => str.toUpperCase();
const addExcl = str => str + "!";
const compose = (...fns) => input =>
  fns.reduceRight((acc, fn) => fn(acc), input);
const shout = compose(addExcl, toUpper, trim);
console.log(shout("   hello   ")); 
// Output: "HELLO!"
Execution order:
trim(" hello ") → "hello"
toUpper("hello") → "HELLO"
addExcl("HELLO") → "HELLO!"

💡 Why reduceRight?
Because composition in math is f(g(h(x))) — the last function passed is called first.
If you wanted left-to-right order (like pipe), you'd use reduce instead of reduceRight.
*/

// Let's build an example where the composed functions take two arguments. Since compose typically works with unary (1-arg) functions, we need to adapt it slightly to handle functions with more arguments.
function multiply(args) {
    return args[0] * args[1];
}
function square(val) {
    return val * val;
}
const composeA = (...fns) => (...val) => fns.reduce((a, b) => b(a), val);
const task2 = composeA(multiply, square);
console.log(task2(3, 2));

// multiply(args): This function expects a single parameter called args, which is assumed to be an array. It returns the product of the first two elements.
// multiply([3, 2]) ➝ 3 * 2 ➝ 6
// So args is an array: it's expecting something like [3, 2], not individual values.


