// document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("button clicked");

// });

// this func here is a callback func, when this line executes, js takes clickMe vala button and adds an event listener into that, so when it is clicked, it calls this callback func, so if this event happens, callback func automatically comes inside call stack.

// now if we have to count how many times the button is clicked, we can do this using a count variable, but that's not good(because we should not do things globally), so we can use closures here:
// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("button clicked", ++count);
// });


function attachEventListener(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("button clicked", ++count);
    });
}
attachEventListener();

// now the func xyz is forming a closure with its outer scope, and it remembers the reference to count, toh jitni baar click krnge vo yaad rakhega ki pahle value kya tha.

// event listeners are heavy and they take up memory, even if our call stack is empty, then also it stores LE/closures, which takes memory, and if we have lots of event listeners in same page, our page might get slow down, so when we remove event listeners, all these variables which were hold by them are garbage collected.