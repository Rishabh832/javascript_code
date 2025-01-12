let gp=document.getElementById("gp");
let p=document.getElementById("p");
let child=document.getElementById("child");

//!========== Event Bubbling =======

// gp.addEventListener("click",()=>alert("hello buddy,I am grand Parent"),false);
// p.addEventListener("click",()=>alert("hello buddy,I am Parent"),false);
// child.addEventListener("click",()=>alert("hello buddy,I am child"),false);


//!=================Event Capturing============

gp.addEventListener("click",()=>alert("hello buddy,I am grand Parent"),true);
p.addEventListener("click",()=>alert("hello buddy,I am Parent"),true);
child.addEventListener("click",()=>alert("hello buddy,I am child"),true);