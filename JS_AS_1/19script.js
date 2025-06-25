// map, filter, reduce
const arr = [5, 1, 3, 2, 6];

function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}
function binary(x) {
    return x.toString(2);
}
/* The function binary(x) takes a number x as input and returns its binary representation as a string.
x: A number (e.g., 5, 10, 255, etc.)
.toString(2): This converts the number to a string in base 2, which is binary.
.toString(radix) is a method available on JavaScript Number objects. The radix is the base you want to convert the number to. For binary, the base is 2.
Output is always a string (e.g., "101", not 101 as a number). */

const output = arr.map(double);
console.log(output);
// if we want to transform the array, we can do this using map func, we have to do arr.map() and inside this, we have to pass a func which tells what kind of transformation we need to do.

const output2 = arr.map(function binary(x) {
    return x.toString(2);
});
const output3 = arr.map((x) => {
    return x.toString(2);
});
const output4 = arr.map((x) => x.toString(2));
// we can also pass it like this and also we can use arrow func like this, both are same, we can also remove the return keyword if we have only one statement.

// Filter: used to filter out things
// filter odd values:
function isOdd(x) {
    return x % 2;
}
function isEven(x) {
    return x % 2 === 0;
}
function greaterThan4(x) {
    return x > 4;
}
const output5 = arr.filter(isOdd);
console.log(output5);

// Reduce: used at a place where you have to take all the values and come up with a single value out of them.
// sum
function findSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

const out = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(out);
// this takes two parameters: accumulator and current, basically reduce iterates the func over each ele in array, curr is actually arr[i] and acc is sum, but we need to paas intial value to accumulator, which is the second parameter in reduce func.

// max
function findMax(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const out2 = arr.reduce(function (max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log(out2);

// Example 1:
const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "shaily", lastName: "priya", age: 23},
    {firstName: "rishika", lastName: "gupta", age: 22},
    {firstName: "shreya", lastName: "prakash", age: 23},
];

// list of full names:
// ["akshay saini", "shaily priya"... ]
// x represents the first ele

const out3 = users.map((x) => x.firstName + " " + x.lastName);
console.log(out3);

// how many people are there with a particular age:
// 26 : 1, 23 : 2, 22 : 1
// acc will be {} empty object intially, curr will be "{firstName: "akshay", lastName: "saini", age: 26}," at first time, 

const out4 = users.reduce(function (acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(out4);

// find all the people and print their first name whose age is less than 25.
// we can also chain these functions, like here we first filter out and then we can apply map on the output:

const out5 = users.filter((x) => x.age < 25).map((x) => x.firstName);
console.log(out5);
