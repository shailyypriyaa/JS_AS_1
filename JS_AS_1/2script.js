// Execution Context and Call Stack 
var n = 2;
function square (num) {
    var ans = num * num;
    return ans;
}
var sqaure2 = square(n);
var square4 = square(4);
/*
In JavaScript, undefined is a primitive value automatically assigned to variables that have been declared but not yet assigned a value. It also represents the absence of a value in other contexts.

Common cases where you get undefined:
Uninitialized variable:
let a;
console.log(a); // undefined
Function with no return statement:
function greet() {
  console.log("Hello");
}

let result = greet(); // prints "Hello"
console.log(result);  // undefined
Accessing a non-existent object property:
const person = { name: "Alice" };
console.log(person.age); // undefined
Array element that doesn't exist:
let arr = [1, 2];
console.log(arr[5]); // undefined

undefined vs null
undefined: value not assigned
null: explicitly set to no value
let a;         // undefined
let b = null;  // null
Both are falsy values:
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false
*/

// when you run this whole code, a global execution context is created, it has two components : memory and code, it is created in two phases: memory creation phase and code execution phase.
// as soon as js encounters the first line, it allocates space for "n", it stores a value called as undefined, then for function "square", in case of function it stores the whole code inside memory space, all of this happens in 1st phase
// now in 2nd phase, as soon as first line is encountered, it places the value 2 inside n, now function part is ignored as there's nothing much to do, then it goes to square2, here function is invoked so a new execution context is created which is shown inside code section.
// intially num and ans are given undefined, now in 2nd phase, value of n(2) is passed to num, (num is parameter of the function, and n is arguement), then ans is calculated and value is stored in ans(4), now return keyword tells the func that you're done with your work now, and now the control back to that point from where you were called, now code execution phase of function execution context gives the value of ans back to square2(from where it was called), as soon as we return the value, the whole function execution context is deleted and control moves to next line.
// again a function execution context is created as again function is invoked, next num and ans are given undefined then 4 and 16 then ans is returned, which is then taken back to square4, now again this FEC is deleted.
// and now whole code is completed and all done with execution , so now whole GEC is deleted.

 


//| memory              |  code                           |
//| n : undefined (2)   |  memory              code       |
//| square : {.....}    |  num: undefined (2)             |
//| square2 : undefined |  ans: undefined (4)  return ans |
//| square4 : undefined |  memory              code       |
//|                     |  num: undefined (4)             |
//                         ans: undefined (16)

// it is very hectic for js engine to manage but it does it very nicely, using stack, it has its own call stack, call stack is like a stack, and every time at the bottom, we have GEC, so basically the whole diagram that we have above is inserted inside GEC, then whenever we invoke a func, lets call it E1, then E1 is pushed after GEC, after this call is done, E1 is poped out of stack, then control comes back to GEC, then again func is invoked, so E2 is pushed into stack, then after it is done, E2 is poped out and then control comes back to GEC, after whole code is done, call stack becomes empty. Call stack is only made for managing all these execution context.

// Call stack manitains the order of execution of execution contexts, other names for call stack : execution context stack, program stack, control stack, runtime stack, machine stack.

/*
The call stack in JavaScript is a data structure that keeps track of function calls — like a to-do list of what the program is doing. It follows the LIFO principle (Last In, First Out): the last function added is the first one to be completed and removed.
Whenever a function is called, it's pushed onto the stack. When it finishes, it's popped off the stack.
function greet() {
  console.log("Hello");
}
function sayHi() {
  greet();
  console.log("Hi");
}
sayHi();
Call Stack Step-by-Step:
sayHi() is called → pushed onto the stack
Inside sayHi(), greet() is called → pushed onto the stack
greet() executes console.log("Hello") → done → popped off
Back to sayHi(), it executes console.log("Hi") → done → popped off

Stack Overflow Example:
If the call stack gets too deep, JavaScript will throw a RangeError.
function recurse() {
  recurse(); // calls itself forever
}
recurse(); // Maximum call stack size exceeded
*/