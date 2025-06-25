// Event Loops
// Example 2:
console.log("start");
document.getElementById("btn")
.addEventListener("click", function cb() {
    console.log("callback");
});
console.log("end");
// GEC is made and pushed into call stack, "start" is logged, then "document.getElementById("btn")" this part is taking access from web api(dom api), dom tries to find a button with some id and returns that,  then "addEventListener" registers a callback func on event "click", cb() banaya then usme click event attach kr dia, after that "end" is logged and, GEC is popped off, but that event handler remains inside web api environment, unless we remove that event listener or close the browser, when the user clicks on button, cb() moves to callback queue,  and waits for its turn to get executed, now event loop takes cb() to call stack, then cb() is executed, and after that cb() is vanished from both call stack and callback queue.

// Why do we need callback queue? event loop directly cb() ko uthata and call stack me daal deta, but suppose we clicked that button 7 times, so 7 baar cb() is pushed into call back queue, and then event loop checks if call stack is empty or not, then slowly one by one all cb() are pushed to call stack.(JavaScript runs in a single thread (only one task can run at a time on the call stack). If you execute long or asynchronous tasks directly, it would block the rest of the code from running. The callback queue enables non-blocking execution by helping manage asynchronous callbacks in an orderly way.)

// Example 3:
console.log("start");
setTimeout(function cbT() {
    console.log("CB setTimeout");
}, 5000);

fetch("https://api.netflix.com")
.then(function cbF() {
    console.log("CB Netflix");
});
console.log("End");

// fetch goes and request an api call, it returns a promise and we have to pass a call back func, which will be executed once the promise is resolved, toh when code starts, it pushes GEC into callstack, and logs "start", then cbT is registered inside web api and also we have timer of 5s which starts, now we have fetch api which is used to make network calls, it also registers cbF into web api environment, cbT is waiting for timer to finish and cbF is waiting for data to be returned from netflix server, suppose the server is very fast and it returns data in like 50ms, so we expect it to goto callback queue, but this never happens, just like this callback queue, we have a micro task queue, it is same as callback queue but it has higher priority, whatever func we have inside MTQ will be executed first and func inside CBQ will be executed later, now cbF() which is func involved in promises will goto MTQ, and lets say we have lots of line to execute in our code, so event loop checks continuously when call stack gets empty, after 5s, cbT() also goes to CBQ and now MTQ has cbF() and CBQ has cbT() and both of them are waiting, suppose all of our code completes execution and we log "end", now GEC is popped off from CS, now cbF() is pushed inside CS(removed from MTQ), and "CB Netflix" is called, and now cbF is popped off from call stack, now cbT() gets inside CS(removed from CBQ), logs "CB setT" and popped off from CS.

// What can come inside microtask queue: all te callback functions which come through promises will go inside the MTQ, and there is something called as mutation observer, it keeps checking if there is some mutation in dom tree or not, if there is mutation in the dom tree, it can execute some callback func, so that also goes in MTQ, everything else goes to CBQ, CBQ is also called as task queue.

// suppose one microtask creates another microtask, and it creates another, and it goes on, so if we have one task in CBQ to finish, it will never be executed, this is known as starvation of task inside CBQ.



/* The microtask queue (also known as the job queue) is a special queue used to handle microtasks, which are smaller and higher-priority than tasks in the callback (macro) queue.
Examples of Microtasks:
Promise.then(), Promise.catch(), Promise.finally(), queueMicrotask() (explicit microtask), MutationObserver (DOM changes tracking)
Execution Order: Microtask vs Callback Queue
JavaScript executes all synchronous code first (normal call stack). Then, it checks the microtask queue and executes all microtasks one by one. Only after the microtask queue is completely empty, it moves on to the callback queue (macrotasks like setTimeout, setInterval, etc.). */

/* What is the Callback Queue?
The Callback Queue is a waiting line for functions (callbacks) that are ready to run, but must wait until the Call Stack is empty.
These are typically callbacks from asynchronous tasks handled by the browser’s Web APIs (like timers or DOM events).
What Goes into the Callback Queue?
Here are the main sources of callbacks that go into the Callback Queue:
setTimeout	setTimeout(() => { ... }, 1000)
setInterval	setInterval(() => { ... }, 1000)
DOM Events	button.addEventListener("click", () => { ... })
XHR (older AJAX)	xhr.onload = function () { ... }
UI Events	onchange, onscroll, oninput, etc. */

/* MutationObserver is a built-in Web API that lets you watch for changes in the DOM (like adding, removing, or modifying elements or attributes). It works asynchronously and pushes its callback into the microtask queue, which means it executes faster than setTimeout(), but after the current synchronous code finishes.
✅ What can it detect?
When a new element is added to the DOM, When an element is removed, When attributes of an element change, When text content changes.
🔧 Basic Syntax:
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
callback: a function to run when changes are observed.
targetNode: the DOM node you want to observe.
config: what types of mutations to observe (like child list, attributes, etc.).
🧪 Simple Example:
HTML:
<div id="box">Initial</div>
<button id="changeBtn">Change Content</button>

JavaScript:
const target = document.getElementById("box");
(The browser scans the HTML document, It looks for an element with the id="box", That <div> element is selected and stored in the variable target.)

const observer = new MutationObserver((mutations) => {
  console.log("DOM changed!");
});
(A new instance of MutationObserver is created, The function (mutations) => { console.log("DOM changed!"); } is the callback, This function will run whenever the target DOM element is changed (based on what we tell it to watch), But at this point, it's just created — not watching anything yet.)

observer.observe(target, {
  childList: true, 
  subtree: true   
});
(Now the observer starts watching the target DOM node,childList: true → Watch if any child elements or text nodes are added/removed/changed, subtree: true → Also watch deep inside child elements, not just the top level, So: any change inside #box, even deep inside, will trigger the observer.)

document.getElementById("changeBtn").addEventListener("click", () => {
  target.textContent = "Changed!";
});
(The browser finds the button with id="changeBtn", It attaches a click event listener to it, When the button is clicked, The content of the #box element is changed using, target.textContent = "Changed!"; This triggers a DOM mutation.)

Now what happens when the button is clicked:
Step-by-step:
User clicks the button.
The click event listener runs:
It changes the text content of the #box element.
This mutation is observed by MutationObserver.
MutationObserver schedules its callback into the microtask queue.
After the click handler finishes and the call stack is empty, the event loop picks the microtask.
The callback: () => { console.log("DOM changed!"); }
runs and prints: DOM changed!
*/

/* What is Starvation in JavaScript?
Starvation happens when a task in the callback queue (macrotask queue) never gets a chance to execute because something else is constantly taking priority, preventing it from running.
In JavaScript, this typically happens when:
The microtask queue is continuously filled (e.g., endless Promise.then() chains).
The call stack is never empty, so the event loop never gets a chance to move on to the callback queue.
Example: Callback Queue Starvation
setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

function loop() {
  Promise.resolve().then(() => {
    console.log("Microtask");
    loop(); // Keep adding microtasks recursively
  });
}
loop();
Microtask
Microtask
Microtask
... (forever) 
*/

