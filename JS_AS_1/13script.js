// All about Functions

//Function Statement(also known as Function Declaration)
function a(){
    console.log("a called");
}
a(); // a called

// Function Expression
var b = function(){
    console.log("b called");
}
b(); // b called

// difference between above lies in hoisting, if we call both a() and b() even before declaring it, then calling b() will give error, during memory creation, a() is assigned with func, but var b gets undefined like a normal variable.
/*
1. Function Statement (Function Declaration)
Defined using the function keyword with a name.
Hoisted completely, meaning you can call the function before its declaration in the code.
function greet() {
  console.log("Hello!");
}
greet(); // Works fine even if called before the function declaration
2. Function Expression
A function assigned to a variable (can be named or anonymous).
Not fully hoisted; only the variable declaration is hoisted, but the function assignment happens at runtime.
You cannot call the function before the expression is evaluated.
const greet = function() {
  console.log("Hello!");
};
greet(); // Works only after the function expression is assigned
*/

// Anonymous Function: function without a name, does not have its own identity, if we create an anonymous func like this : function () {...}, this will give syntax error as "Function statements require a function name", so if we cant create it like this, then what's the use of it, AF are used in a place where func are used as values, so they can be used in func expressions.

// Named Function Expression:
var b = function def(){
    console.log("b called");
}
b();
// calling the above func as b(); is right but calling it by def(); gives reference error as def is not defined, def is not created in outer scope(global), but it is created as a local thing, so we can use it inside def(), Function expressions can have names, but those names are local to the function’s own scope.

// First Class Functions:
// we can paas func inside another func as arguements:
var f = function(param1) {
    console.log(param1);
}
f(function (){

});
// You declare a function expression and assign it to variable f, this function takes one parameter, param1, and logs it, you call f(...) and pass it an anonymous function as the argument, inside f, param1 becomes that anonymous function, console.log(param1); logs the function definition itself.
// passing anonymous func into f, if we have any func like, function pqr(){...}, then we can do: f(pqr); this will be called as passing pqr into f.

var f = function(param1) {
    console.log(param1);
}
f(); // undefined
// The function f expects one parameter, param1.
// You called f() without passing any argument, so param1 is undefined.
// console.log(param1); simply logs undefined.


// We can also return a function from a func like this:
var t = function(p){
    return function(){

    }
}
console.log(t()); //gives anonymous func which is returned by t();
// the ability to use functions as values is known as first class functions.

/*
First-Class Functions in JavaScript
In JavaScript, functions are first-class citizens, which means: Functions can be treated like any other variable.
What You Can Do with First-Class Functions:
Assign functions to variables
const greet = function() {
  console.log("Hello!");
};
Pass functions as arguments to other functions
function sayHi(callback) {
  callback();
}
sayHi(function() {
  console.log("Hi!");
});
Return functions from other functions
function outer() {
  return function() {
    console.log("Inner function");
  };
}
const fn = outer();
fn();  // Logs: "Inner function"
*/
