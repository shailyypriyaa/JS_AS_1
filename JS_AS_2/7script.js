// call, apply and bind
let obj = {
    firstName: "Shaily",
    lastName: "Priya",
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}
obj.printFullName(); //Shaily Priya
// because we have function inside obj, "this" will contain object through which we have called(obj), 

let obj2 = {
    firstName: "Kumar",
    lastName: "Anshuman",
}
obj.printFullName.call(obj2); //Kumar Anshuman
// using call method, we can do function borrowing, we can borrow functions from other objects with the data of some other objects, take the func which need to be called, then write .call(), first arguement is the reference, doing this, "this" of obj starts pointing to obj2.

// however in general we dont keep our methods inside objects, instead keep them somewhere outside like this :
let obj3 = {
    firstName: "Shaily",
    lastName: "Priya",
}
let printFullName = function(hometown) {
    console.log(this.firstName + " " + this.lastName + "from" + hometown);
}
printFullName.call(obj3, "Ranchi");
let obj4 = {
    firstName: "Kumar",
    lastName: "Anshuman",
}
printFullName.call(obj4, "Patna");
// we can also pass different parameters inside that function, the first parameter will always be the reference to "this" variable, and later could be the arguements to the func, and if you have more arguments, just comma separate it and add next to it.

// apply: the only difference is how we pass the arguments, first one is the reference only but after that we have to pass list of arguments:
printFullName.apply(obj4, ["Patna", "Bihar"]);

// bind: looks exactly same like call method, but instead of directly calling the method, the bind method binds the method "printFullName" with the object and returns us the copy of that method, the code below creates a copy of printFullName, it will bind that to obj4 and it will return a func, it doesn't directly calls that method, and print instead it returns us a func which can be called later
let printMyName = printFullName.bind(obj4, "Patna");
console.log(printMyName); // it will be the whole func
printMyName(); //it will print output(name and city).

/* 💡 Real-World Use Cases
1. Borrowing Methods
const person1 = { name: "Shaily" };
const person2 = { name: "Priya" };
function introduce() {
  console.log(`Hi, I'm ${this.name}`);
}
introduce.call(person2); // Hi, I'm Priya

2. Set this in setTimeout()
const counter = {
  count: 0,
  increment() {
    setTimeout(function () {
      console.log(this.count);
    }.bind(this), 1000);
  }
};
counter.increment(); // 0 (after 1 sec)
🔍 What's Really Happening?
Without bind(this):
setTimeout(function () {
  console.log(this.count);
}, 1000);
this inside the setTimeout callback refers to the global object (window in browsers), not the counter object.
So this.count would be undefined unless you've defined a global count.
✅ With bind(this):
setTimeout(function () {
  console.log(this.count);
}.bind(this), 1000);
Now, this inside the callback is bound to the counter object, so this.count === counter.count.
🧠 Why Use .bind() in This Case?
Even though you're not modifying count, you're accessing it after a delay using this.
If you don’t bind this, you'll lose reference to the counter object.
bind(this) ensures the inner function runs in the context of the original object.
*/




