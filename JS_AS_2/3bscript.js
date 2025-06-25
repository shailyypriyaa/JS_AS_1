// promise chaining
const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
    .then(function(orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function(err) {
        console.log(err.message);
    });

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
function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    })
}
function validateCart(cart) {
    return true;
}

// whenever we have a promise in first .then(), we handle that in next .then() level, jo bhi vo promise return krega uska response next .then() ko pass kr diya jayega, return lagao, we can return any data or promise, maan lo ki chain boht bada h, so that catch at the end will handle any error that we get throughout the chain.
// when we run the above code, after 5s CO promise is resolved, fir OI print hoga then neeche paas hoga, then OI is sent to PTP, then PTP sent the data or message to next .then() jo print hogya. PTP returns a promise which resolves to "Payment Successful".
// Data flows through promise chaining by passing resolved values from one .then() to the next.
// now a situation comes where even if the cart is invalid then also we want to PTP, baat ye h ki agar chain me kahin bhi fault ata h toh, "When a fault (error) occurs in a promise chain, the chain short-circuits and jumps directly to the nearest .catch() handler, skipping all intermediate .then() blocks." but for eg, if error comes at 3rd .then() and we want to execute the 5th .then(), fir kya?, then we will move the catch block after 3rd .then(), jaisa ki neeche ke code me dikh rha, all the .then() blocks will be executed after catch() block, we can have multiple catch blocks for different .then() whenever required.
// createOrder(cart)
//     .then(function(orderId) {
//         console.log(orderId);
//         return orderId;
//     })
//     .catch(function(err) {
//         console.log(err.message);
//     })
//     .then(function(orderId) {
//         return proceedToPayment(orderId);
//     })
//     .then(function(paymentInfo) {
//         console.log(paymentInfo);
//     }); 