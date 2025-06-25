// Shortest js program 
// shortest js program is this empty file, when you run this, a GEC is created, also it sets up the memory space, although there's nothing to set up, but still it does its job, js engine also creates something which is known as window, if you go to console and write window and hit enter, it will show you a window object, which has lots of functions and methods, these are created by js engine, we can access all these variables and functions inside our js program, 
// just like this window, js also creates a this keyword, when we write "this" and hit enter we get something, at global level , this "this" points to the window object, window is actually a global object which is created along with GEC, so whenever a js program runs, a global object is created, GEC is created, and this keyword is created.

/*
What Is the Global Object?
The global object is a special object that is always accessible anywhere in your code, and it holds:
Global variables
Global functions
Built-in objects (like Math, JSON, Array, etc.)
Environment-specific APIs (like window.alert in browsers, process in Node.js)

In JavaScript, window and the global object refer to the highest-level object that holds all global variables and functions — but their name and behavior vary depending on the environment (browser or Node.js).

In Browsers:
The global object is called window.
It's an object that represents the browser window and has many built-in functions, objects, and variables.
console.log(window); // The global object in the browser

var a = 10;
console.log(window.a); // 10

function greet() {
  return "Hello!";
}
console.log(window.greet()); // "Hello!"
In Node.js:
The global object is called global, not window.
If you try console.log(window) in Node.js, you'll get a ReferenceError.
var b = 20;
console.log(global.b); // 20 (if declared with `var` at the top level)
*/

// even though our file is empty, js engine will create this global object. At global level, this === window, gives true, global space is anything that you dont write inside a function,
var a = 10;
function b() {
    var x = 10;
}
// this var a and func b() are created inside global space and hence gets attached with window object, we can access these using window.a as told above. Now we have console.log(window.a); and console.log(a); both will give 10, as even if you dont say, it refers to window object only, if we say console.log(x); then it gives x is not defined, as it tries to find the x in global space, which he can't get. Now if we do, console.log(this.a); this also gives 10.

// The global object in JavaScript provides a central place to store and access global variables, functions, and built-in features like Math, setTimeout, and JSON. It also gives access to environment-specific APIs — window in browsers and global in Node.js. It's useful for sharing values across scripts and interacting with the runtime environment. However, overusing it can lead to code that's hard to manage, so it's better to use let, const, and modules when possible. Use globalThis for a cross-platform way to access the global object. 
