// Function Currying
let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);
// bind will create a copy of multiply and pass x as 2, and uska copy multiplyByTwo ko de dega and jb multiplyByTwo ko call krnge na tb y = 5 denge.

// agar hum isme "let multiplyByTwo = multiply.bind(this, 2, 3); multiplyByTwo(5);" 3 pass krte hai, toh 5 ignore ho jayega and res = 2* 3 = 6.
// agar hum "let multiplyByTwo = multiply.bind();multiplyByTwo(2, 3);" aise kre toh bhi 6 ayega, but we intentionally pass 2 in the bind method and curry our method, we make a copy of multiply method and make more methods out of it by presetting some arguments inside it, this was function currying using bind method.

// using closures:
let multiplyy = function(x) {
    return function(y) {
        console.log(x * y);
    }
}

let multiplyByTwoo = multiplyy(2);
multiplyByTwo(5);  //10
// multiply ko call krnge with 2 toh x me 2 chala gya, then it returns the whole function with x=2, then multiplyByTwo me vo poora func aa jayega, then multiplyByTwo ko jb call krnge toh y me 5 chala jayega and res = 10.

/* 🔁 Function Currying in JavaScript
Currying is a functional programming technique in JavaScript where a function is transformed into a sequence of functions, each taking one argument at a time.
💡 Why Use Currying?
Reuse functions with fixed arguments
Improve readability and modularity
Create more specific functions from general ones

✅ Basic Example
Instead of this:
function add(a, b) {
  return a + b;
}
add(2, 3); // 5
You curry it like this:
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}
curriedAdd(2)(3); // 5
Or using arrow functions:
const curriedAdd = a => b => a + b;
console.log(curriedAdd(2)(3)); // 5
🧠 Real-World Example
function greet(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}
const sayHello = greet("Hello");
console.log(sayHello("Shaily")); // Hello, Shaily!
🧰 Generic Currying Function
Here's a curry function that works on any function:
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function(...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

// Example
function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // 24
🧪 Try It Yourself
Can you convert this function to a curried version?
function volume(l, w, h) {
  return l * w * h;
}
function curriedVolume(l) {
  return function(w) {
    return function(h) {
      return l * w * h;
    };
  };
}

// OR using arrow functions
const curriedVolumeArrow = l => w => h => l * w * h;

// Usage
console.log(curriedVolume(2)(3)(4)); // 24
console.log(curriedVolumeArrow(2)(3)(4)); // 24
✅ Explanation:
You're turning a function like:
volume(l, w, h) into this: volume(l)(w)(h)
Each function returns another function that takes the next argument, until all are provided.

🎯 Why is Currying Used?
Currying is mainly used to:
✅ 1. Create Reusable Functions
You can "preset" some arguments to create specialized versions of a function.
const multiply = a => b => a * b;
const double = multiply(2);
console.log(double(5)); // 10
Here, double is a new function that always multiplies by 2.

✅ 2. Improve Function Composition
Currying makes it easier to build complex logic by combining simple functions.
const add = a => b => a + b;
const increment = add(1);
const addFive = add(5);

console.log(increment(10)); // 11
console.log(addFive(10));   // 15
✅ 3. Delays Execution Until All Arguments Are Known
Instead of calling a function right away, you can wait until all arguments are available:
const logger = level => message => console.log(`[${level}]: ${message}`);
const errorLogger = logger("ERROR");

errorLogger("Something went wrong!"); // [ERROR]: Something went wrong!
✅ 4. Makes Code More Declarative and Clean
Currying avoids repeating the same code and makes logic flow more readable.
Instead of:
applyDiscount(cart, "GOLD");
applyDiscount(cart2, "GOLD");     
With currying:
const applyGoldDiscount = applyDiscount("GOLD");
applyGoldDiscount(cart);
applyGoldDiscount(cart2);

🧠 TL;DR
Currying = function with multiple args → chain of functions, one arg at a time.
It helps by:
Making code modular and reusable
Delaying execution
Improving readability
Working well with function composition
*/

/* 🔗 Function Chaining
✅ Definition:
Function chaining is a pattern where methods return the object itself, allowing multiple calls to be chained in a single expression.

📦 Example:
js
Copy code
class Calculator {
  constructor(val = 0) {
    this.value = val;
  }

  add(n) {
    this.value += n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  subtract(n) {
    this.value -= n;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const result = new Calculator(5).add(3).multiply(2).subtract(1).getResult();
console.log(result); // 15
🎯 Use Case:
Used in libraries like jQuery, Lodash

Improves code readability when applying many operations

🆚 Difference Table
Feature	Currying	Chaining
Purpose	Transform function arguments	Chain method calls on the same object
Style	Nested functions	Dot-notation method chaining
Execution	Returns a function at each step	Returns the same object (this)
Use Case	Partial application, functional comp.	Fluent APIs, data transformation
Example Call	f(1)(2)(3)	obj.method1().method2().method3()

✅ Quick Analogy:
Currying is like nesting:

You open one box, and it gives you another box, until you reach the result.

Chaining is like a conveyor belt:

Each step adds something and passes the object to the next step.
*/
