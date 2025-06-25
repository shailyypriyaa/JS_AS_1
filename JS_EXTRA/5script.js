/* HTTP Requests and Response:
🌐 What is an HTTP Request?
An HTTP request is a message sent from the client (browser or JS app) to the server asking for data or to perform an action.
Common HTTP Methods:
GET: Retrieve data (e.g., read a blog post)
POST: Send data (e.g., submit a form)
PUT: Update existing data
DELETE: Remove data
📥 What is an HTTP Response?
An HTTP response is the server’s reply to the request, which includes:
Status code (e.g., 200 OK, 404 Not Found)
Headers (meta info)
Body (actual content/data)
✅ Making HTTP Requests in JavaScript
There are 3 main ways:
1. fetch() API (Modern, Promise-based)
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // parse response as JSON
  .then(data => console.log(data))   // use the data
  .catch(error => console.error('Error:', error));
🔹 What it does:
Sends a GET request by default
Returns a Promise
You can customize it with method, headers, body, etc.
2. fetch() with POST and JSON
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Hello',
    body: 'World',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data));
3. Using async/await with fetch()
async function getPost() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
getPost();
4. Using Axios (third-party library)
Install via npm or CDN.
npm install axios
import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log(response.data));
📦 HTTP Response Structure
When you use fetch(), the response object looks like:
fetch(url).then(response => {
  console.log(response.status);   // e.g., 200
  console.log(response.ok);       // true if status is 200–299
  console.log(response.headers);  // Headers object
});
🔢 Common Status Codes
Code	Meaning
200	OK (success)
201	Created (on POST)
400	Bad Request
401	Unauthorized
404	Not Found
500	Internal Server Error
🔐 Setting Headers
Headers define meta info about requests and responses.
fetch(url, {
  headers: {
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  }
});
*/

/* API in JS:
API stands for Application Programming Interface.
In JavaScript (especially web development), API usually refers to a web service that allows your app to send and receive data from a server.
Think of it as a bridge between your frontend (JavaScript) and backend (database/server).
🧭 Types of APIs in JavaScript
Web APIs – Provided by the browser (DOM, Fetch API, LocalStorage, etc.)
Third-Party APIs – External services like GitHub API, OpenWeather, etc.
REST APIs – A common pattern to structure web APIs using HTTP methods
JavaScript APIs (Browser) – Interfaces to work with hardware, clipboard, etc.
💬 Example: REST API
A REST API gives endpoints like:
Method	URL	Purpose
GET	/users	Get all users
GET	/users/1	Get user with id=1
POST	/users	Create a user
PUT	/users/1	Update user id=1
DELETE	/users/1	Delete user id=1
🚀 How to Call an API in JavaScript?
✅ Using fetch() – Built-in Web API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
✅ Using async/await (Modern)
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.error('API failed:', err);
  }
}
getUsers();
✅ Using POST Method to Send Data
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Hello',
    body: 'World',
    userId: 1
  })
})
.then(res => res.json())
.then(data => console.log(data));
🛠 Common API Terms
Term	Meaning
Endpoint	Specific URL to access a resource (/users/1)
Payload	Data sent in a request (usually in POST/PUT)
Header	Meta info (like auth token, content type)
Response	Server’s reply (data, message, status)
Status Code	HTTP code (200, 404, 500) indicating result
JSON	JavaScript Object Notation – common data format

🧠 Real-Life Use Cases
Weather apps use Weather APIs
Login forms use Auth APIs
E-commerce sites use Payment APIs
Social platforms use Post/User APIs

🧪 Bonus: Browser APIs
JavaScript can also access built-in APIs like:
LocalStorage / SessionStorage
Geolocation API
Clipboard API
Notification API

navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});








Browser API:
🔹 1. LocalStorage API
✅ What it is:
Stores key-value data in the browser permanently (until cleared).
Data persists even after the browser is closed or refreshed.
✅ Example:
// Save data
localStorage.setItem("name", "Shaily");
// Get data
const name = localStorage.getItem("name"); // "Shaily"
// Remove data
localStorage.removeItem("name");
// Clear all
localStorage.clear();
⚠️ Note:
Stores only strings. Use JSON.stringify() and JSON.parse() for objects.
🔹 2. SessionStorage API
✅ What it is:
Works just like LocalStorage but data is only kept for the current tab/session.
Once the tab or window is closed, the data is gone.
✅ Example:
sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token")); // "abc123"
🔹 3. Geolocation API
✅ What it is:
Allows access to the user's current physical location.
Asks the user for permission before sharing.
✅ Example:
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});
⚠️ Notes:
Works only in secure (HTTPS) contexts.
Needs user permission via browser popup.
🔹 4. Clipboard API
✅ What it is:
Lets you read from or write to the system clipboard.
Useful for "Copy to Clipboard" buttons.
✅ Example: Copy Text
navigator.clipboard.writeText("Copied text!").then(() => {
  alert("Text copied to clipboard");
});
✅ Example: Paste Text
navigator.clipboard.readText().then(text => {
  console.log("Pasted:", text);
});
⚠️ Notes:
Requires HTTPS and sometimes user interaction (e.g., button click).
🔹 5. Notification API
✅ What it is:
Used to show desktop/browser notifications from the website.
✅ Example:
if (Notification.permission === "granted") {
  new Notification("Hello from JS!");
} else {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Thanks for allowing notifications!");
    }
  });
}
✅ Summary of Browser APIs
API	Purpose
LocalStorage	Store data permanently in browser
SessionStorage	Store data for one session/tab
Geolocation	Access user's current physical location
Clipboard	Read/write to system clipboard
Notification	Show desktop/browser notifications
*/

