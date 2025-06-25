// Creating Promise, Chaining and Error Handling
const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // returns a promise which has orderId
console.log(promise);

promise.then(function(orderId) {
    console.log(orderId);
    proceedToPayment(orderId);
})
.catch(function(err) {
    console.log(err.message);
})
// this is consumer part and now we'll write producer part of the code.

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        if(!validateCart(cart)) {
            const err = new Error("cart is not valid");
            reject(err);
        }
        const orderId = "12345";//abhi random liya h, DB se lete h isko
        if(orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}
function validateCart(cart) {
    return true;
}
// we create a promise using promise constructor which takes a function and this has two parameters : resolve and reject, these are given by js to build promises, and inside this we write the logic whatever we want to do inside this createOrder, if the cart is not valid, we'll call the reject func and throw an error, then order create kra and resolved it, 
// agar cart valid hai, toh promise resolve hoga and then humne console kiya h toh udhar dikhega, now if we put resolve inside setT, CO api will take time and promise will be resolved after 5s, toh 5s ke baad promise fulfilled dikhega.
// agar cart invalid hai, toh error dikhega console me, and it should be handled properly, toh agar promise shi se fulfill hokr aya toh uske liye .then() hai but what if it fails, for that we have catch() in which we can attach a failure callback to that, toh ab console me error ny ayega, error print hokr ayega as a message.
