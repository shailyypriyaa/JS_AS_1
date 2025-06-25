// Callback Functions
// functions can be passed to another function as parameter, the function which is passed is known as callback function, ja is a synchronous and single threaded language and can only do on thing at a time, due to callbacks, we can do async things in js, 

function x(){

}
x(function y(){

})
// we paas the function y into x, so now its upto x when it wants to call y, y is called back sometimes later in your code, that's why known as callback func.

// setT takes a callback func, it is passed to setT and called back after sometime later, and that time we pass as second arguement.
setTimeout(function () {
    console.log("timer");
}, 5000);

function a(b){
    console.log("a");
    b();
}
a(function b(){
    console.log("b");

})
// now lets see how this code works, firstly the func inside setT will be stored at some place and it will attach a timer with that, now it goes down, and a() is defined in memory and then a() is called, then it logs a, and then b is called, it logs b, then after 5s, callback func is called and it logs timer.
// js has just one call stack, also called as main thread, whatever is executing in our page is executing through our call stack only, if any operation blocks the call stack, that is known as blocking the main thread, suppose you have a function which is very heavy and it takes 20 mins to complete that, and because we have only one main thread, so nothing else can be exceuted at that time and its an issue, we should never block our main thread, we should always use async operations for things that take time, just like we did in setT