/* fetch API in JS:
🌐 What is the Fetch API?
The Fetch API is a built-in browser API that allows you to make network requests similar to XMLHttpRequest, but with a simpler and more modern Promise-based syntax.
✅ It’s used to get, post, update, or delete data from web servers or APIs.
✅ Basic Syntax:
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
🔸 1. GET Request (Fetch Data)
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json()) // Convert response to JSON
  .then(data => console.log(data))
  .catch(err => console.log('Fetch failed:', err));
✔️ This makes a GET request by default.
🔸 2. POST Request (Send Data)
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'My Post',
    body: 'Hello World',
    userId: 1
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log('Error:', err));
✔️ Use POST, headers, and body to send data.
✅ What This Code Does
It sends a POST request to:
https://jsonplaceholder.typicode.com/posts
With a JSON body containing:
{
  "title": "My Post",
  "body": "Hello World",
  "userId": 1
}
✅ Step-by-Step Breakdown
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',                      // 1️⃣ HTTP method: POST (used to send data)
  headers: {
    'Content-Type': 'application/json' // 2️⃣ Tells server we're sending JSON data
  },
  body: JSON.stringify({               // 3️⃣ Convert JS object to JSON string
    title: 'My Post',
    body: 'Hello World',
    userId: 1
  })
})
method: 'POST' → We're sending (posting) data to the server.
headers → We tell the server we're sending JSON using:
'Content-Type': 'application/json'
body → We send the actual data.
It must be a string, so we use JSON.stringify(...).
✅ Handling the Response:
.then(res => res.json())               // 4️⃣ Convert response to JS object
.then(data => console.log(data))      // 5️⃣ Use the result
.catch(err => console.log('Error:', err)); // 6️⃣ Handle any network or fetch errors
res.json() parses the response into a usable JavaScript object.
You can now work with the returned data in .then(...).
✅ Sample Output (Simulated)
Since jsonplaceholder.typicode.com is a fake test API, it will echo the data back with a fake id:
{
  title: 'My Post',
  body: 'Hello World',
  userId: 1,
  id: 101 // fake ID generated
}








What should we use to handle the response, and why?
✅ Why Use .then(res => res.json()) After Sending Data?
Even though you are sending data, the server usually responds back with:
A success message
The newly created data
A status (201 Created, etc.)
Or an error response
To read that response, you need to parse it. This is where:
.then(res => res.json())
comes in.
✅ What Does res.json() Do?
It reads the response body stream.
It parses the JSON string into a JavaScript object.
Allows you to use the response in your code:
.then(data => console.log(data))
✅ So, even though you’re sending, you still need res.json() to read the server’s reply in JSON format.
🔁 Analogy:
🔼 You send a form (POST with body)
🔽 Server replies with a receipt (response in JSON)
📦 You unwrap the receipt using res.json() to actually see what's inside
🔸 3. Using async/await (Modern way)
async function getPost() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
getPost();
🔸 4. Common Options in fetch()
fetch(url, {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token' // Optional auth
  },
  body: JSON.stringify(data), // Only for POST/PUT
})
🔸 5. Response Properties
After a fetch, the response object contains useful data:
fetch(url).then(response => {
  console.log(response.status);    // 200, 404, etc.
  console.log(response.ok);        // true if 200–299
  console.log(response.headers);   // Response headers
});
🧠 Common Status Codes
Code	Meaning
200	OK
201	Created
400	Bad Request
401	Unauthorized
404	Not Found
500	Server Error
⚠️ Things to Remember
fetch() doesn't throw errors for HTTP errors (e.g., 404). You must check response.ok yourself.
You often need to parse the response with res.json(), res.text(), etc.
It's asynchronous and returns a Promise.
*/

