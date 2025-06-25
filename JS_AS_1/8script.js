// Temporal dead zone 
console.log(b);
var b = 100; 
// we can do this, and it will give undefined

console.log(a);
let a = 10;
// it gives error(Ref), cannot access 'a' before initialization
// even before executing a single line of code, js has allocated memory to a and b and assigned them with undefined, in case of var, it is in the global scope, in case of let and const, they are also allocated memory, but they are stored in a different memory space than global, and we can't access these memory spaces until we have put some value into them, TDZ is the time since when this let variable was hoisted till it is initialized some value, whenever you try to access a variable inside TDZ, it gives you RefErr

// The Temporal Dead Zone (TDZ) is the period between the entering of a block scope and the initialization of a variable declared using let or const, during which accessing the variable results in a ReferenceError.

console.log(x);
// it gives RefErr, x is not defined

// variables with var declarations are attached to window object, but let are not, let is little more strict than var, we cannot do redeclarations, if we do let a = 10; and let a = 100; we get SyntaxErr as "identifier a has already been declared", here no code will run, as same variable is declared again, so not even a single line will be executed, it is possible in var but not in let, also we can't first declare a with let and then a with var, this is also not allowed.

// in case of SyntaxError, code just stops completely, kuch bhi run ny hota.

// const is even more strict than let, if we do let a; and then a = 10; its fine, but we can't do the same with const, it gives SyntaxErr as "missing intializer in const declaration", now if we do const s = 100; and then s = 1000; then it gives TypeErr as "assignment to constant variable".

// types of error
/*
1. ReferenceError
Occurs when you try to access a variable that is not declared or is in the Temporal Dead Zone (TDZ).
console.log(a); //ReferenceError: a is not defined
2. TypeError
Occurs when a value is not of the expected type, or you're trying to perform an operation on a type that doesn’t support it.
let num = 5;
num.toUpperCase(); //TypeError: num.toUpperCase is not a function
3. SyntaxError
Occurs when the code violates JavaScript’s syntax rules.
let x = ; //SyntaxError: Unexpected token ';'
4. RangeError
Occurs when a value is outside the allowed range.
let arr = new Array(-5); //RangeError: Invalid array length
*/

// var, let, const
/*
var – (Old, avoid using in modern JS)
Function-scoped (NOT block-scoped)
Hoisted to the top of the function or global scope (but initialized as undefined)
Can be re-declared and updated
function example() {
  console.log(x); // undefined (due to hoisting)
  var x = 10;
  console.log(x); // 10
}
Problem with var:
if (true) {
  var x = 5;
}
console.log(x); // 5 (leaks outside the if block!)
let – (Modern, preferred)
Block-scoped (confined to {})
Hoisted, but not initialized (you get a ReferenceError if used before declaration)
Can be updated but NOT re-declared in the same scope
let x = 10;
x = 20; // allowed
let x = 30; // SyntaxError: already declared
{
  let y = 5;
}
console.log(y); // ReferenceError
const – (For constants)
Block-scoped
Must be initialized at the time of declaration
Cannot be reassigned, but object contents can be changed
const z = 100;
z = 200; // TypeError: Assignment to constant variable
Objects and arrays declared with const are mutable:
const person = { name: "Alice" };
person.name = "Bob"; // allowed
*/

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (function or global) before execution, var declarations are hoisted and initialized as undefined, let and const are also hoisted, but not initialized — they stay in a "temporal dead zone" until their line of declaration is reached.