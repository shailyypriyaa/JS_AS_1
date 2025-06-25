// Callback Hell & Inversion of Control
// suppose we are building an e-commerce website and inside that, lets create a cart, now first we need to create an order and then we proceed to payment, suppose we have access to 2 backend apis, api.createOrder() which creates an order, api.proceedToPayment() which does payment, 

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function() {
    api.proceedToPayment(function() {
        api.showOrderSummary()
    })
})
// we have given this callback func to createOrder api, now it is the responsibility of createorder to first create an order and then call the function back, now we have to show order summary too, we have to call this only after we are done with our payments, so we are passing this to proceedToPayment, so now its his responsibility to call "showOrderSummary" this function back.
// when we have a large code base, and we have so many apis here and there, one callback inside another, and our code starts to grow horizontally instead of vertically, this kind of code structure is unreadable and unmaintainable, this structure is also known as pyramid of doom.

// Inversion of control : loose the control of your code when we are using callbacks, 
// api.createOrder(cart, function() {
//     api.proceedToPayment()
// })
// what we are doing here is, we create a callback func and give that to createOrder api, we take rest and blindly trust on CO api, now we are expecting that CO will create an order and will call our func back, but this is very risky, we gave the control of our program to CO api, but it might be possible that CO api must be busy somewhere else, there could be lots of bugs inside CO api, what if our callback func is never called, what if it is called twice, so whenever we have callback func and we pass that to other func, we are giving control to that.

/*
✅ 1. What is a Callback?
A callback is a function passed as an argument to another function, which is then invoked (called) inside the outer function to complete some action.
function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}
function sayBye() {
    console.log("Bye!");
}
greet("Shaily", sayBye);
✅ 2. Why Are Callbacks Important?
Callbacks are essential because JavaScript is asynchronous, especially in browser environments. They allow:
Non-blocking execution
Handling I/O tasks like file reading, API calls, and user input
Running code after something has finished
Example: Async Code with Callback
console.log("Start");
setTimeout(function () {
    console.log("Callback executed");
}, 2000);
console.log("End");
Even though setTimeout is called earlier, "End" is logged first — because of async nature.
⚠️ 3. Problems with Callbacks (Callback Hell)
When multiple async operations depend on each other, nesting callbacks becomes messy.
doTask1(function (res1) {
    doTask2(res1, function (res2) {
        doTask3(res2, function (res3) {
            doTask4(res3, function (res4) {
                // and so on...
            });
        });
    });
});
This is known as: Callback hell, Pyramid of Doom, Difficult to read, debug, and maintain
✅ 4. Solutions to Callback Hell
➤ a. Named Functions
function task1Done(res1) {
    doTask2(res1, task2Done);
}
function task2Done(res2) {
    doTask3(res2, task3Done);
}
// ...
➤ b. Promises
doTask1()
  .then(doTask2)
  .then(doTask3)
  .catch(handleError);
➤ c. Async/Await (Modern & Clean)
async function main() {
    try {
        const res1 = await doTask1();
        const res2 = await doTask2(res1);
        const res3 = await doTask3(res2);
    } catch (err) {
        console.error(err);
    }
}
✅ 5. Synchronous vs Asynchronous Callbacks
🟢 Synchronous Callback
Executed immediately during function execution.
[1, 2, 3].forEach(function (num) {
    console.log(num);
});
🔴 Asynchronous Callback
Executed later, like with setTimeout, API calls, or I/O operations.
setTimeout(function () {
    console.log("I'm async");
}, 1000);
✅ 6. Use Cases of Callbacks
DOM Events:
button.addEventListener("click", () => alert("Clicked!"));
AJAX / API Calls:
fetch(url, callback);
Array Methods:
arr.map(function(item) { return item * 2; });
Custom Logic Flow Control:
function calculate(x, callback) {
    return callback(x);
}
calculate(10, function(x) { return x * x });
✅ 7. Callback vs Higher-Order Function vs First-Class Function
Callback:	A function passed to another function to be called later
Higher-Order Function:	A function that takes another function as argument or returns a function
First-Class Function:	Functions in JS can be assigned to variables, passed around, returned
✅ 8. Real-World Analogy
Imagine you order food and give your phone number to the waiter. Once food is ready, they call you back — you don't have to wait there.
*/

/*
🔄 Inversion of Control (IoC) is a design principle where the control of program flow is inverted — instead of the programmer controlling all parts of the program, control is delegated to a framework, library, or callback.
You don’t call the code, the code calls you.

✅ Common Example in JavaScript – Callbacks
function processUserInput(callback) {
  const name = "Shaily";
  callback(name);
}
function greet(name) {
  console.log("Hello " + name);
}
processUserInput(greet);
Here:
processUserInput is controlling when and how greet is called.
You provided greet, but you don’t control its execution.
This is Inversion of Control — you give control to processUserInput.

✅ Real-life Example – Event Listeners
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked!");
});
You register a callback for the click event.
You don’t control when the function runs — the browser does.
This is IoC — the browser controls your code’s execution timing.
*/