// Event Delegation
// technique of handling events in our webpage in a better way, many times we can a situation where we have lots of events in our web page, input fields, keyup, keydown etc, webpage grows->more events,  toh bottle situation aa jata h, so we use event delegation, isse itna sara event handle ny krna parta.

// suppose we have e-commerce website, in that we have categories: latops, cameras, shoes etc, clicking on that takes us to new page, sare pr events listeners dale hue h, hum jitne jyada products dalenge page slow hota jayega, 1000s of event handlers will be hanging around, toh ED says ki instead of attaching EL toh all of them, attach one EL to its parent.

document.querySelector("#category").addEventListener('click', (e) => {
    console.log(e.target.id);
    if(e.target.tagName == 'LI')
    {
        window.location.href = "/" + e.target.id;
    }
});

// when we do console.log(e) for category, we get many things and inside that we hvae target: li#laptops, yhi kaam ka h, agar hum e.target kre toh hume "<li id="laptops">laptops</li>" ye poora mil jayega, e.target.id will give you "laptops".




/* 🚨 Critical Performance Bottlenecks in JavaScript
A performance bottleneck happens when part of your JS code or app slows down the entire experience, especially affecting responsiveness, smoothness, or load time.
Here are the most common critical bottlenecks in JavaScript:
1. Long-Running JavaScript on the Main Thread
JS runs on a single thread with the browser’s rendering and UI updates.
If your code runs too long (e.g., complex loops or blocking operations), it blocks rendering, causing lags or freezes.
🔥 Example:
// Freezes the UI!
for (let i = 0; i < 1e9; i++) {
  // heavy computation
}
2. Excessive DOM Manipulations
Frequent and unoptimized DOM updates (adding/removing elements, changing styles) can cause layout thrashing.
Recalculating layout and repainting can be expensive.
❌ Bad:
for (let i = 0; i < 1000; i++) {
  document.body.appendChild(document.createElement('div'));
}
✅ Better:
Use DocumentFragment or build HTML string and inject once.
3. Memory Leaks
If you forget to clean up event listeners, timers, or large data structures, memory usage grows over time.
Leads to sluggish behavior or crashes, especially on long-running apps (e.g., SPAs).
Example:
window.addEventListener("resize", someHeavyFunction); 
// Never removed — stays in memory forever
4. Inefficient Event Handlers
Binding too many listeners (e.g., 1000 buttons) rather than using event delegation.
Using expensive logic (DOM queries, layout reads) inside high-frequency events like scroll, resize, mousemove.
*/