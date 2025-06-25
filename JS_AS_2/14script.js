document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e);
    if(e.target.dataset.uppercase != undefined)
    {
        e.target.value = e.target.value.toUpperCase();
    }
})
// we have made this once, but jitne input boxes me chahiye utne me daal sakte h, #form(parent div).

// Limitation : all the events(blur, focus, resizing) are not bubbled up, e.stopPropagation() will not work.

/* 🔄 Event Delegation in JavaScript
Event Delegation is a technique where a single event listener is added to a common ancestor (usually a parent), instead of adding listeners to multiple child elements.
It relies on event bubbling, where an event triggered on a child bubbles up to its parent(s).

✅ Why Use Event Delegation?
✅ Performance: Fewer event listeners = better memory usage and performance.
✅ Dynamic Elements: It works for elements added to the DOM later.
✅ Simplified Code: One listener instead of many.

🧪 Example
HTML:
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
JavaScript (Event Delegation):
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
🔍 What happens here:
You attach one listener to <ul> instead of each <li>.
When any <li> is clicked, the event bubbles up to the <ul>.
The handler checks if e.target is an LI, then runs logic.

🧠 Use Case Example
Imagine a dynamic to-do list:
<ul id="todos"></ul>
<button onclick="addTodo()">Add Todo</button>

document.querySelector("#todos").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove(); // Delete todo on click
  }
});

function addTodo() {
  const li = document.createElement("li");
  li.textContent = "New Task";
  document.getElementById("todos").appendChild(li);
}
✅ New tasks can be clicked and removed — even though no listeners were added to them directly.
*/

/* 🧠 Events in JavaScript
Events are actions or occurrences that happen in the browser and can be detected and responded to using JavaScript.
They’re at the heart of interactive web applications.

🔹 Common Examples of Events
Event Type	             Description
click	                   Mouse click
mouseover	               Mouse enters an element
keydown	                 A key is pressed
submit	                 A form is submitted
load	                   Page or resource has loaded
resize	                 Window is resized
input	                   Input value changes (in <input>)
scroll	                 Element or page is scrolled

🔧 Basic Syntax to Handle Events
element.addEventListener("eventType", callbackFunction);
✅ Example:
document.querySelector("#btn").addEventListener("click", () => {
  alert("Button clicked!");
});
📦 Types of Event Models
1. Inline HTML Events (Not recommended)
<button onclick="alert('Clicked')">Click Me</button>
2. DOM Level 0 Events
btn.onclick = function() {
  console.log("Clicked");
};
3. DOM Level 2 Events (Recommended)
btn.addEventListener("click", () => {
  console.log("Clicked");
});
📌 Event Object
Every event callback receives an event object with useful info:
element.addEventListener("click", function(e) {
  console.log(e.target);   // Element clicked
  console.log(e.type);     // "click"
});
🔄 Event Propagation
Events move through the DOM in 3 phases:
Capturing Phase (document → target)
Target Phase
Bubbling Phase (target → document)
By default, addEventListener listens during bubbling.
element.addEventListener("click", handler, true); // Capturing
🛑 Stopping Events
e.stopPropagation(); // Stops bubbling
e.preventDefault();  // Prevents default behavior (e.g., form submission)
*/