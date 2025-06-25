/* Data Types:
JavaScript has two main categories of data types:
🔹 1. Primitive Data Types
These are the basic, immutable data types in JavaScript.

Data Type	Description	    Example
String	    Textual data	"hello", 'abc'
Number	    Numeric values (integers, floats)	42, 3.14, -1
BigInt	    Large integers beyond Number limits	12345678901234567890n
Boolean	    Logical value: true or false	true, false
undefined	A variable declared but not assigned a value	   let x; → x === undefined
null	     Intentional absence of any object value	let y = null;
Symbol	    Unique, immutable identifier (used in objects)	let id = Symbol("id")

🔸 All primitive types are immutable (their value cannot be changed once created).

🔸 2. Non-Primitive (Reference) Data Types
These hold collections or more complex data and are stored by reference.

Data Type	    Description	Example
Object	        Collection of key-value pairs	{ name: "Alice", age: 25 }
Array	        Ordered list of values	[1, 2, 3]
Function	    Reusable block of code	function greet() {}
Date	        Date and time values	new Date()
RegExp	        Regular expressions	/abc/
Map/Set	        Collections with unique keys or values	new Map(), new Set()

✅ Type Detection
You can use typeof to check a variable’s type:
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"   ← quirk in JS!
typeof Symbol()     // "symbol"
typeof [1, 2, 3]    // "object"   ← arrays are objects
typeof {a:1}        // "object"
typeof function(){} // "function"
🔸 Note: typeof null returns "object" — this is a known historical bug in JavaScript.
*/

/* Operators in JS:
🔹 1. Arithmetic Operators
Used to perform basic math operations.
Operator	Description	Example	Result
+	Addition	5 + 2	7
-	Subtraction	5 - 2	3
*	Multiplication	5 * 2	10
/	Division	5 / 2	2.5
%	Modulus (remainder)	5 % 2	1
**	Exponentiation	2 ** 3	8
++	Increment	let x = 1; x++	2
--	Decrement	let x = 2; x--	1

🔸 2. Assignment Operators
Used to assign values to variables.
Operator	Description	Example	Equivalent To
=	Assign	x = 5	-
+=	Add and assign	x += 2	x = x + 2
-=	Subtract and assign	x -= 2	x = x - 2
*=	Multiply and assign	x *= 2	x = x * 2
/=	Divide and assign	x /= 2	x = x / 2
%=	Modulus and assign	x %= 2	x = x % 2
**=	Exponent and assign	x **= 2	x = x ** 2

🔹 3. Comparison Operators
Used to compare values and return true or false.
Operator	Description	Example	Result
==	Equal (loose)	5 == '5'	true
===	Strict equal (type + value)	5 === '5'	false
!=	Not equal (loose)	5 != '5'	false
!==	Strict not equal	5 !== '5'	true
>	Greater than	5 > 3	true
<	Less than	5 < 3	false
>=	Greater than or equal	5 >= 5	true
<=	Less than or equal	5 <= 3	false

🔸 4. Logical Operators
Used to combine boolean expressions.
Operator	Description	Example	Result
&&	Logical AND	true && false	false
`		`	Logical OR
!	Logical NOT	!true	false

🔹 5. Bitwise Operators (advanced)
Works on binary representations of numbers.
Operator	Description
&	AND
`	`
^	XOR
~	NOT
<<	Left shift
>>	Right shift
>>>	Unsigned right shift

🔸 6. String Operator
Only + is used:
"Hello" + " World" // "Hello World"

🔹 7. Ternary Operator
Shorthand for if...else:
let result = (age >= 18) ? "Adult" : "Minor";

🔸 8. Type Operators
Used for checking type or object properties.
Operator	Description	Example
typeof	Returns type of a variable	typeof 123 → "number"
instanceof	Checks if an object is instance of a constructor	x instanceof Array

🔹 9. Optional Chaining & Nullish Coalescing
Operator	Description	Example
?.	        Optional chaining (safe property access)	user?.address?.city
??	        Nullish coalescing (null or undefined)	value ?? "default"

✅ 1. Optional Chaining (?.)
Used to safely access deeply nested properties without throwing an error if a part of the chain is null or undefined.
🔸 Without Optional Chaining:
let user = {};
console.log(user.address.city); // ❌ Error: Cannot read property 'city' of undefined
🔸 With Optional Chaining:
let user = {};
console.log(user.address?.city); // ✅ Output: undefined (no error)
💡 Real-World Example:
let userProfile = {
  name: "Alice",
  address: {
    city: "Delhi",
    zip: "110001"
  }
};
console.log(userProfile.address?.city);  // ✅ "Delhi"
console.log(userProfile.contact?.phone); // ✅ undefined (contact is undefined, but no crash)
🔹 Why use it? To avoid long if checks:
// Instead of:
if (user && user.address && user.address.city) {
  console.log(user.address.city);
}
// You can write:
console.log(user?.address?.city);
✅ 2. Nullish Coalescing (??)
Returns the right-hand value only if the left-hand value is null or undefined.
This is different from || (which also treats 0, "", false as falsy).
🔸 Example:
let name = null;
let userName = name ?? "Guest";
console.log(userName); // ✅ "Guest"
🔸 Another Example:
let input = 0;
let result = input ?? 10;
console.log(result); // ✅ 0 (because 0 is not null/undefined)
🔸 Comparison with ||:
let input = 0;
console.log(input || 10); // ❌ 10 (treats 0 as false)
console.log(input ?? 10); // ✅ 0 (only checks null/undefined)
*/

