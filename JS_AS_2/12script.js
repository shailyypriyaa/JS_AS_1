// Event Bubbling and Capturing
// suppose we have nested html ele, we have a div with id parent and inside that we have a div with child, if any event happens to a child it propagates to its parent as well, suppose we have onClickChild(), which is called when we click child div, we have onClickParent() which is called when we click parent div, lets say we have one more div (outest), #grand which has method onClickGrand(), Q-when you click div child, in what sequence these methods will be called.

// In case of event bubbling, if we click child div, Child() method will be called first then it moves up in the hierarchy and it goes directly to the end of the dom, onClickChild() -> onClickParent() -> onClickGrand(), agar parent div ko click kiya toh parent vala method call hoga then grand vala.

// Opposite to this is event capturing, it captures down the dom tree, when we click child div, onClickGrand() -> onClickParent() -> onClickChild(), agar parent vala div click kiya toh pahle grand vala call hoga then parent vala, event capturing is also known as event trickling, (trickling down and bubbling up)

// in add event handler we can use, useCapture as a boolean in the 3rd argument, it is passed as T or F value, T me event capturing is enabled, F me ya fir kuch pass ny krnge toh event bubble.
// addEventListener("click", () => {

// }, useCapture)

document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("Grandparent Clicked");
}, true); // capture
// if sirf GP vala func hai and child div ko click krnge toh child vala func ny h, parent vala func ny h, GP vala func toh hai toh vo hoga.

document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("Parent Clicked");
}, false); //bubble

document.querySelector("#child")
.addEventListener('click', () => {
    console.log("Child Clicked");
}, true); //capture

// This has a performance issue, how we can stop propagation, as it is very expensive, (If you attach listeners to every child in a very large DOM (like thousands of nodes), that consumes more memory and slows down rendering.)

// agar sare me kuch ny ya F hai toh bubble, agar T hai toh capture, agar T->F->T hai toh(aur agar child div ko call krnge toh ye hoga), GP me T daal diya, mtlb humne bola capture use kro, toh upar se hota hua ayega, GP call hoga, then parent pr aya toh F hai, mtlb bubble toh baad ke liye chor dia, then child me wapas capture, fir bubbling hoga, parent vala call hoga(GP->C->P).
// agar T->F->F hua and child div ko click kiya toh, pahle GP call hoga(T->capture), then bubble hoga(jo neeche se hoga h), toh pahle child then parent(GP->C->P).

// How we can stop propagation?, when we are writing callback methoods inside event listeners, we have access to an event object, e has method called as stopPropagation(),ye hum parent me daal rahe,  agar F->F->F hai (bubble hoga), child div ko click kiya, toh C->P, only it stops there, agar child me e.sP() ko daal denge toh sirf child vala hi call hoga.