// Event Loop
// JS is a single threaded language, it has one call stack and it can only do one thing at a time, the call stack is present inside js engine, all the code is executed inside call stack, whatever task is given to call stack it does that and as soon as it is done, the execution contexts are popped off, but what if we have to do something after a certain period of time, so call stack can't do that, because it does not have timer.

// call stack is inside js engine and js engine is inside a big red box, which is browser, browser has something which is known as local storage which can store data inside it, we can also have a timer inside browser, we also have url inside that, browser can also connect to netflix server to get our movies and it can also display it to us, it also has access to bluetooth and geolocations, so if we want to access those super powers then js engine must have a way.

// To access all those super powers, we need web apis, which includes, setTimeout(), DOMAPIs, fetch(), local storage, console, location, all these are part of browser and it gives access to all of these to js engine,.

/*
Let's break down Web APIs in JavaScript — these are browser-provided features that help you interact with the environment (page, network, browser storage, etc.). They're not part of core JavaScript, but are accessible from it.
✅ What are Web APIs?
Web APIs are interfaces provided by browsers that allow JavaScript to interact with different parts of the environment — such as timers, the page (DOM), HTTP requests, browser storage, etc.
🌐 1. setTimeout() / setInterval() — Timer APIs
📌 Purpose:
Run code after a delay or repeatedly at intervals.
✅ setTimeout(callback, delay)
Runs code once after a delay (in ms).
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
✅ setInterval(callback, interval)
Runs code repeatedly every interval (in ms).
setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);
✅ clearTimeout() / clearInterval()
Stops a timer.
const id = setTimeout(() => console.log("Will not run"), 1000);
clearTimeout(id);
📄 2. DOM APIs — Document Object Model
📌 Purpose:
Access and manipulate HTML elements.
Common APIs:
document.getElementById("myDiv");
document.querySelector("p");
element.innerHTML = "Updated!";
element.style.color = "red";
element.addEventListener("click", handler);
Example:
<button onclick="changeText()">Click Me</button>
<p id="demo">Hello</p>
<script>
  function changeText() {
    document.getElementById("demo").innerText = "Changed!";
  }
</script>
🌐 3. fetch() — Web API for HTTP Requests
📌 Purpose:
Make HTTP requests to APIs or servers (AJAX).
Basic Example:
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
Key Features:
Returns a Promise
Can be GET, POST, etc.
Supports headers, body, etc.
💾 4. Local Storage / Session Storage
📌 Purpose:
Store data in the browser, even after refresh.
✅ Local Storage (persists even after tab close):
localStorage.setItem("name", "Shaily");
console.log(localStorage.getItem("name")); // "Shaily"
localStorage.removeItem("name");
localStorage.clear(); // removes all
✅ Session Storage (clears when tab closes):
sessionStorage.setItem("temp", "123");
📍 5. location API
📌 Purpose:
Gives info about the current URL and allows redirection.
console.log(location.href);      // Full URL
console.log(location.hostname);  // Domain
console.log(location.pathname);  // Page path
location.href = "https://google.com"; // Redirect
🖥 6. console API
📌 Purpose:
Debug and log information to the browser console.
console.log("Message");
console.warn("Warning!");
console.error("Error!");
console.table([{ name: "Alice" }, { name: "Bob" }]);
console.time("task");
// ...some task
console.timeEnd("task");
*/

/*
The Console API is a set of functions provided by browsers (and Node.js) to help developers log information, debug code, and inspect objects directly from the developer console.It’s accessed via the global console object.
✅ Common Console API Methods:
Method	What It Does
console.log()	Prints general messages
console.error()	Logs errors in red
console.warn()	Logs warnings in yellow
console.info()	Logs informational messages
console.table()	Displays data (array or object) in a table format
console.debug()	Logs debugging info (often hidden unless console is in verbose mode)
console.clear()	Clears the console
console.assert()	Logs only if an expression is false
console.count()	Logs the number of times it has been called
console.time() & console.timeEnd()	Measures time between the two calls
*/


// we get all the things inside call stack using global object, this is window, so if we do window.setTimeout, it gives access to timer, but when we write code, we dont do window. we only write it as setTimeout, since window is global object and setT is part of that only, so ne need to use window keyword, browser wraps up all these things into window object.

// Example 1:
console.log("start");
setTimeout(function cb() {
    console.log("callback");
}, 5000);
console.log("end");

// when this code will run, firstly GEC will be pushed into call stack, and when line 106 executes it calls console api, and it actually log start into console, next setT will call web api which will give us timer, setT registers the cb callback and 5s gets inside timer, then end is logged, and after it everything completes, so GEC is popped off from call stack, now as 5s timer expires, cb needs to be executed, so we need cb to get inside call stack, but it cannot directly go inside that, it goes to the call stack through callback queue, so when the timer expires, cb is put inside callback queue, event loop acts like a gatekeeper and checks if we have something inside callback queue(and it also checks if call stack is empty or not), and if we have something, it pushes that inside call stack, and then call stack quickly executes that func, it creates callback func execution context(FEC), and then logs "callback".


/* Why don’t asynchronous functions (like setTimeout, fetch) go directly to the Call Stack? Why go through Callback Queue? Because they are not executed immediately.
They are scheduled to run later, and JavaScript needs a way to control when and how they run — this is managed through the Callback Queue and Event Loop. After 5 second, the callback (function) is sent to the Callback Queue, not the Call Stack directly. The Event Loop checks if the Call Stack is empty. When empty, the Event Loop moves the callback from Callback Queue to Call Stack. Callback runs.
🧠 Why This Indirect Route?
To Keep the Call Stack Non-Blocking
If callbacks jumped directly into the stack: They might interrupt ongoing tasks. Cause unpredictable execution order. Break JavaScript's single-threaded consistency. */