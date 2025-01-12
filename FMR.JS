//    filter method 

// var ar =[75,35,64,78,15,62,72,34,38,25,75]

//  Case 1
// var filterarray = []; one empty array required to store the fileter the data

// var filterArray=[];
// console.log(filterArray);

// for (let i=0; i<ar.length; i++){
//     console.log(ar[i]);

//     if(ar[i] >= 35){
//         filterArray.push(ar[i])
//     }
    
// }
// console.log(filterArray);

//  Case 2

// var filterArray=[]
// console.log(filterArray);

// for(let i of ar){
//     console.log(i);

//     if(i>=35){
//         filterArray.push(i)
//     }
    
// }
// console.log(filterArray);

// Case 3

// console.log(ar);
// console.log(ar.filter(checkCondition));

// function checkCondition(i){
//     return i>=35;
// }

// Case 3.1  filter with arrow fxn
// console.log(ar);

// console.log(
//     ar.filter(i=>{
//         return i>=35;
//     })
// );
// console.log(ar.filter(i=>i>=35));



//    Map Method 

// var salaries =[50,70,105,150,260,120,360,420]


//  Case 1: for
// console.log(salaries);
// var newsalaries =[];
// console.log(newsalaries);  //[]

// for (let i =0; i<salaries.length; i++){
//     console.log("old-",salaries[i], "new-",salaries[i]+50);

//     newsalaries.push(salaries[i]+50)
    
// }
// console.log(newsalaries);


// Case 2 for of

// console.log(salaries);
// var newsalaries =[]
// console.log(newsalaries);

// case 3  map method with named fxn

// console.log(salaries);
// console.log(salaries.map(updatefn));

// function updatefn(i){
//     return i+50
// }


// Case 3.1  map method with arrow fxn
// console.log(salaries);


// AS we have only one parameter then parenthiesis is not required
// console.log(
//     salaries.map(i=>{
//         return i+50
//     })
// );

// As we have only one return statement then block is not required.
// console.log(salaries.map(i=>i+50));


// -----------------------


// var expensive=[152,320,125,265,235,,216,350]
// let a=0
// console.log(a);


// for (let i of expensive) {
//     a+=i
// }
// console.log(a);





var expensive=[152,320,125,265,235,,216,350]

// Case 2

// let total=0
// console.log(total);

// for (let i=0; i<expensive.length; i++){
//     total+=expensive[i]
// }

// console.log(total);

// case 2

// let total=0;
// for(let i of expensive){
//     console.log(total);
    
// }



// case 3

console.log(expensive);

console.log(expensive.reduce(reducefunction,0));

function reducefunction(total,i){
    console.log(total);
   return total+i
    
}


// Case 3.1

console.log(expensive);

let singlevalue=expensive.reduce((total,i) => total+i,0)

console.log(singlevalue);


// ex-2

var ar=["j","a","v","a"]

console.log(ar);

// for of

let word=""
console.log(word);

for (let i of ar){
    console.log(word);
    word+=i
}
console.log(word);

let output=ar.reduce(callbackfn,initialvalue);




