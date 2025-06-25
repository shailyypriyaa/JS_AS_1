// Interview
function outer(){
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
outer()();


// outer creates a local variable a = 10, inside outer, there is another function inner that uses a, outer returns the function inner — not calling it, just returning the definition, function call: outer()(), outer() → calls the outer function, outer() returns inner → which is a function, then we do (), so inner() is called immediately.
// we can also write it like this : var close = outer(); then close();

function outer(){
    function inner() {
        console.log(a);
    }
    var a = 10;
    return inner;
}
outer()();
// var ko neeche ke dia, same output dega.

function outer(){
    function inner() {
        console.log(a);
    }
    let a = 10;
    return inner;
}
outer()();
// this gives 10.

function outer(b){
    function inner() {
        console.log(a, b);
    }
    let a = 10;
    return inner;
}
var close = outer("hello");
close();
// it will stil behave the same as inner function forms a closure with its outer environment, and b in also in there, 10"hello" is the output.

function outest(){
    var c = 20;
    function outer(b){
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
var close = outest()("hello");
close();
// 10"hello"20

function outest(){
    var c = 20;
    function outer(b){
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
let a = 100;
var close = outest()("hello");
close();
// it will gives the same output as above, but agar andar vala a ny hota toh bahar vala a ka value le leta aur 100 print krta, aur agar wahn bhi ny hota toh RefErr ata.


// Data Hiding and Data Encapsulation
var counter = 0;
function incrementCounter(){
    counter++;
}
// anybody in our code can access and change this counter.
function counter()
{
    var count = 0;
    function incrementCounter(){
        count++;
    }
} 
console.log(count); //this gives error - count is not defined

function counter()
{
    var count = 0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
} 
var counter1 = counter();
counter1(); //1
counter1(); //2
// if we run the above code, it becomes 1, now the count is hidden, it is now kind of a private variable inside counter(), now what if we make one more counter:

var counter2 = counter();
counter2(); //1
// this is completely new counter in itself, it will make a separate copy of counter.
// now what if we have to make decrement counter too:

function Counter(){
    var count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
counter1.incrementCounter();
// Counter is a constructor function that creates an object with private count variable using closure, count starts at 0 and cannot be accessed directly from outside the function, The object has two methods: incrementCounter and decrementCounter, which modify and print count, When new Counter() is called, a new object with these methods is created, each maintaining its own count, Calling counter1.incrementCounter() increases count by 1 and logs the updated value (1).
// these are advantages of closure, now disadvantages: over-consumption of memory, variables inside this are not garbage collected.

// Relation between Closure and Garbage Collector
/*
A closure occurs when an inner function remembers and accesses variables from its outer function’s scope, even after the outer function has finished executing.
Because closures keep references to variables in their outer scope, those variables cannot be garbage collected as long as the closure exists and can access them.
This means closures can extend the lifetime of variables, preventing the garbage collector from reclaiming that memory.
However, once there are no references to the closure (and its scope), the garbage collector can free the memory used by those variables.
In short: Closures keep variables alive in memory by retaining references, which affects when the garbage collector can clean up.
*/
