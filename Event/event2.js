/*
// !====================

let h1= document.createElement("h1");
h1.innerHTML="Heyy Buddies , I am the h1 tag"
console.log(h1);

let body = document.body;
body.append(h1)


function fun1(){
    console.log("You clicked on h1 tag");
    console.log("100 lines of code executed successfully");
    
}

h1.onclick=fun1;

// !============================

let h2 = document.createElement("h2");
h2.innerHTML="I am h2 Tag, Please hover on me"
body.append(h2);

function fun2_on(){
    console.log(h2);
    h2.style.cssText="color:white; background:teal"
    
}
function fun2_off(){
    console.log(h2);
    h2.style.cssText="color:black; background:white"
    
}
h2.onmouseover=fun2_on;
h2.onmouseout=fun2_off;

*/


//!========= Task ===========

let btn= document.createElement("button");
btn.innerHTML='Click Here'

let body=document.body;
body.append(btn);

function fun1(){
    let div= document.createElement("div");
    div.style.cssText="height:100px; width:100px; border:1px solid black; margin-top:10px"
    body.append(div);

    function fun2(){
        div.style.background="blue"
        
        function fun3(){
             div.style.background="red"
        }
        div.onclick=fun3;
    }
    div.onclick=fun2;
    console.log(div);
    
}

btn.onclick=fun1;