/* XMLHTTPRequest:
XMLHttpRequest (XHR) is a built-in JavaScript object that allows web pages to communicate with servers without reloading the page. It was introduced long before fetch() and is the foundation of AJAX (Asynchronous JavaScript and XML).
🔹 Purpose of XHR
Send and receive data from a web server.
Communicate asynchronously (without refreshing the page).
Useful for making HTTP requests like:
GET (fetching data)
POST (sending data)
PUT (updating data)
DELETE (removing data)
🔹 Key Features
Supports asynchronous and synchronous requests (though sync is discouraged).
Works in all modern browsers.
Allows interaction with APIs, JSON, XML, or plain text.
Can be used with event listeners or via polling.
🔹 How It Works (Conceptually)
Create an XHR object: new XMLHttpRequest().
Initialize a request using .open(method, url, async).
Send the request using .send(data).
Handle the response using the .onreadystatechange event or other event handlers like .onload.
🔹 Why Use XHR (Historically)
Before ES6 and fetch(), XHR was the primary tool to perform AJAX operations in JavaScript. It enabled dynamic websites and modern app-like behavior long before fetch or third-party libraries like Axios.
🔹 Downsides of XHR
More verbose and complex than fetch().
Requires manual handling of ready states and status codes.
Lacks the Promise-based interface, making chaining and error handling harder.
Cannot be used easily with async/await.
*/

/* HTTP Payload Body:
The HTTP payload body (often just called the "body") is the actual data sent with an HTTP request or response.
In a request, it contains the data you're sending to the server (e.g., form data, JSON, file).
In a response, it contains the data the server sends back (e.g., HTML, JSON, image).
📤 Request Payload Body (Client → Server)
When sending data using methods like POST, PUT, or PATCH, the payload body holds the content.
🔸 Common formats of request body:
JSON → { "name": "Shaily" }
Form Data → name=Shaily&age=25
Multipart → For file uploads
💡 In JavaScript (using fetch):
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'  // tells server it's JSON
  },
  body: JSON.stringify({
    name: 'Shaily',
    age: 25
  })  // ← This is the HTTP payload body
});
📥 Response Payload Body (Server → Client)
When the server sends back a response, the response body may contain:
JSON (API response)
HTML (page content)
Text, images, etc.
In JavaScript, you handle it like this:
fetch('https://api.example.com/user')
  .then(res => res.json()) // Parses the response body (payload)
  .then(data => console.log(data));
🚫 When Payload Body is Not Used
In GET requests, the body is typically ignored by the server.
Only POST, PUT, PATCH, DELETE usually carry a payload body.
*/

