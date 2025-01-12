/*
//!=========== addEventListners =============
//~ node.addEventListners("eventName", functionName);

let h1 = document.createElement("h1");
h1.innerHTML="this is h1 tag";
console.log(h1);

document.body.append(h1);

function applyBorder(){
    console.log("border applied");
    h1.style.cssText = `border:solid blue;`
    
}
h1.addEventListener("mouseover",applyBorder);

function applybgcolor(){
    console.log("bgcolor applied");
    h1.style.cssText += `
    background: green;
    color:white;
    text-align:center;`
    
}
h1.addEventListener("click",applybgcolor);
*/

// ! ======= froms =============
let form=document.querySelector("form");
let username = document.getElementById("username");
let useremail = document.getElementById("userEmail");
let userno = document.getElementById("userno");

console.log(form);

//!= onsubmit

// The default nature of submit is end and reload the page.

function handlesubmit(e){
    e.preventDefault(); // will remove the default behaviour

    console.log("form submitted");

    
    console.log({
        name:username.value,
        email:useremail.value,
        mobile:userno.value
    });
    
}
form.addEventListener("submit",handlesubmit)
