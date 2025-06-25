// Issues with setTimeout
// a setT with adelay of 5s always does not wait for 5s, it might take 6s or 10s, it all depends on call stack.

console.log("start");
setTimeout(function cb() {
    console.log("callback");
}, 5000);
console.log("end");
// GEC created and pushed,"start" logged, cb() registered, timer started, "end" logged, suppose we had millions line of code after end, which will take a lot of time to run, lets say 10s, so GEC will still be busy executing this code, while the timer is running, so GEC will not move out from call stack before 10s, meanwhile the timer has expired and cb is already there in CBQ, event loop is constantly checking if call stack is empty or not, so when will cb() execute, it will execute after 10s, cb() waits for whole program to be executed and it waits for call stack to be empty, it is also known as concurrency model in js.
/* JavaScript uses a single-threaded concurrency model, meaning it runs one task at a time on the main thread.
Synchronous code runs directly in the call stack.
Asynchronous tasks (like setTimeout, fetch, etc.) are handled by Web APIs.
Their callbacks go to the callback queue (or microtask queue for Promises).
The event loop moves them to the call stack when it’s empty, enabling non-blocking behavior. */

// trying to block main thread for 10s
console.log("start");
setTimeout(function cb() {
    console.log("callback");
}, 5000);
console.log("end");

let startDate = new Date().getTime(); // gives the current time in milliseconds
let endDate = startDate;
while(endDate < startDate + 10000)
{
    endDate = new Date().getTime();
}
console.log("while expires");

// The while loop blocks the thread until 10 seconds have passed. It’s a busy-wait loop that keeps updating endDate until the time difference reaches 10,000 ms.
// pahle start print hoga, then end, then after 10s, while expires and along with that callback bhi turant hi.

// what will happen in case of setT of 0? 
console.log("start");
setTimeout(function cb() {
    console.log("callback");
}, 0);
console.log("end");
// we think that start, callback and then end, but it is wrong, because even if the timer is 0s, then also cb() has to go through CBQ, so start, end, callback is right.
// use case: when we have something less imp to show, and neeche ka code jyada imp h, toh setT with 0 can be used.
// This is useful when: You want to defer a function's execution (e.g., wait until the browser finishes rendering or other synchronous tasks are done). You want to break a heavy computation into chunks so the browser/UI doesn’t freeze. You want to allow the event loop to process other queued events before executing some logic.