/* Unit Testing with Jest:
Unit testing is the practice of testing individual functions or components of your code in isolation, to ensure they behave as expected.
🔧 What is Jest?
Jest is a JavaScript testing framework created by Facebook. It's widely used for testing:
JavaScript logic
React components
Node.js backends

✅ Why use Jest?
Easy setup
Built-in test runner
Built-in assertion library (no need for extra tools)
Supports mocking, async testing, snapshots, coverage reports

🚀 Installing Jest
If you're using Node.js:
npm install --save-dev jest
Add this to package.json:
"scripts": {
  "test": "jest"
}
✏️ Sample Code – math.js
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
module.exports = { add, subtract };
✅ Writing Unit Tests – math.test.js
const { add, subtract } = require('./math');
test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
test('subtracts two numbers', () => {
  expect(subtract(5, 2)).toBe(3);
});
📌 Running the Tests
npm test
Jest will automatically find all files ending in .test.js or .spec.js and run the tests.
⏱ Testing Async Code (Promises)
test('resolves to data', async () => {
  const data = await fetchData(); // Assume this returns a Promise
  expect(data).toBe('result');
});
🧪 Mocking Functions
Jest can mock functions, modules, or timers for isolated testing.
const mockFn = jest.fn();
mockFn('hello');
expect(mockFn).toHaveBeenCalledWith('hello');

✅ What is Mocking in Jest?
Mocking means replacing real functions with fake (mock) functions during tests so you can:
Track how they were called
Control what they return
Test in isolation (without real side effects)
✅ Example Code:
const mockFn = jest.fn();        // 1. Create a mock function
mockFn('hello');                 // 2. Call it with 'hello'
expect(mockFn).toHaveBeenCalledWith('hello'); // 3. Assert it was called correctly
✅ Step-by-Step Explanation
🔹 1. const mockFn = jest.fn();
Creates a mock function using jest.fn()
It’s a stand-in that doesn’t do anything by default, but records how it was used
You can call it just like a normal function
🔹 2. mockFn('hello');
Call the mock function with 'hello'
Jest tracks:
That it was called
What arguments were passed
🔹 3. expect(mockFn).toHaveBeenCalledWith('hello');
This is the test assertion
It checks that:
mockFn was called at least once
With 'hello' as its argument
✅ If it was, the test passes.
❌ If not, the test fails.

Jest Functions Overview
📁 File 1: math.js
This is a basic JavaScript file with two functions:
function add(a, b) {
  return a + b;
}
function getUser() {
  return { name: "Shaily", age: 25 };
}
module.exports = { add, getUser };
📁 File 2: math.test.js
This is your test file using Jest:
const { add, getUser } = require('./math');
// 🔸 test() defines a test case
test('adds 2 + 3 to equal 5', () => {
  // 🔸 expect() sets up the value you're testing
  // 🔸 toBe() checks exact value (like ===)
  expect(add(2, 3)).toBe(5);
});
// 🔸 toEqual() checks deep equality (for objects)
test('returns user object', () => {
  expect(getUser()).toEqual({ name: "Shaily", age: 25 });
});
// 🔸 .not.toBe() checks inequality
test('2 + 2 is not 5', () => {
  expect(add(2, 2)).not.toBe(5);
});
✅ To run the test
If Jest is installed, run:
npm test
Or:
npx jest
🧠 What Each Jest Function Does:
Function	    What it does
test()	        Defines a test case
expect(value)	Sets up the actual value to test
.toBe(expected)	Checks if value === expected
.toEqual(expected)	Checks deep equality (use for comparing arrays/objects)
.not.toBe()	    Asserts that the value is not equal to the expected value
*/

/* Debugging in JS:
🔹 1. console.log() Statements
The simplest and most widely used tool.
let name = "Shaily";
console.log("Name is:", name);
Use it to:
Print variable values
Track function calls
See flow of execution
Also available:
console.error()
console.warn()
console.table()
🔹 2. Browser Developer Tools (DevTools)
Every modern browser (Chrome, Firefox, Edge) has DevTools built in.
How to open:
Right-click → Inspect → Console / Sources tab
Or press F12 or Ctrl+Shift+I
Features:
See errors in the Console tab
Step through your code line-by-line in the Sources tab
Set breakpoints to pause execution
Watch variables in real-time
Inspect the Call Stack to see the path your function took
🔹 3. Breakpoints
A breakpoint tells the browser to pause code execution at a specific line.
How:
Go to the Sources tab
Click on the line number to set a breakpoint
Refresh or re-run the code
Execution will pause at that line so you can inspect variables
🔹 4. debugger Statement
You can write a debugger; statement in your JS code to automatically trigger DevTools.
function test() {
  let x = 10;
  debugger; // pauses here
  let y = x + 5;
  return y;
}
test();
When DevTools is open, the browser will pause on the debugger; line.
🔹 5. Stack Traces and Error Messages
When an error occurs, JS shows:
The error type (e.g., TypeError, ReferenceError)
A message (e.g., x is not defined)
The file name and line number
A stack trace (the list of function calls that led to the error)
Use this to trace where the bug happened.
🔹 6. Linting Tools
Linters like ESLint help catch issues before you run the code.
Example:
const x = 5
console.log(x)
A linter will highlight the missing semicolons or unused variables.
🔹 7. Try-Catch Blocks
Used to catch and handle errors gracefully, especially for risky code like API calls.
try {
  let result = riskyFunction();
} catch (error) {
  console.error("Something went wrong:", error);
}
*/

