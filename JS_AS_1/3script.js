// Hoisting 

// Case : 1 
var x = 7;
function getName() {
    console.log("shaily");
}
getName();
console.log(x);
// this will give output as shaily and then 7
// (call stack ka control kidhar se kidhar jata h: line 2 -> line 6 -> line 4, once done till here, FEC will be popped off, line 2 -> line 7, then line 2, then all empty)

// Case : 2
getName();
console.log(x);
var x = 7;
function getName() {
    console.log("shaily");
}
// we are trying to access getName() even before we have initialized it, similarly with x, we get output as shaily and undefined, but if we remove this line : "var x = 7;", then we get error as not defined, this is actually hoisting which means that we can access variables even before we have initialized it.

// Case : 3
var x = 7;
function getName() {
    console.log("shaily");
}
console.log(getName);
// it prints the function itself 
// f getName() {
//   console.log("shaily");
// }

// Case : 4
console.log(getName);
var x = 7;
function getName() {
    console.log("shaily");
}
// it again gives us the function, in case of x it gives us undefined(if we didn't intialise), in case of func, it gives the same thing even if we dont initialise

// the memory is allocated even before the code starts executing, so even before code execution, memory is already allocated to x and it stores a special keyword undefined for these variables, similarly in case of functions, whole code is put inside it, so we get actual copy of func inside it, so in 2nd case, when we try to access x and getName before initialising it, it gives us undefined and copy of func.

// Final case(all clear)
getName();
console.log(x);
console.log(getName);
var x = 7;
function getName() {
    console.log("shaily");
}

// firstly, memory creation hoga, toh x me undefined jayega and func me uski copy, uske baad execution hoga, in that getName(), iske paas poora func hoga toh shaily print kr dega, then console.log(x), ye undefined dega, then console.log(getName), ye poora func de dega.

// if we remove "var x = 7;" from here, so in memory creation phase, we only allocate space for that func, and not for x, so when we do "console.log(x);", it gives not defined, because pahle se memory iske liye allocate kiya hi ny h.

// arrow func
getName();  //gives TypeError
console.log(x);
console.log(getName);
var x = 7;
var getName = () => {
    console.log("shaily");
}

// when we convert the normal func to arrow func, now it behaves like another variable and not like a function and gives "getName is not a function", so in execution context, in memory allocation phase, just like it assigned x as undefined, similarly, it assigned getName() with undefined too.

var getName2 = function() {

}
// this also acts like variable