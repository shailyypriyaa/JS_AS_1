// undefined vs not defined 
var a = 2;
// even before this runs, js alloates spcae for a and assigns it with undefined.
console.log(x);
// this will gives not defined as js has not allocates any space for this.

// In JavaScript, undefined means a variable has been declared but not assigned a value, it's also the default return value of functions without a return statement, accessing non-existent object properties or array elements gives undefined. It’s a primitive type and a falsy value, undefined does take memory — but very little, even though undefined represents "no value", the variable that holds it still exists in memory, storing the special undefined value. 

// js is a loosly typed language(weakly typed), it does not attaches its variables with any specific data type, if I declared one variable a and have put string in it, later we can put boolean and numbers too in it.

var s;
console.log(s);   //undefined
s = 10;
console.log(s);   //10
s = "hello";
console.log(s);   // hello

// never do this(no error, but not good practice), s = undefined
