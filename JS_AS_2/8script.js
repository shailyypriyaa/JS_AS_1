// Dynamic Scope, Garbage Collection
/* In JavaScript, dynamic scope does not exist — JavaScript uses lexical (static) scoping.
✅ Lexical Scope (what JavaScript actually uses)
Scope is determined by where functions and variables are defined, not where they're called.
Functions remember the environment in which they were created, not where they are invoked.
let x = 10;
function foo() {
  console.log(x);
}
function bar() {
  let x = 20;
  foo(); // prints 10, because foo was defined in the outer scope where x = 10
}
bar();
❌ Dynamic Scope (not in JS)
In dynamic scoping (used in some other languages), the function would use variables from the calling context, not the defining context.
If JavaScript had dynamic scoping, the above code would have printed 20, because foo() was called from bar() where x = 20.
*/

// GC: when you declare a variable, object, array or func all are stored somewhere in the memory, suppose we have an object a and when you program starts, the data is stored in some location(we have multiple locations, but here just simply loc), in between we might have some read, write operations, now when program ends, this loc need to be cleaned, in some prog languages, you can call rountines to clear garbage and some languages manage it automatically, but in short clearing these free locations is the process of collecting the garbage or GC.
// JS is a high level language so you do not need to alloctae memory, memory allocation and releasing happens automatically, making the memory free is the process of GC and there is a routine who does it called as garbage collector, GC process is also called automatic memory management with reference to JS, the garbage collection considers references and it tries to release the memory if a location is not reachable.
// let say we create an object let obj = {name : 'Orange'} now let obj = null, so now obj points to null, so the place where orange was stored, nothing can access this value without reference so it is not reachable.
// Mark and Sweep algo: the algo starts from the root obj and checks for references linked, in case if this algo finds unreachable locations, then those are the locations to be removed, it starts searching for values which has references, it starts with global, val1, val2, val3 all have references, but lets say, val4, val5 do not have any reference, they are null, now "mark" will mark all the refernced items, values without any reference will not be marked, mark and sweep algo will look for unmarked locations, and will clean them.
// All modern browsers use the mark and sweep algo, in older browser, in case of circular reference, there was a situation of memory leaks, for eg: let teacher = new Teacher(); let student = new Student();, teacher.student = student, student.teacher = teacher, here properties are with circular reference, naye browser ye bhi handle kr lete h.

/* 🧹 Garbage Collection in JavaScript
Garbage Collection in JavaScript is a form of automatic memory management. Developers don't need to manually free up memory — the JavaScript engine does it for you by cleaning up objects that are no longer reachable or in use.
🔍 How It Works
JavaScript engines like V8 (used in Chrome and Node.js) use Garbage Collectors to keep memory usage efficient. The most commonly used strategy is:
1. Mark-and-Sweep Algorithm
Mark: The garbage collector starts from a set of roots (e.g., global variables, currently executing functions) and marks all objects that are reachable.
Sweep: All unmarked (unreachable) objects are considered garbage and are removed from memory.
✅ Example
let obj = {
  name: "Shaily"
};
obj = null; // Now the object { name: "Shaily" } is unreachable and can be garbage collected
Here, once obj is set to null, the original object no longer has a reference pointing to it — so it's eligible for garbage collection.
📌 What Makes an Object Reachable?
An object is reachable if it is accessible in some way from the roots:
Global variables
Variables in the current function call stack
Closures (functions that remember variables from outer scope)
⚠️ Common Memory Leaks in JS
These can prevent garbage collection:
Global variables not cleared
Forgotten timers or callbacks
Detached DOM nodes
Closures holding references to unused data
🧠 Best Practices
Remove event listeners when not needed
Use let/const to limit scope
Set references to null if you’re done with them
Avoid unnecessary global variables
*/