/* Performance Optimization and Security in JS:
🚀 JavaScript Performance Optimization
Performance optimization in JavaScript helps make your app faster, more responsive, and efficient. Here's how you can improve performance:
🔹 1. Avoid Unnecessary DOM Manipulation
Accessing and modifying the DOM is expensive.
Minimize direct DOM updates; use batch updates.
// Instead of this inside a loop:
element.innerHTML += `<li>${item}</li>`;
// Do this:
let html = '';
items.forEach(item => html += `<li>${item}</li>`);
element.innerHTML = html;
🔹 2. Debounce or Throttle Events
Optimize high-frequency events like scroll, resize, keyup using debounce or throttle to limit function calls.
🔹 3. Use requestAnimationFrame() for animations
It syncs updates with the browser's refresh rate.
🔹 4. Avoid Memory Leaks
Clear intervals/timeouts if no longer needed.
Remove event listeners when elements are removed.
Watch for large objects that stay in memory.
🔹 5. Efficient Loops and Data Structures
Use for instead of forEach if speed is critical.
Choose the right data structure (Set, Map for large collections).
🔹 6. Use Web Workers for Heavy Computation
Offload CPU-heavy tasks to a Web Worker so the main thread doesn't freeze.
🔹 7. Minify and Bundle Code
Use tools like Webpack or Vite to:
Minify JS (remove whitespace/comments)
Bundle multiple files for fewer network requests

🔒 JavaScript Security Best Practices
JavaScript is exposed to the browser, so it’s vulnerable to attacks. Here’s how to secure it:
🔹 1. Avoid eval()
Never use eval() — it executes any string as JS, which opens your site to code injection.
✅ eval() in JavaScript
eval() is a built-in JavaScript function that evaluates a string as JavaScript code and executes it immediately.
🔹 Syntax:
eval(string)
string: A string of valid JavaScript code
🧪 Example:
const x = 10;
const result = eval('x + 5');
console.log(result); // 15
Here, 'x + 5' is a string, but eval() executes it as if it's real code, and returns 15.
⚠️ Why eval() Is Dangerous (Avoid It!)
Using eval() is strongly discouraged because:
🔥 Problem	❌ Why it’s bad
❗ Security risk	Can execute arbitrary malicious code from input
🐢 Performance	JavaScript engines can’t optimize eval
🧠 Hard to debug	Makes code hard to understand and maintain
🚫 Bad Practice Example:
const userInput = "alert('Hacked!')";
eval(userInput); // ❌ dangerous if input is untrusted
✅ Safe Alternative Example:
Instead of this:
eval("x = 5");
Do this:
const x = 5;

🔹 2. Escape User Input
Sanitize any user input you display in the DOM to prevent XSS (Cross-Site Scripting).
Example of a bad practice:
element.innerHTML = `<div>${userInput}</div>`; // Risky!
🔹 3. Use HTTPS
Always serve JS files over HTTPS to prevent MITM (Man-in-the-Middle) attacks.
🔹 4. Limit Sensitive Data in JS
Don’t store tokens, secrets, or passwords in frontend JavaScript — it’s visible to anyone in DevTools.
🔹 5. Content Security Policy (CSP)
Set up a CSP header to restrict what scripts can run on your page.
Example:
Content-Security-Policy: default-src 'self'; script-src 'self'
🔹 6. Use strict mode
"use strict";
Enables cleaner syntax and blocks insecure actions like accidental globals.
🔹 7. Validate Inputs on Server Side
Client-side validation is good for user experience, but it’s not secure alone. Always validate again on the server.
*/

/* Lazy Loading in JS:
Lazy loading is a technique where resources are loaded only when needed, rather than loading everything up front.
It improves:
⚡ Performance (faster initial load)
🧠 Efficiency (only loads what the user interacts with)
🔸 Where Lazy Loading is Used in JavaScript?
Images / Media
Modules (code splitting)
Components (e.g., in React)
Data (API calls when scrolling)

✅ 1. Lazy Loading Images (HTML + JS)
🔹 HTML (with loading="lazy"):
<img src="image.jpg" loading="lazy" alt="..." />
✅ Loads the image only when it enters the viewport.

✅ 2. Lazy Loading JS Modules (Code Splitting)
In modern JS (ES2020+ or via bundlers like Webpack), you can dynamically import modules only when needed.
🔹 Syntax:
button.addEventListener('click', async () => {
  const module = await import('./heavyModule.js');
  module.run();
});
✅ This will only load heavyModule.js when the user clicks the button.
✅ 3. Lazy Loading React Components
import React, { lazy, Suspense } from 'react';
const LazyComponent = lazy(() => import('./MyComponent'));
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LazyComponent />
    </Suspense>
  );
}
✅ Only loads MyComponent when it’s rendered.
✅ 4. Lazy Loading Data (e.g., Infinite Scroll)
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreData(); // fetch more data from server
  }
});
✅ Loads more data only when user reaches bottom of the page.
*/