/* Browser Console:
The browser console is a powerful tool built into every modern web browser that allows you to interact with, debug, and inspect JavaScript code directly in your web page.
🧩 What is the Browser Console?
The Console is part of the Developer Tools in browsers like Chrome, Firefox, Edge, and Safari.
🔹 How to Open It:
Chrome/Edge: Press Ctrl + Shift + J (Windows) or Cmd + Option + J (Mac)
Firefox: Press Ctrl + Shift + K or F12
Right-click → Inspect → Console Tab

🛠️ What Can You Do in the Console?
✅ 1. Run JavaScript Code Directly
You can type JavaScript code and press Enter to execute:
2 + 2          // Output: 4
console.log("Hello")  // Output: Hello
✅ 2. Debug JavaScript
View errors, warnings, and logs
Check the call stack if an error occurs
Test parts of your code without editing files

🔍 Common console Methods
Method	Description	Example
console.log()	Logs general output	console.log("Hello World")
console.warn()	Logs a warning (yellow)	console.warn("This is a warning")
console.error()	Logs an error (red)	console.error("Something went wrong!")
console.info()	Logs informational message	console.info("Info message")
console.table()	Displays data as a table	console.table([{name:"A"},{name:"B"}])
console.clear()	Clears the console	console.clear()
console.assert()	Logs error if condition is false	console.assert(1 === 2, "Not Equal!")
console.group()	Starts a group of messages	-
console.groupEnd()	Ends a group	-
console.time()	Starts timer for code execution	console.time("t")
console.timeEnd()	Ends timer and logs elapsed time	console.timeEnd("t")
*/

/* Conditionals:
In JavaScript, conditionals (control structures) are used to make decisions in code, based on whether certain conditions are true or false. The most common ones are:

✅ 1. if Statement
Used to run code only if a condition is true.
if (condition) {
  // code runs if condition is true
}
🔸 Example:
let age = 20;
if (age >= 18) {
  console.log("You are an adult");
}
✅ 2. if...else Statement
Executes one block if the condition is true, another if it’s false.
if (condition) {
  // runs if condition is true
} else {
  // runs if condition is false
}
🔸 Example:
let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella");
} else {
  console.log("No umbrella needed");
}
✅ 3. if...else if...else Statement
Checks multiple conditions in sequence.
if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition2 is true
} else {
  // runs if none are true
}
🔸 Example:
let score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
✅ 4. switch Statement
Used to select one of many code blocks based on a value.
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block if no case matches
}
🔸 Example:
let day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Wednesday":
    console.log("Midweek");
    break;
  case "Friday":
    console.log("Weekend starts");
    break;
  default:
    console.log("Regular day");
}
🔔 Important:
break prevents falling through to the next case.
default is optional and runs when no case matches.
*/

