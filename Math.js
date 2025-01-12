// ========  Math ========
/*
  Math is an object availabel is js. 
  It provides a lot of method to 
   perform mathematical operations.
*/

console.log(Math);

// ==== Math Methods ======


// abs():
// It will convert the negative number into positive

console.log(Math.abs(-48));  //48
console.log(Math.abs(48));  //48
console.log(Math.abs(-103.5));  //103.5


// round()
// It wil round off the number to nearest highest number

console.log(Math.round(-48.5));  //48
console.log(Math.round(48.3));  //48
console.log(Math.round(-103.5));  //103

// floor()

console.log(Math.floor(20.8)); //20
console.log(Math.floor(20.2)); //20
console.log(Math.floor(20.5));  //20


// ceil()

console.log(Math.ceil(20.8)); //21
console.log(Math.ceil(20.2)); //21
console.log(Math.ceil(20.5));  //21


// pow()

console.log(Math.pow(2,3)); 
console.log(Math.pow(20,5)); 
console.log(Math.pow(5,2));  


//sqrt()
//It will return the square root  of a number
console.log(Math.sqrt(4));
console.log(Math.sqrt(16));
console.log(Math.sqrt(50));


// cbrt():
//It will return the cube root of a number
console.log(Math.cbrt(8));  //2
console.log(Math.cbrt(27)); //3
console.log(Math.cbrt(2));  //1


// min()
//It will return the minimum number of a number
console.log(Math.min(1,20,304,40)); //1

//max()
//It will return the maximum number of a number
console.log(Math.max(1,20,304,40)); 


// random()
// it will always return a random numbere between 0 to 1
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*100);



// trunc()
// It will remove the decimal value
console.log(Math.trunc(12.05)); //12
console.log(Math.trunc(12.0545)); //12
console.log(Math.trunc(12.0555)); //12


console.log("Your OTP is :",Math.trunc(Math.random()*10000));
