// 1
// let a = Number(prompt('enter a value'))
// if(a%2==0){
//   console.log('even number')
//   }
// else{
//   console.log('odd number')
//  }

// 2
// let a = prompt('Enter a value'); // get input as string
// let reversedA = a.split('').reverse().join(''); 
// if (a === reversedA) {
//   console.log('Palindrome');
// } else {
//   console.log('Not a palindrome');
// }

// 3
// let a = prompt('Enter a value'); // get input as string
// let reversedA = a.split('').reverse().join(''); // reverse the string
// console.log(reversedA)

// 4
// let a = Number(prompt ('enter a value'))
// count=0
// for(i=1; i<=a; i++){
//   if(a%i==0){
//     count+=1
//   }
// }
// if(count==2){
//   console.log('prime number ')
// }
// else{
//   console.log("not prime number ")
//   }

//  5
// let a = Number(prompt('Enter a value'));
// for (let i = 2; i <= a; i++) { 
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count += 1;
//         }
//     }
//     if (count == 2) { 
//         console.log(i);
//     }
// }

// 6
// let a = String(prompt('Enter a value'));
// for (i = 0; i <= a.length; i++) {
//     if (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u') {
//         console.log('vowel')
//     }
//     else {
//         console.log('consonant');
//     }
// }


// 7
// let a = String(prompt('Enter a value'));
// let last_char=a[a.length-1]
//     if (last_char == 'a' || last_char == 'e' || last_char == 'i' || last_char == 'o' || a[a.length -1] == 'u') {
//         console.log('vowel')
//     }
//     else {
//         console.log('consonant');
//     }

// 8
// let a = Number(prompt('Enter a value')); 
// let num = a; 
// let len = String(a).length; 
// let sum = 0;

// while (num > 0) { 
//     let last_digit = num % 10; 
//     sum += last_digit ** len; 
//     num = Math.floor(num / 10); 
// }

// if (sum === a) {
//     console.log('Armstrong number');
// } else {
//     console.log('Not an Armstrong number');
// }


// 9   10
// let a=Number(prompt('enter a value'))
// let b= String(a)
// console.log(b.length);

// 11
// let a=String(prompt('enter a value'))
// let upper=a.toUpperCase()
// console.log(upper);

// 13
// let a=Number(prompt('enter a value'))
// let b=String(a)
// if(b.length%2==0){
//     console.log("even length");
// }
// else{
//     console.log("not even");
    
// }

// 14
// let a=Number(prompt('enter a value'))
// fact=1;
// for(i=1; i<=a; i++){
//     fact=fact*i
// }
// console.log(fact);

var x=10;
y=x-+1
alert(y)
