// Debouncing 
let counter = 0;
const getData = () => {
    console.log("Fetching Data...", counter++);
}
// when we type shaily into the input box, we fired 6 events(s, h, a, i, l, y), this means that our api have been called 6 times, what we want is that whenever we stop typing then only api call should be made, to solve this prob we should come up with some better func, we should do some magic to our getData(), if time difference between 2 key press is 300ms, then only api should be called,

const debounce = function (fn, d) {
    let timer;
    return function() {
        let context = this,
        args = arguments;
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(context, arguments);
        }, d);
    }
}

const betterFunction = debounce(getData, 300);

// debounce func takes two parameters: func and a delay, and does not lets the func make unnecessary calls again and again and only make calls if the difference between two func calls is greater than delay.
/* 🧠 Full Execution Flow (Step-by-Step):
Let’s say this line runs multiple times quickly:
betterFunction();
betterFunction();
betterFunction();
Here’s what happens at each step:
Step 1: betterFunction() is created
You call debounce(getData, 300)
It returns a new function with its own timer variable inside.
This function is stored in betterFunction.
Step 2: You call betterFunction()
First time:
timer is undefined
clearTimeout(timer) does nothing
setTimeout is started for 300ms
After 300ms, getData() is called → prints:
Fetching Data... 0
Step 3: You call betterFunction() again before 300ms ends
clearTimeout(timer) cancels the previous timer!
A new 300ms timer starts
So now getData() will run only after this new delay
Step 4: You call betterFunction() again (and again…)
Every time:
The old timer is cleared
A new one is set
If you keep calling it fast, getData() never runs
Step 5: You stop calling it
The last setTimeout() is now waiting...
After 300ms, it runs:
Fetching Data... 1
🎯 So, What Does Debounce Do?
✅ It waits until the user stops calling the function for a certain time (300ms in this case), and then calls the real function (getData).
*/

// let context = this, args = arguments; These store the current context (this) and any arguments passed to the function. Just a way to remember who called the function and with what data.

/* 🧠 What is Debouncing?
Debouncing is a technique in JavaScript used to limit how often a function runs.
🔁 If an event keeps happening quickly (like typing, scrolling, resizing), debouncing waits until the user has stopped for a little while, and then runs the function.

🧾 Real-Life Example:
Imagine you’re searching on a website. As you type:
Without debouncing: it sends a search request every keystroke 😨 (wasteful).
With debouncing: it waits until you stop typing, then sends just one request ✅.

When to Use Debounce:
Search bars / auto-suggestions
Resizing windows
Scroll events
Form validations
Button click spam prevention
*/





















// if we have to search schoolbags, then we type "school", it is first time when api is called and then we do "schoolbags" which is the second time an api is called, 