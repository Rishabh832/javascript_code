// console.log("I am browser Object model file");
// console.log(window);

// === Window Properties =========

/*
  1. documnent
  2. screen
  3. navigator
  4. location
  5.innerHeight
  6.OuterHeight
  7. innerwidth
  8.outerwidt
  9. History

  */

/*
  console.log(window.document); // It will return the document(html code)

  console.log(window.screen); // It will provide the info about screen

  console.log(window.navigator); // It will provide the info about browser

  console.log(window.location);  //It will provide the info about the current
                                   // location

  console.log(window.history);   //It will provide the info about the history
                                   // (no. of pages)

  console.log(window.innerHeight);  // documnet height excluding console 
                                      // area
  console.log(window.outerHeight);  //// documnet height excluding console 
  //                                     area
  console.log(window.innerWidth);
  console.log(window.outerWidth);

*/

//   ======= window method =========

// let input=window.prompt("Enter your name")
// console.log("welcome",input);

// window.alert("alet")
// window.confirm("confirm")

// Opent():
//   window.open("https://www.youtube.com/");
//   window.open("https://www.instagram.com/");

// close():
// It will close the current webpage
// window.close();

  

// setTimeout(callback, time)
// It will execute only once after the completion of time

// console.log("I am the first message");

// setTimeout(()=>{
//   console.log("I am the second message, i will print after 3 sec");
// },3000)
// setTimeout(()=>{
//   console.log("I am the second message, i will print after 6 sec");
// },6000)

// setInterval(callback, inervaltime)
// It will execute the function for every interval time.

// let a=setInterval(() => {
//   console.log("I am a message");
  
// }, 3000);


// clearTimeout
// It will stop the working of setTimeOut() and setInetval()

// clearTimeout(a)


// !================= DOM =======================
// It will allows us to  manipulate the document

// !================== Screen ==================
// It will provide the basic info about the screen

console.log(window);
console.log(window.screen);
console.log(screen);

console.log("height - ", window.screen.height);
console.log("height - ", window.height);


console.log("availheight - ",window.screen.availHeight);
console.log("availheight - ",window.availHeight);


console.log(screen.width);
console.log(screen.availwidth);
console.log(screen.orientation);
console.log(screen.orientation.type);


// !===================== History ====================
//