/* Loops in JS:
🔁 1. for loop
Used when the number of iterations is known.
for (initialization; condition; increment) {
  // code to run each loop
}
🔸 Example:
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
🧠 This loop runs 5 times: i = 1 to i = 5.

🔁 2. while loop
Used when the number of iterations is not fixed, but the condition is known.
while (condition) {
  // code runs while condition is true
}
🔸 Example:
let i = 1;
while (i <= 3) {
  console.log("Number:", i);
  i++;
}
🔁 3. do...while loop
Similar to while, but runs at least once, even if condition is false.
do {
  // code runs once first
} while (condition);
🔸 Example:
let i = 1;
do {
  console.log("Do while:", i);
  i++;
} while (i <= 2);
🔁 4. for...of loop
Used to loop over iterable objects like arrays, strings, etc.
for (let item of iterable) {
  // use item
}
🔸 Example:
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
🧠 Best for arrays, strings, sets, maps.

🔁 5. for...in loop
Used to loop over object keys (properties).
for (let key in object) {
  // use key and object[key]
}
🔸 Example:
let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
🧠 Best for objects, not arrays (order is not guaranteed).

✅ Summary Table
Loop	    Use For	Runs At Least Once	Iterable Types
for	        Known count	❌	All (with index)
while	    Unknown count, condition-based	❌	All
do...while	Run once, then condition check	✅	All
for...of	Array/values in iterable	❌	Arrays, strings
for...in	Object properties (keys)	❌	Objects

🔍 for...in vs for...of in JavaScript
Feature	for...in	for...of
✅ Iterates over	Enumerable properties (keys)	Iterable values (elements)
🔹 Used with	Objects (mostly)	Arrays, Strings, Maps, Sets, etc.
🔁 Iterates	Property names (keys)	Actual values
📦 Works on	Objects, arrays	Arrays, strings, sets, maps
❗ Use case	When you want keys or indexes	When you want actual values

✅ for...in – Iterate over object keys
let person = {
  name: "Alice",
  age: 25,
  city: "Delhi"
};
for (let key in person) {
  console.log(key, ":", person[key]);
}
🔸 Output:
name : Alice
age : 25
city : Delhi
key is the property name ("name", "age", "city")
Use person[key] to get the corresponding value.

🔸 Also works with arrays, but returns the index:
let arr = ["a", "b", "c"];
for (let i in arr) {
  console.log(i, ":", arr[i]);
}
// Output: 0 : a, 1 : b, 2 : c
⚠️ Not recommended for arrays because:
Order is not guaranteed
It might include inherited properties

✅ for...of – Iterate over values
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
🔸 Output:
apple
banana
cherry
fruit directly gives the value of each array item.
Works on any iterable: arrays, strings, maps, sets, etc.
let greeting = "Hi";
for (let char of greeting) {
  console.log(char);
}
// Output: H, i
*/

/* Rest Parameters:
✅ What Are Rest Parameters?
The rest parameter syntax (...) allows a function to accept an indefinite number of arguments as an array.
function example(...args) {
  console.log(args); // args is an array
}
📌 Why Use Rest Parameters?
They let you:
Accept any number of arguments in a clean and readable way
Group extra arguments into a single array
Replace the old arguments object with a more modern and flexible tool

🔸 Basic Example:
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2));        // 3
console.log(sum(1, 2, 3, 4));  // 10
🧠 How It Works:
...numbers collects all passed arguments into an array: [1, 2, 3, 4]

🔸 With Fixed + Rest Parameters
You can combine fixed and rest parameters, but rest must be last.
function greet(greeting, ...names) {
  for (let name of names) {
    console.log(`${greeting}, ${name}`);
  }
}
greet("Hello", "Alice", "Bob", "Charlie");
// Hello, Alice
// Hello, Bob
// Hello, Charlie
🔁 Looping Through Rest Parameters
Since rest parameters are arrays, you can:
Use for...of
Use .map(), .reduce(), .forEach(), etc.
function double(...nums) {
  return nums.map(n => n * 2);
}
console.log(double(1, 2, 3)); // [2, 4, 6]
🔎 Rest Parameters vs arguments object
Feature	arguments	...rest
Array-like	✅ Yes (but not real array)	✅ Real array
Supports array methods	❌ No	✅ Yes
Arrow functions	❌ Not available	✅ Works fine
Readable syntax	❌ Not clear	✅ Clean & modern
🧪 Example:
js
function oldWay() {
  console.log(arguments); // [1, 2, 3] (array-like, no map/reduce)
}
function newWay(...args) {
  console.log(args); // [1, 2, 3] (true array)
}
💡 Use Cases
Variable-length argument functions
function logAll(...messages) {
  messages.forEach(msg => console.log(msg));
}
Math utilities (sum, average, max)
Wrappers and decorators
Combining or passing multiple arguments

⚠️ Things to Remember
Only one rest parameter allowed
It must be the last parameter
function wrong(...args, other) {} // ❌ Syntax Error
*/

/* Template Literals:
🔸 What Are Template Literals?
Template literals are strings enclosed by backticks (`) instead of quotes (' or "), and they allow string interpolation using ${}.
✅ When Are Template Literals Used?
Use them when:
You want to insert variables inside a string:
let name = "Shaily";
let greeting = "Hello";
console.log(`${greeting}, ${name}`); // → Hello, Shaily
You want multi-line strings:
let message = `This is line one.
This is line two.`;
console.log(message);
You want to include expressions:
let a = 5, b = 10;
console.log(`The sum is ${a + b}`); // → The sum is 15
🆚 Without Template Literals:
Using traditional string concatenation:
console.log(greeting + ", " + name); // More clumsy and harder to read
🔁 Summary
Purpose	Traditional Way	Template Literal
Insert variable	"Hello, " + name	`Hello, ${name}`
Multi-line	"Line1\nLine2"	`Line1\nLine2`
Expression	"Sum: " + (a + b)	`Sum: ${a + b}`
*/

