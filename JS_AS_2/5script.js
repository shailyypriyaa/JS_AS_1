// async await
async function getData() {
    return "Namaste";
}
const dataPromsie = getData();
console.log(dataPromsie); // data gives promise
// this async func always returns a promise, toh when we write return inside this function, we should return a promise, but if we returned "shaily" string(or any other value), then it wraps this inside promise and then returns it.
// how to get that string from that promise:
dataPromsie.then((res) => console.log(res)); // Namaste

// returning promise:
const p = new Promise((resolve, reject) => {
    resolve("Resolved");
});
async function getD() {
    return p;
}
const dataP = getD();
dataP.then((res) => console.log(res)); // Resolved

// using async with await: handles promises
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved");
    }, 10000);
});
async function handlePromise() {
    // JS engine waits for promise 
    const val = await pr;
    console.log("Namaste")
    console.log(val); // Resolved
}
handlePromise();
// val will contain the resolved value of pr, await is a keyword that can only be used inside async func, 

// normal way : yahn pr pahle console hoga then promise, JS engine will not wait for promise to be resolved, after 10s, pr will be resolved.
// function getInfo() {
//     pr.then((res) => console.log(res)); // Resolved
//     console.log("Namaste");
// }
// getInfo();

// Example: 
const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved");
    }, 10000);
});
async function handlePro() {
    console.log("hello");
    // JS engine waits for promise 
    const val = await pro;
    console.log("Namaste")
    console.log(val); // Resolved

    const val2 = await pro;
    console.log("Namaste 2");
    console.log(val2);
}
handlePro();
// will our program wait 10s for 2 times?, no, ek baar await will wait for promise to resolve once done, sare uske baad ke turant console ho jayenge.

// Example:
const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved");
    }, 5000);
});
const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved 2");
    }, 10000);
});
async function handlePro() {
    console.log("hello");
    // JS engine waits for promise 
    const val = await pro1;
    console.log("Namaste")
    console.log(val); // Resolved

    const val2 = await pro2;
    console.log("Namaste 2");
    console.log(val2);
}
handlePro();
// yahn pr pahle hello, then pro1 will take 5s, turant hi Namaste aur Resolved, then again wait for 10s, then Namaste2 and Resolved 2.
// initially call stack will be empty, handlePro() comes inside call stack, ye line by line hoga, hello print hoga, ab await pro1 aya, handlePro() suspends and it will move out of call stack, it will wait untill pro1 is resolved,tb tk CS empty rahega, uske baad handlePro() comes again into CS, and starts executing from where it left, fir await pro2 dikha, again same.

// Example:
const pro11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved");
    }, 10000);
});
const pro22 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved 2");
    }, 5000);
});
async function handlePro() {
    console.log("hello");
    // JS engine waits for promise 
    const val = await pro11;
    console.log("Namaste")
    console.log(val); // Resolved

    const val2 = await pro22;
    console.log("Namaste 2");
    console.log(val2);
}
handlePro();
// pro11 waits for 10s, pro22 already started in parallel, but waits for pro11 to finish, pro22 resolve hoke rakha tha pahle se hi islye jaise hi pro11 hua, dono ka console sath me ho jayega.

// Real world Example:
async function handle() {
    const data = await fetch(api);
    const jsonValue = await data.json();
}
// fetch() => Response object, response.json() becomes promise, so write await in front of it.

// Error Handling: here we use try catch
async function handle() {
    try {
        const data = await fetch(api);
        const jsonValue = await data.json(); 
        console.log(jsonValue);
    }
    catch(err) {
        console.log(err);
    }
}
handle();

// another way: since async func returns pro, we can write catch after that too
// async function handle() {
//         const data = await fetch(api);
//         const jsonValue = await data.json(); 
//         console.log(jsonValue);
// }
// handle().catch((err) => console.log(err));



/* 🔹 fetch
fetch is a built-in JavaScript function used to make network requests (usually HTTP).
It returns a Promise that resolves to a Response object.
Example:
fetch("https://api.example.com/data")
This sends a GET request to that URL.

🔹 Response
The object returned from fetch() is a Response object.
It represents the HTTP response (status, headers, body, etc.).
It does not contain the actual data (like JSON) yet — you have to extract it.

Example:
fetch("https://api.example.com/data")
  .then(response => {
    console.log(response.status); // like 200 or 404
    return response.json();       // convert response body to JSON
  });
🔹 response.json()
This is a method on the Response object.
It reads the response body and parses it as JSON.
It also returns a Promise.
Example:
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));
If the API returns this:
{
  "name": "Shaily",
  "age": 25
}
Then data will be a JavaScript object:
{ name: "Shaily", age: 25 }
*/
