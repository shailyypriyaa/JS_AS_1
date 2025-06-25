// Closures in JS
function x()
{
    var a = 7;
    function y()
    {
        console.log(a);
    }
    y();
}
x();
// function with its lexical scope forms a closure, 
// Closure (x)
// a : 7 
// A closure is the combination of a function bundled together with references to its surrounding state(LE).

function x()
{
    var a = function y(){
        console.log(a);
    };
    y();
}
x();
// we can even assign functions to a variable.

function x()
{
    var a = 7;
    
    y();
}
x(function y(){
        console.log(a);
    });
// we can paas a whole function into this function as a parameter.

function x()
{
    var a = 7;
    function y()
    {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z();   //7
// we can even return functions, but what does it actually returns, so lets create z and find out what it returns, it returns the whole function y, now x(); call is destroyed completely, func y is no longer inside func x, now how func y will behave in other lexical scope, for eg we call 
// z() at some point of time later, what will happen, what will be inside a, it still prints 7, so here comes closure into picture, functions when they are returned, they still maintains and remembers their lexical scope, so whenever a func is returned, not only the code is returned, its whole closure is returned and it was put inside z.

function x()
{
    var a = 7;
    return function y()
    {
        console.log(a);
    }
}
var z = x();
console.log(z);
z(); 
// we can also direct return the func, its same

function x()
{
    var a = 7;
    function y()
    {
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();
console.log(z);
z(); 
// before returning, we did a = 100, so now what will be the value of a when we call z(), it will be 100, because whenever a function is returned, it holds the memory location(reference) of a and not the value 7, so it prints 100.

function z() {
    var b = 9;
    function x(){
        var a = 7;
        function y(){
            console.log(a, b);
        }
        y();
    }
    x();
}
z();
// we have put the whole code in func z() and trying to access variables of parent's scope and its parent's scope too,
// Closure (x)
// a : 7
// Closure (z)
// b : 9
// so it formed closures for both, so if I call y() somewhere else, it will retain all these things.

// Uses of closures: Module design pattern, currying, functions like once, memoize, maintaining state in async world, setTimeouts, Iterators. 

/*
Definition:
A closure is created when a function is defined inside another function, and it accesses variables from the outer function’s scope.

function outer() {
  let x = 10;
  function inner() {
    console.log(x); // inner function uses variable from outer
  }
  return inner;
}
const closureFunc = outer(); // outer finishes, but...
closureFunc(); // still prints 10
Here, inner() still remembers x even though outer() has already finished.
That's a closure.

Why closures are powerful:
Data hiding / encapsulation
Maintaining state between function calls
Creating private variables
*/

/*
Real world example
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

Step-by-step Execution:
1. createCounter() is called:
const counter = createCounter();
A new execution context is created for createCounter.
A local variable count is declared and initialized to 0.
An inner function is defined (but not run yet).
This inner function closes over count and is returned.
Closure formed here: the inner function remembers the count variable even after createCounter() finishes.
Now counter holds the inner function:
function () {
  count++;
  console.log(count);
}
But it still remembers the original count from when createCounter() was first called.
2. First counter() call:
counter(); // 1
count is still in memory and is 0.
count++ → now count is 1.
console.log(count) → prints 1.
3. Second counter() call:
counter(); // 2
The same count is used (from closure).
count++ → now count is 2.
console.log(count) → prints 2.
4. Third counter() call:
counter(); // 3
Same count.
count++ → now count is 3.
console.log(count) → prints 3.
*/