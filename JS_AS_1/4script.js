// How function works 
var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

// whenever a code runs in js, GEC is created, firstly memory will be allocated to x, a() and b(), x is assigned with undefined, a() and b() gets the copy the func, with this call stack is also created in which GEC is pushed, now memory is allocated so code execution takes place,when "var x = 1;" this line runs, x is assigned with 1.

// Now a() is invoked, so a function execution context will be created inside code part of GEC,this E1 will be pushed to call stack, inside E1, all the variables inside a() will be assigned with undefined, so x = undefined, (this x is completely different from the one we had in GEC), now code execution will be done for E1, and x = 10, next line says console(x), so it will look for x in local memory space(which is memory space of E1), it finds 10 and prints that in console, now execution is done, so E1 will be vanished and popped off from call stack, now the control goes back to GEC.

// Now b() is invoked, so a function execution context will be created inside code part of GEC,this E2 will be pushed to call stack, inside E2, all the variables inside b() will be assigned with undefined, so x = undefined, (this x is completely different from the one we had in GEC), now code execution will be done for E2, and x = 100, next line says console(x), so it will look for x in local memory space(which is memory space of E2), it finds 100 and prints that in console, now execution is done, so E2 will be vanished and popped off from call stack, now the control goes back to GEC.

// Now console(x) will be executed for GEC, and now it will look for value of x in memory space of GEC which is 1, so 1 is printed in console, and then it looks down, nothing is there to execute, so GEC is vanished and popped off from call stack.