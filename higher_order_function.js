//  Higher order function
/* It is a functionwhich accept another function as argument */

// ========Call back====
/* It is a function which send as argiment to another function */

console.log('start');
function calculator(a,b,operation){
    return operation(a,b)
}

function sum(a,b){
    return a+b;
}

console.log(sum(10,20));
console.log(calculator(10,20,sum));

function sub(a,b){
    return a-b;
}

console.log((sub(10,20)));
console.log(calculator(10,20,sub));



function multiply(a,b){
    return a*b;
}

console.log((multiply(10,20)));
console.log(calculator(10,20,multiply));