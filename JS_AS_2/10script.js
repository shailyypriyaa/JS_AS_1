// Throttling 
// generally used for performance optimisation, rate limiting the function call or func execution, suppose we have a button and we have added onClick event to that, which calls an api when clicked, ||||||||||||||||||||, this is how api calls happen, there could be scenarios where we have to make api call at each click, but suppose we have to limit the rate, we can use throttling on onClick event, which will hinder the call of this onClick method, suppose the func call happens at the first event click, throttling will delay this FC for a certain duration of time(500ms), toh ek baar hua toh next 500ms ke baad hi hoga.

// suppose we have a function which is expensive(some api calls etc.), every time we resize, expensive function is called, when the winow is resized, 100 times the func is called, so we should have a betterexpensive func.
// inside throttle func, we call the func every time our limit is reached, using flag.
const expensive = () => {
    console.log("Expensive");
}
// window.addEventListener("resize", expensive);
window
.addEventListener("resize", betterExpensive);
const betterExpensive = throttle(expensive, limit);

const throttle = (func, limit) => {
    let flag = true;
    return function () {
        if(flag) {
            func();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}
// jb bhi flag T hoga, func call hoga, initially, flag is T, func() call hua, then flag F hogya, then setT with its attached CB is stored somewhere which executes after limit is reached, maan lo 3s, fir 3s ke baad flag wapas T hoga and again func() call hoga, and this repeats now."flag" is made closure because we dont want to keep that inside function(), if we do that we'll have to initialise it again and again.

// let context = this, args = arguments; These store the current context (this) and any arguments passed to the function. Just a way to remember who called the function and with what data.

/* fn.apply(context, args);
This line is very important in debounce (and throttle) implementations. Here's what it does:
💡 Purpose: To call the original function (fn) with the correct this value (context) and the original arguments (args) that were passed when the debounced function was triggered.
📖 Breakdown:
✅ fn
This is the original function you passed into your debounce function.
Example:
function sayHello(name) {
  console.log("Hello", name);
}
const debouncedSayHello = debounce(sayHello, 300);
Here, fn is sayHello.
✅ apply(context, args)
context is what this should refer to when fn is called.
args is an array-like object containing arguments passed to fn.
So fn.apply(context, args) means:
➡️ "Call fn, and while calling, set this = context, and pass the original arguments (args) to it."
🤔 Why not just do fn()?
If you did:
fn();
You'd lose this context — for example, inside a class or DOM event handler.
You'd lose the original arguments passed when the user triggered the event.
*/

/* ✅ What is Throttling?
Throttling is a technique used to limit how often a function runs, just like debouncing — but with a key difference:
🔁 Throttling ensures a function is called at most once every X milliseconds, no matter how many times the event fires.
🔍 Real-World Analogy
Think of a tap that releases water once every second, even if you keep twisting the handle rapidly.
That’s throttling — it controls the flow of function calls.
🧾 Example Use Cases
Scrolling (run logic every 200ms while user scrolls)
Mouse move tracking
Resize event
Button spam protection
Continuous sensor or API data reading

💻 Throttle Function Code
function throttle(fn, delay) {
  let last = 0;
  return function () {
    const now = new Date().getTime();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, arguments);
    }
  };
}
// last time when fn was called is 0 initially, now me current time hai, if now - last delay se jyada h, toh fn call hoga.  
✅ How to Use It
function log() {
  console.log("Scrolled!", new Date().toLocaleTimeString());
}
window.addEventListener("scroll", throttle(log, 1000));
Even if the user scrolls 1000 times per second, log() runs only once every second.
🧠 Throttle vs Debounce
Feature	             Throttle	            Debounce
When it runs	  At regular intervals during events	Only after the event stops
Use case	      Scroll, resize, mousemove	         Search bar, input validation, button clicks
Frequency	      Fixed intervals	 Only once after delay
*/