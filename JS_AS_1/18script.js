// Higher order functions and functional prog
// A function which takes another function as an arguement, or returns a function from it is higher order functions.
function x() {
    console.log("namaste");
}
function y(x)
{
    x();
}
// in this case func y which takes x as an arguement is a higher order func, and x is the callback function.

// we have an array which takes radius of 4 circles, our task is to calculate the area of all the circles.
const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++)
    {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));

// now we have to calculate circumferences
const calculateCircumference = function (radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++)
    {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};
console.log(calculateCircumference(radius));

// now we have to calculate diameter also
const calculateDiameter = function (radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++)
    {
        output.push(2 * radius[i]);
    }
    return output;
};
console.log(calculateDiameter(radius));

// problem : we are repeating ourselves a lot, and there's principle called as DRY(dont repeat yourself)
const area = function(radius) {
    return Math.PI * radius * radius;
};
const circumference = function (radius) {
    return 2 * Math.PI * radius;
};
const diameter = function (radius) {
    return 2 * radius;
};
const calculate = function (radius, logic)
{
    const output = [];
    for(let i = 0; i < radius.length; i++)
    {
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(radius.map(area));
console.log(radius, area);
console.log(radius, circumference);
console.log(radius, diameter);
// now if we have to calculate circumference, we can just write a logic for that and pass that to our main func, we dont need to write it again.
// map func maps the whole array with some logic.
// console.log(radius.map(area)); console.log(radius, area); both gives same output, area of all, to make our function exactly like map, we can do this : 

Array.prototype.calculate = function (logic)
{
    const output = [];
    for(let i = 0; i < this.length; i++)
    {
        output.push(logic(this[i]));
    }
    return output;
};
console.log(radius.calculate(area));
// this is how we write polyfills