/* IIFE:
✅ What is an IIFE?
IIFE stands for:
Immediately Invoked Function Expression
It’s a function that is:
Defined
Executed immediately after creation
(function() {
  // code inside
})();
or
(() => {
  // arrow function IIFE
})();
🔸 Why Wrap in Parentheses?
(function() { ... })();
Wrapping in () makes the function a function expression (not declaration).
The second () invokes the function immediately.
Without parentheses, this would be treated as a function declaration, which must have a name.
🔁 Simple Example:
(function () {
  console.log("I am IIFE");
})();  // ✅ Output: I am IIFE
Or using arrow function:
(() => {
  console.log("Arrow IIFE");
})();  // ✅ Output: Arrow IIFE
🧠 Use Cases of IIFE
✅ 1. Avoid polluting global scope
let counter = 0;
(function () {
  let counter = 5; // different scope
  console.log("Inside IIFE:", counter);
})();
console.log("Outside IIFE:", counter);
✅ 2. Create private variables
let result = (function () {
  let secret = "hidden";
  return secret;
})();
console.log(result); // "hidden"
// secret is not accessible outside
✅ 3. Run code only once
Useful for one-time setup logic:
(function () {
  console.log("Setup once");
})();
🔁 IIFE with Parameters
(function (name) {
  console.log("Hello", name);
})("Shaily");
✅ Output:
Hello Shaily
*/

/* Memoization and Lodash:
✅ 1. Memoization in JavaScript
🔹 What is Memoization?
Memoization is an optimization technique that caches the results of expensive function calls so that the same inputs don’t re-compute the result—instead, the function returns the cached output.
🔸 Why use it?
Speeds up repeated function calls
Common in heavy calculations or recursive functions

🔧 Example:
function slowSquare(n) {
  console.log("Calculating...");
  return n * n;
}
const memoizedSquare = (() => {
  let cache = {};
  return function(n) {
    if (cache[n]) {
      return cache[n]; // from cache
    } else {
      let result = n * n;
      cache[n] = result; // save to cache
      return result;
    }
  };
})();
console.log(memoizedSquare(5)); // → 25 (Calculates)
console.log(memoizedSquare(5)); // → 25 (From cache)

🔍 Breakdown:
The IIFE executes immediately — yes!
BUT it doesn't calculate squares immediately.
It returns a function — the actual memoizedSquare function — which you will call later.
So this happens:
(() => { ... })() is an IIFE → runs once
Inside it:
A cache object is created
A new function is returned (not executed)
That returned function is assigned to memoizedSquare
✅ So what is memoizedSquare?
It is now the function:
function(n) {
  if (cache[n]) {
    return cache[n];
  } else {
    let result = n * n;
    cache[n] = result;
    return result;
  }
}
And this function remembers the cache created in the IIFE — thanks to closure.

✅ 2. Lodash in JavaScript
🔹 What is Lodash?
Lodash is a powerful JavaScript utility library that helps with:
Array & object manipulation
Debouncing, throttling
Cloning
Memoization
Data transformation

🔧 How to use Lodash:
Install it using npm:
npm install lodash
Then import:
import _ from 'lodash';
🔸 Useful Lodash Functions
Function	    Purpose	Example
_.cloneDeep()	Deep copy of objects/arrays	let copy = _.cloneDeep(obj)
_.debounce()	Limits function calls over time	Button clicks, input handlers
_.throttle()	Limits function calls per interval	Scroll or resize handlers
_.memoize()	    Memoizes any function	let memoFn = _.memoize(myFn)
_.uniq()	    Removes duplicates from array	_.uniq([1,2,2,3]) → [1,2,3]
_.get()	        Safe nested property access	_.get(obj, 'a.b.c', 'default')

✅ Example: Lodash Memoize
import _ from 'lodash';
function expensiveCalc(n) {
  console.log("Calculating...");
  return n * n;
}
const memoizedCalc = _.memoize(expensiveCalc);
console.log(memoizedCalc(10)); // Calculates
console.log(memoizedCalc(10)); // Uses cache
*/

