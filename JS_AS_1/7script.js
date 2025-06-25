// Scope Chain and Lexical Environment 
function a() {
    console.log(b);
}
var b = 10;
a();

// can we access b inside a(), when we are at line 3, js engine will look for b inside memory space of function and it will not be able to find that, but the output of above code is 10, how ?

/*
In JavaScript, variables declared with var are hoisted to the top of their scope and initialized with undefined during the creation phase, but the assignment (= 10) happens in the execution phase.
However, in this code, b is declared before the function a() is called, so the value 10 is already assigned to b when a() is invoked.
Since b is in the global scope, and it has already been assigned the value 10, this logs 10.
*/



function a() {
    c();
    function c() {
        console.log(b); // gives 10
    }
}
var b = 10;
a();

function a() {
    var b = 10;
    c();
    function c() {
        console.log(b); // gives 10
    }
}
a();

function a() {
    var b = 10;
    c();
    function c() {
        
    }
}
a();
console.log(b); // b is not defined

// scope is where we can access a specific variable or function in our code.
// when the above code runs, a GEC is created and pushed inside call stack, there in memory part, a: {...}, then code part, a FEC is created and pushed to call stack, there in memory part, b: undefined and c: {...},then code part, b:10, and c() is invoked, again FEC is created and pushed into call stack, inside c we have nothing so empty.

// Whenever an execution context is created, a lexical environment is also created, lexical environment is the local memory + lexical environment of its parent, (lexical means in hierarchy or in sequence), so we can say that c() is lexically sitting inside a(), and a() is lexically inside global, so it means that c() gets access to lexical environment of a() and global and a() gets access to lexical environment of global.

// So inside FEC of c(), we get something which points to lexical environment of a(), and inside FEC of a(), that points to lexical environment of GEC, and inside GEC, it points to null, c -> c+a+global, a -> a+global, global -> null

// So when we do console(b) inside c(), js engine tries to find b inside local scope of c(), it wont find, so now it goes to LE of its parent, it finds out b, so goes back and prints 10.

// The scope chain is the chain of lexical environments (where functions and variables are declared) that JavaScript follows to resolve variable names, when a variable is accessed, JavaScript looks in the local scope (current function/block), if not found, it looks in the outer scope (where the function is defined, not where it's called), this continues up the chain until the global scope is reached, if still not found, a ReferenceError is thrown.

