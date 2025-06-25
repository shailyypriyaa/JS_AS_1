// SetTimeout+Closure
function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    },1000);
    console.log("Namaste JS");
}
x();

// when we run the above code, it waits for 3s and then prints 1, and if we add console.log("Namaste JS"); after setTimeout, it will be printed first and then after 3s, 1 will be printed, function inside setT forms a closure and remembers the var i, so wherever this func goes, it takes the reference of i along with it, setT takes this callback func and stores it at some place and attaches 3s time with it, and the remaining js proceeds, once timer expires, it puts that func inside call stack and runs that.

// Q : we have to print 1, 2, 3, 4, 5 after 1, 2, 3, 4, 5 second
for(var i = 1; i <= 5; i++)
{
    setTimeout(function(){
        console.log(i);
    }, i * 1000);
}
// we generally think that this will be the answer, but this prints 6, 6, 6, 6, 6 , basically the func inside setT forms a closure and wherever it is taken, it always remembers the reference to i and it makes 5 copies of same func and all of them points to same i, because the environment for all these func are same, the loop runs quickly and finishes before any of the setTimeout functions execute, when the callbacks finally run (after 1s, 2s, ...), the value of i has already become 6, aur time 1s, 2s islye aa rha kyuki jb vo loop chala tb usne sare func ko time de diye ki itne der ke liye wait krna h.

// how to fix this , one quick way is to use let instead of var, because it it block scoped, let creates a new block-scoped i for each iteration, and each closure captures its own copy of i, mtlb sare func ke liye alag alag i, mtlb agar i = 2 hai toh setT apne func ke sath ye vala i attach kr dega, similarly baki sabke sath bhi.

// now if we can't use let : 
for(var i = 1; i <= 5; i++)
{
    function close(i) {
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
    close(i);
}
// now it works, because everytime you call close with i, it creates a new copy of it, and also it is bounded by a func now, this creates a new function scope for each iteration, the j inside each closure is independent and holds the value of i at that moment, so each setTimeout uses a separate copy of the number.

function outer() {
    let count = 0;

    function recurse() {
        count++;
        console.log(count);
        if (count < 3) recurse();
    }

    return recurse;
}

const fn = outer();
fn();
// Step-by-Step Explanation: outer() is called → it: Declares count = 0, Defines the function recurse(), Returns recurse, const fn = outer(); Now fn is assigned the recurse function with a closure over count = 0, fn() is called, ab recurse implement hoga and gives output 1,2,3.

function multiplier(factor) {
    return function (x) {
        return x * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15


function outer() {
    let secret = "original";

    function reveal() {
        console.log(secret);
    }

    secret = "updated";

    return reveal;
}

const func = outer();
func(); // updated


let a = 5;
function outer() {
    let a = 10;
    function inner() {
        console.log(a);
    }
    a = 20;
    return inner;
}
let fne = outer();
a = 100;
fne(); // 20


let s = 1;
function outer() {
    function inner() {
        console.log(s);
    }

    let s = 2;

    return inner;
}
const fnn = outer();
fnn();
// pahle outer call hoga, then inner() ko memory de dega then s = 2, isko bhi space de dega, then returns inner, fir inner call hoga and it will log s as 2.


function makeFuncs() {
  let funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs[i] = function () {
      return i * 2;
    };
  }
  return funcs;
}
const arr = makeFuncs();
console.log(arr[0]()); // 6
console.log(arr[1]()); // 6
console.log(arr[2]()); // 6
// because var is function-scoped, all funcs[i] close over the same i, which ends as 3, so each function returns 3 * 2 = 6.


function counter() {
  let count = 0;
  return function () {
    if (count === 0) {
      console.log("First call");
      counter = function () {
        console.log("Second call");
      };
    } else {
      console.log("Should not happen");
    }
    count++;
  };
}
const fs = counter;
fs(); // ?
fs(); // ?
// tired, so baad me krungi























// Uses of closures: Module design pattern, currying, functions like once, memoize, maintaining state in async world, setTimeouts, Iterators. 