// Block Scope and Shadowing in js 
// let and const are block scoped, block is the space between curly braces, block is also known as compound statement, block is used to combine multiple js statements into one group, we group multiple statements together in a block so that we can use it where js expects one statement, eg:

if(true) true;
if(true) {
    var a = 10;
    console.log(a);
}

// here inside if, it expects a single statement, but if we want to use multiple statements, then we can use block.

// Block scope - all the variables and functions we can access inside this block.
{
    var x = 10;
    let y = 20;
    const z = 30;
}
// y and z are inside block scope as undefined(when hoisted), x is hoisted inside global scope, we can't access let and const outside this block, but x can be accessed.
var p = 100;
{
    var p = 10;
    let q = 20;
    const r = 30;
    console.log(p); // 10
    console.log(p); //20
    console.log(p); //30
}
console.log(p);
// p inside block shadows the p outside of the block, means when we try to access p inside the block it will give the value of block which is inside block(10), and when we try to access p again, outside the block, it gives 10, since var is function-scoped, not block-scoped, it re-declares and overrides the same p from outside, so now p becomes 10, globally, but if it would have been the case of let, let q = 100; and let q = 20; toh ek q(100) script ke andar hoga(not in global), and q(20) block ke andar hoga, so now we have 3 scopes, pahla global jisme var attaches, dusra hai separate memory space where let and const are hoisted, aur last hai block scope. const bhi let jaisa hi behave krega.


// Shadowing in JavaScript is a concept where a variable declared within a certain scope (like a function or block) has the same name as a variable in an outer scope, effectively "shadowing" the outer variable. The inner variable overrides access to the outer variable in its scope. 

/*
📌 Types of Shadowing
Function Scope Shadowing
let x = 5;
function test() {
  let x = 100; // shadows outer x
  console.log(x); // 100
}

Block Scope Shadowing (with let/const)
let y = 50;
if (true) {
  let y = 200; // shadows outer y
  console.log(y); // 200
}
console.log(y); // 50

Illegal Shadowing
Happens when trying to declare a let or const variable with the same name as a variable in an outer scope using var.
let z = 30;
{
  // var z = 40; // SyntaxError: Identifier 'z' has already been declared
}
we can't shadow a let using a var, but why ?
Reason: JavaScript Scoping + Hoisting Rules
1. let is block-scoped
It creates a new variable only available inside the block it’s declared in.
2. var is function-scoped (or global)
It is hoisted to the top of the enclosing function or global scope.
let z = 30;
{
  var z = 40;
}
The var z = 40 gets hoisted to the top of the global (or function) scope, meaning it’s as if you wrote:
// Hoisted version
var z;       // hoisted declaration
let z = 30;  // Error: can't declare the same variable twice
{
  z = 40;
}
Now both let z and var z are in the same scope (global).
That leads to a conflict — JavaScript throws a SyntaxError because you can’t declare the same identifier in the same scope using different declaration types.
But the reverse is allowed:
var z = 30;
{
  let z = 40; // ✅ legal shadowing
}
*/

/*
let a = 20;
{
    var a = 30;
}
if var is shadowing let, it should not cross its boundary,abhi var ki boundary full code hai, kyuki global hai, but if we do:
let a = 20;
function ans()
{
    var a = 30;
}
this is correct as var ki boundary func tk hai, let ko interfere ny kr rha.
*/
const a = 20;
{
    const a = 100;
    {
        const a = 200;
        console.log(a);
    }
}
// Block
// a:200
// Block
// a:100
// Script
// a:20
// scope works same for arrow functions, just like it behaves for normal functions.