/* Local Storage:
✅ Local Storage in JavaScript
localStorage is a built-in browser feature that allows you to store key-value pairs in the user's browser with no expiration time. The data stays even after the page or browser is closed and reopened.
📦 Features of localStorage
Feature	Description
Persistence	Survives page reloads and browser restarts
Size limit	~5 to 10 MB (per domain)
Data type	Stores everything as strings
Scope	Specific to the origin (domain + port)
Synchronous	Blocking (not async like IndexedDB)

📌 Syntax
// ✅ Set item
localStorage.setItem("key", "value");
// ✅ Get item
localStorage.getItem("key");
// ✅ Remove item
localStorage.removeItem("key");
// ✅ Clear all items
localStorage.clear();
// ✅ Check length
localStorage.length;
🔸 Example
// Store user name
localStorage.setItem("username", "Shaily");
// Retrieve user name
let name = localStorage.getItem("username");
console.log(name); // Output: "Shaily"
// Remove it
localStorage.removeItem("username");
// Clear everything
localStorage.clear();
🧠 Important: Store Objects Safely
Since localStorage stores only strings, you must convert objects using JSON.stringify() and JSON.parse().
✅ Storing an object:
let user = {
  name: "Shaily",
  age: 22
};
localStorage.setItem("user", JSON.stringify(user));
✅ Retrieving the object:
let userData = JSON.parse(localStorage.getItem("user"));
console.log(userData.name); // Shaily
🔐 Is localStorage secure?
✅ It's sandboxed to the domain
❌ But it's not encrypted, so don’t store sensitive info (e.g., passwords, tokens)
*/

/* Session Storage:
✅ Session Storage in JavaScript
sessionStorage is a type of web storage that allows you to store key-value data in the browser for the duration of the page session.
📦 Features of sessionStorage
Feature	Description
Persistence	Only during the current tab session (cleared on tab close)
Storage Type	Key-value pairs (string only)
Size Limit	~5MB (varies slightly by browser)
Scope	Specific to the tab + domain
Accessed By	sessionStorage.getItem(), setItem(), etc.

📌 Syntax
// ✅ Set item
sessionStorage.setItem("key", "value");
// ✅ Get item
sessionStorage.getItem("key");
// ✅ Remove item
sessionStorage.removeItem("key");
// ✅ Clear all items
sessionStorage.clear();
🔸 Example
// Save a value
sessionStorage.setItem("username", "Shaily");
// Get the value
let name = sessionStorage.getItem("username");
console.log(name); // "Shaily"
// Remove it
sessionStorage.removeItem("username");
// Clear everything
sessionStorage.clear();
🧠 Like localStorage, sessionStorage stores only strings
To store objects or arrays, use JSON.stringify() and JSON.parse().
✅ Store object
let user = { name: "Shaily", loggedIn: true };
sessionStorage.setItem("user", JSON.stringify(user));
✅ Retrieve object
let userData = JSON.parse(sessionStorage.getItem("user"));
console.log(userData.name); // Shaily
🧪 Use Case: Temporary Auth or Form State
// Saving login token temporarily
sessionStorage.setItem("authToken", "abc123");
// Auto-fill a form with remembered value (until tab is closed)
sessionStorage.setItem("email", "shaily@email.com");
*/

/* Cookies:
🍪 What Are Cookies?
Cookies are small pieces of data (usually less than 4KB) stored on the user's device by the browser. They are used for:
✅ Session management (login, auth)
✅ Personalization (user preferences)
✅ Tracking (analytics, advertising)
They are stored as name-value pairs and sent to the server with every HTTP request for the matching domain.
🔧 Setting and Getting Cookies in JavaScript
You interact with cookies using the document.cookie API.
✅ Set a Cookie
document.cookie = "username=Shaily";
This sets a basic cookie with the name username and value Shaily.
✅ Add Expiry to Cookie
document.cookie = "username=Shaily; expires=Fri, 28 Jun 2025 12:00:00 UTC";
expires sets the expiration date. If not set, it becomes a session cookie (deleted when the tab is closed).
✅ Set Cookie with Path
document.cookie = "theme=dark; path=/";
path=/ makes the cookie available to all pages in the domain.
🔎 Read Cookies
console.log(document.cookie);
Returns a single string of all cookies for the current page:
"username=Shaily; theme=dark"
To read specific cookies, you usually need to parse this string manually.

❌ Delete a Cookie
You delete a cookie by setting its expiration date in the past:
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
🧠 Cookie Attributes
Attribute	Description
name=value	Required. The name and value of the cookie.
expires=...	When the cookie should expire.
path=...	The URL path for which the cookie is valid.
domain=...	The domain the cookie is accessible from.
secure	Send only over HTTPS.
HttpOnly	Prevents JavaScript from accessing it (set via HTTP header).
SameSite	Limits cross-site request sharing (Lax, Strict, None).
*/