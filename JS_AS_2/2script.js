// Promises
// promises are used to handle async operations in js, lets create a cart:
const cart = ["shoes", "pants", "kurta"];
createOrder(cart);
proceedToPayment(orderId);
// CO is an api which takes cart and will return us orderId, there's one more api PTP which takes orderId and will take us to payment page, now these two apis are async, we dont know how much time will they take, and they are dependent on each other, we can only proceed to payment once we have created the order, how this is done using callbacks, but it has issues like IoC and CB hell.
createOrder(cart, function(orderId) {
    proceedToPayment(orderId);
});

// how to create them using promises, we can assume this promise variable to be an empty object with some data value in it intially{data: undefined}, and this will hold whatever CO will return to us, this CO api is an async opr so we dont know how much time will it take, toh jitna bhi time lega, tb tk aage ke lines execute honge and jb CO api isko data de dega toh vo apne aap, promise me store ho jayega{data: orderDetails}, now for its further execution of the data that we got, we'll attach a CB func to this promise object using .then(), as soon as we get the data inside promise object, this CB func will be automatically called.
const promise = createOrder(cart);

promise.then(function(orderId) {
    proceedToPayment(orderId);
});

// what's the difference : in CB we were passing a func, and here in promise we are attaching a CB func to that promise object, both are different, 
// CB me that CO func ka CB vo kb call hoga idk, but here You get a Promise (a handle to future work). You decide what to do when it's ready (.then()). You can chain more actions. You can catch errors with .catch(). You're not dependent on how the Promise was created — you control what happens next. so control humare pas hai as we are not passing our code to some other functions.
// CB me vo func nahi bhi call hota tha, ya jyada call ho jata tha, but yhn promise me ye data milte hi turant call hoga and ek hi baar call hoga.

//  if we want to see the promise object, we can use the function fetch(), it is an api given by browsers to make external calls, now we'll try to fetch username from this api, fetch() returns a promise, jaise hi fetch execute hoga, we get a promise object inside user, it shows :
// user: Promise
// Prototype: Promise
// PromiseState: "pending"
// PromiseResult: undefined 
// PromiseResult will store the data returned by fetch(), PromiseState tells ki kis state me hai, pahle pending me hota h then fulfilled ho jata h.

const GITHUB_API = "https://api.github.com/users/akshaymarch7"
const user = fetch(GITHUB_API);
console.log(user);

// now what will be the output of "console.log(user);" it shows :
// Promise<pending>
// Prototype: Promise
// PromiseState: "fulfilled"
// PromiseResult: Response
// why is it showing pending and after expanding it shows fulfilled, actually when the console statement is executed, at that time promise is in pending state, because js never stops for anyone toh jo hath me hota h wahi dikha deta h, but later data comes into the promise object, which is shown below, which is actually the current state of promise, and also promiseResult has value in it.

user.then(function (data) {
    console.log(data);
})
// what if we have some CB attached to the promise object, then it will execute, here, data is the Response object returned by the fetch(). It is a Response object with metadata about the HTTP response, such as:
// Response {
//   body: ReadableStream,
//   bodyUsed: false,
//   headers: Headers,
//   ok: true,
//   redirected: false,
//   status: 200,
//   statusText: "OK",
//   type: "cors",
//   url: "https://api.github.com/users/akshaymarch7"
// }

// JS guarantees that the promise object can be resolved only once, either it will be fulfilled or rejected, and there can be only 3 states in promise, P, F, R, promise objects are immutable, whenever we get the data we can just pass it here and there without worrying that someone can change that.

// Definition: promise object is a placeholder, which will be filled later with a value, untill we receive a value from async opr. Promsie is an object representing the eventual completion or failure of an asynchronous operation.

createOrder(cart, function(orderId) {
    proceedToPayment(orderId, function(paymentInfo) {
        showOrderSummary(paymentInfo, function() {
            updateWalletBalance();
        });
    });
});
// we have callback hell like this, CO hoga pahle then PTP then SOS then UW, but we can do this easily and in a more readable way using promise chaining.
createOrder(cart)
.then(function (orderId) {
    return proceedToPayment(orderId);
})
.then(function(paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo) {
    return updateWalletBalance(paymentInfo);
});
// humesha aur humesha return krna h so that content from upper level .then() should be able to go next .then() level.
// we can also write this using arraow functions:
createOrder(cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(paymentInfo => updateWalletBalance(paymentInfo));


/* 🌐 What is fetch?
fetch() is a built-in Web API in JavaScript used to make HTTP requests.
It returns a Promise, so it's an example of asynchronous programming with control handed back to you.
🔍 Basic Syntax
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
🧠 Behind the Scenes
fetch() starts an asynchronous HTTP request.
It returns a Promise immediately — so your code can continue.
You decide what happens when the response arrives using .then() and .catch().
*/

/* 🧠 1. What is a Promise in JavaScript?
A Promise represents the eventual result of an asynchronous operation.
A Promise has two key internal properties:

Property	        Description
[[PromiseState]]	The current state of the promise
[[PromiseResult]]	The value (or reason) associated 
                    with the promise outcome
These are internal slots (not accessible directly), but you can see them in the browser dev tools.

🔄 [[PromiseState]] – The Lifecycle
State	           Description	              Can Change?
pending	Initial state, operation is still ongoing	✅
fulfilled	Operation completed successfully	    ✅
rejected	Operation failed with an error	        ✅

Once a Promise becomes fulfilled or rejected, it’s settled — it can’t change again.

If State	[[PromiseResult]] contains
pending	    undefined
fulfilled	The resolved value (e.g., data)
rejected	The error/reason the promise was rejected with
*/