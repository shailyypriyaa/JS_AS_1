// JS Engine
// JS can run inside browser, server, smart watch, robots, and its all possible because of js runtime environment, it is like a big container which has all the things needed to run a js code, it has js engine, it also has set of apis to connect to outer environment, we can also have event loop, CBQ, MTQ, JRE is not possible without js engine, browser can execute your code only because it has JRE, different browsers use different js engine, microsoft edge uses chakra, firefox uses spidermonkey, google and node.js uses V8, we can create our own js engine also, but there is ECMAScript language standard which need to be followed by these.

// JS engine architecture:
// Js engine is not a machine, js engine takes the code that we write and it goes through 3 steps: PARSING, COMPILATION, EXECUTION. 

// During parsing, our code is broken down into tokens, and there's syntax parser which takes our code and convert it into AST(abstract syntax tree),(An AST (Abstract Syntax Tree) is a tree-like representation of the syntactic structure of your source code. It's created during the parsing phase of the JavaScript engine — before the code is compiled or executed.)

// Compilation : JS has JIT compiler, interpreter takes your code and starts executing it line by line, it does not know what happens in the next line(it is fast as it does not have to wait for the whole code to compile, it can start executing immediately), compiler, here whole code is compiled before it is executed, so the code is compiled and new code is created which is the optimised version of the code, and then it is executed, so in case of compiler we have more efficiency and interpreters are more fast, js is compiled or interpreted?, it can behave like as both depends on js engine, now JIT uses both compiler and interpreter to execute our code, now the AST goes to interpreter, which converts our high level code to byte code and that code moves to execution step, while it is done, compiler also does its job, (The engine takes the AST and converts it into bytecode (an intermediate code), This bytecode is what the engine can actually execute, Modern JS engines use Just-In-Time (JIT) compilation: Combines interpretation + optimization. It first interprets quickly, then compiles and optimizes on the fly.) so the job of compiler is to optimise the code as much as it can in the runtime, in some js engines, there's something known as AOT(ahead of time), in which compiler takes a piece of code which is going to be executed later, and tries to optimise it as mush possible.

// Execution: this is only possible because of two main components: memory heap and call stack, MH where all the variables and func are assigned memory, also have GC over here, which tries to free up memory whenever possible, it uses mark and sweep algo, (Mark-and-Sweep Algorithm: It’s a 2-step algorithm used to detect and clean up unreachable memory in the heap. Step 1: Mark Phase, The GC starts from "roots" (global variables, current function stack, etc.), It marks all reachable objects by following references, Anything that can be reached from a root is considered alive, Step 2: Sweep Phase: After marking, it goes through the heap and removes any unmarked (unreachable) objects, These are the objects that your program can no longer access — i.e., garbage.)

// everyone is trying to make their js engine fast, but right now, the fastest js engine is google V8, V8 has an interpreter which is called as Ignition, Turbo fan is the optimizing compiler, V8 js engine architecture we have, inside that js code goes into parser, which is converted to ast, ast has ignition which is converted to byte code, and along with interpreter works the turbo fan compiler, which generates optimized code, they also have GC called as orinoco, which uses mark and sweep algo.


/*
The JavaScript Runtime Environment is everything needed to run JavaScript code outside the source file. It includes:
JavaScript Engine (e.g., V8 in Chrome/Node.js)
Web APIs / Environment APIs (e.g., setTimeout, DOM, fetch, etc.), Callback / Task Queues, Event Loop
*/

/*
1. 🔹 Inlining
Inlining is when the JavaScript engine replaces a function call with the actual function body, to avoid the overhead of calling the function.
📦 Why?
Function calls take time — stack frame creation, jumping, etc.
Inlining skips all that when the function is small and predictable.
🧠 Example:
function add(a, b) {
  return a + b;
}
let result = add(2, 3);
🔁 After inlining, the engine internally transforms it like:
let result = 2 + 3;
→ No function call. Just a fast operation.
✅ When does it happen?
If the function is small
If it’s called frequently
If it has no dynamic behavior

2. 🔹 Copy Elision (not directly in JS like in C++)
✅ Note: Copy Elision is a compiler optimization mostly in 
C++, not native in JS.
🧠 Meaning (in general):
It means avoiding unnecessary object copies.
🧪 In JS context:
JavaScript is pass-by-reference for objects
So, copy elision is not necessary — objects are passed and returned by reference, not by value.
function makeUser() {
  return { name: "Shaily" };
}
const user = makeUser(); // no copy involved — just a reference to the object
✅ So while JS engines don’t need to do copy elision like C++, they do optimize unnecessary object creation or reuse memory behind the scenes.

3. 🔹 Inline Caching
Inline caching is a technique where the JS engine remembers the type of object used at a property access location — so future accesses can be faster.
🧠 Example:
function printName(user) {
  console.log(user.name);
}
let u1 = { name: "Shaily" };
let u2 = { name: "Priya" };
printName(u1);
printName(u2);
🔍 What happens:
The first time user.name is accessed, the engine looks up where name is in memory.
Then it caches this lookup for future calls.
If all users have the same shape (i.e., same properties), the engine reuses the fast path.
❌ Slow case:
printName({ name: "A" });
printName({ name: "B", age: 25 }); // different shape → cache miss
If object shapes differ, the engine has to recompile or slow down.
💥 Why it matters?
JS is dynamically typed.
Inline caching makes repeated property access almost as fast as C++.
*/