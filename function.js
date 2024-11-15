//     Functions

// Named function:
/* Any function that is declare with identifier
is called named function */


// function sum(a,b){
//     return a+b
// }
// console.log(sum(10,20));


// Anonymous Function\
/*  */

// let add = function (a,b) {
//     return a+b
// }
// console.log((add(20,30)));


// ====== Internal Working======

// Case-1

// console.log("start");
// var a=10;
// console.log(a);

// var b=20
// console.log(b);

// function sum() {
//     var m=30;
//     var n=40;
//     return m+n;
// }
// var c=30;
// console.log(c);

// console.log(sum());

// var d=40;
// console.log(d);

// console.log("end");


// Case-2

// console.log("start");
// var a=10;
// console.log(a);

// var b=20
// console.log(b);

// var add=function sum() {
//     var m=30;
//     var n=40;
//     return m+n;
// }
// var c=30;
// console.log(c);

// console.log(add());

// var d=40;
// console.log(d);

// console.log("end");


// Case-3

console.log("start");
var a=10;
console.log(a);

var b=20
console.log(b);

var add=function sum(m,n){
    return m+n;
}
var c=30;
console.log(c);

console.log(add(100,200));

var d=40;
console.log(d);

console.log("end");