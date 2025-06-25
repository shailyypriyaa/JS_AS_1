// this keyword
console.log(this); 
//gives window object, this keyword in global space will always have the value of global object, JS runs on various things like smart watch, browser etc, and wherever it runs there's JRE(js runtime environment), here in browser the global object is window, in nodejs it is global, every JRE has different value of this.

function x() {
    console.log(this);
}
x();
// this also gives window but both window are not same, "this" keyword works differently in strict mode and non-strict mode, strict mode has some stricter rules in js, this gives window inside functions in non-strict mode and this gives undefined inside functions in strict mode,
//(Substitution happens in non-strict mode: If this is undefined or null, it is automatically replaced with the global object (window in browsers). In strict mode, no substitution — this stays undefined.)  

/*
the value of "this" keyword also depends on how the function is called:
function x() {
    console.log(this);
}
x();
in non-strict mode, x(); gives window, window.x(); also gives window, because of this substitution.
in strict mode, x(); gives undefined but window.x(); gives window
*/

const obj = {
    a:10,
    x: function() {
        console.log(this);
    },
};
obj.x();
// it gives {a:10, x:f}, this refers to the object calling the method.

// the value of "this" can be modified using call, apply and bind method.
let obj2 = {
    firstName: "Shaily",
    printName: function() {
        console.log(this.firstName);
    }
}
obj2.printName(); //Shaily
let obj3 = {
    firstName: "Kumar",
}
obj2.printName.call(obj3);//Kumar

// this inside arrow functions: AF do not have their own this, they take the value of their LE where they are enclosed :
const obj4 = {
    a:10,
    x: () => {
        console.log(this);
    },
};
obj4.x();
// here, it retains the this value of the enclosing lexical context, LC means how it is written in the code, how is it lexically present inside code, here it is present in global space, this keyword will not behave like it is inside a func, it will behvae like it is present in global space, so its value will be window object, even in strict mode.
/* 🔍 1. What is the scope of x?
x is a property of the object obj4.
So it is scoped inside obj4, and you access it as obj4.x().
But: Since x is defined using an arrow function, it does not bind its own this.
🔁 2. Lexical Scope of the Arrow Function
The lexical scope is the environment in which the function was defined, not where it is called.
In your case:
x: () => {
    console.log(this);
}
This arrow function is defined:
Inside the object literal obj4
But the object itself is defined in the outer (global/module) scope
So: The lexical this of the arrow function refers to the outer scope, which is:
Environment	           this value inside arrow function
Browser (non-strict)   window
ES6 Modules / Node / strict mode	undefined
*/

// now arrow func is enclosed inside other function, 
const obj5 = {
    a:10,
    x: function() {
        const y = () => {
        console.log(this);
    };
    y();
    }
};
obj5.x();
// this gives object5, AF is lexically enclosed inside function, giving obj5.

// this inside dom:
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <button onclick="alert(this)" >Click Me</button>
//     <script src="rough.js"></script>
// </body>
// </html>
// this gives an alert saying objectHTMLButtonElement, the button ele itself is the value of this, if we do : alert(this.tagName); we get BUTTON


/* In JavaScript, the terms function and method are closely related, but there's an important difference based on how they are used:
🔹 Function
A function is a standalone block of reusable code that can be defined and called independently.
function greet(name) {
  return "Hello, " + name;
}
greet("Shaily"); // "Hello, Shaily"
✅ Key Points:
Declared using function keyword (or arrow function syntax).
Can be called independently.
Not tied to any object.
🔹 Method
A method is a function that is a property of an object.
const person = {
  name: "Shaily",
  greet: function() {
    return "Hello, " + this.name;
  }
};
person.greet(); // "Hello, Shaily"
✅ Key Points:
Belongs to an object.
Accessed using dot notation (object.method()).
Can use this to refer to the object it belongs to.
*/
 
/*
In JavaScript, strict mode is a way to opt in to a restricted variant of the language, which helps catch errors and improve performance. It was introduced in ECMAScript 5 (ES5).
🔐 What is Strict Mode?
Strict mode is enabled by adding the following line at the top of a script or function:
"use strict";
When this line is present, the JavaScript engine enforces stricter parsing and error handling.

✅ Differences between Strict and Non-Strict Mode
Feature	           Non-Strict Mode	      Strict Mode
Variable declaration:	Allowed to use undeclared variables	   Throws error if variable is not declared
this in functions:  	Refers to global object (window)	 this is undefined in functions (if not bound)
Duplicate parameter names:  	Allowed 	Syntax error
Silent errors:	Some fail silently (e.g. assignments to read-only properties)	  Throws exceptions
Deleting variables/functions:	Allowed  	Throws error
Creating global variables inside functions:	Allowed	
Not allowed
Octal literals (0123):	Allowed	     Syntax error
eval and arguments: 	Can be modified	   Cannot be reassigned or used as variable names
Future-proofing:	Less safe for future versions
More compatible with future JS versions

🧪 Example
❌ Non-Strict Mode
x = 10; // No error
console.log(x); // 10
✅ Strict Mode
"use strict";
x = 10; // ❗ ReferenceError: x is not defined
📍 Where to use "use strict"?
At the top of a script file:
"use strict";
// Whole script is in strict mode
Inside a function:
function myFunc() {
  "use strict";
  // Only this function is in strict mode
}
🔚 Why use Strict Mode?
Makes debugging easier.
Prevents unsafe actions.
Prepares code for future ECMAScript versions.
Encourages best practices.
*/
