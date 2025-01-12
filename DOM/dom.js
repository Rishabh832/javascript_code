


// ? 1. createElement();
/* IT will create an element with a provided paramenter 
 Syntax: document.createElemnt("node name")

let h1Tag = document.createElement("h1");



h1Tag.innerHTML = "hlo how are you"

let container = document.getElementsByTagName("body")
console.log(container);


container[0].append(h1Tag)

*/


// !================= restart ===========================

// ! === Create ======

let h1=document.createElement("h1");
console.log(h1);

// textContent , innerText , innerHTML
h1.innerHTML="I am  h1 Tag buddy ..."

// append ,  appendChild
let body = document.body;
body.append(h1)

// !==== Read ====
// dom selector

// !==== Update ===
// ?for content
// textContent, innertext , innerHTML
h1.innerHTML="Hello everybody I am h1 Tag";

//? for element
// replace it
// ~ Syntax:container.replaceChild(new node, old node);

let p = document.createElement("p");
p.innerHTML="I am p Tag"
console.log(p);

body.replaceChild(p,h1)


//!==Delete ===
// remove it form DOM.
//~ Syntax:,container.removeChild(nodeName);

body.removeChild(p)