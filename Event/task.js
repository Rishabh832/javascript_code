/*
let div1=document.getElementById("1");
let div2=document.getElementById("2");
let div3=document.getElementById("3");
let div4=document.getElementById("4");
let div5=document.getElementById("5");
let div6=document.getElementById("6");
let div7=document.getElementById("7");


div1.addEventListener('mouseover',()=>{
    div1.style.cssText=`background:red;`
})
div2.addEventListener('mouseover',()=>{
    div2.style.cssText=`background:orange;`
})
div3.addEventListener('mouseover',()=>{
    div3.style.cssText=`background:yellow;`
})
div4.addEventListener('mouseover',()=>{
    div4.style.cssText=`background:green;`
})
div5.addEventListener('mouseover',()=>{
    div5.style.cssText=`background:blue;`
})
div6.addEventListener('mouseover',()=>{
    div6.style.cssText=`background:indigo;`
})
div7.addEventListener('mouseover',()=>{
    div7.style.cssText=`background:violet;`
})




div1.addEventListener('mouseout',()=>{
    div1.style.cssText=`background:white;`
})
div2.addEventListener('mouseout',()=>{
    div2.style.cssText=`background:white;`
})
div3.addEventListener('mouseout',()=>{
    div3.style.cssText=`background:white;`
})
div4.addEventListener('mouseout',()=>{
    div4.style.cssText=`background:white;`
})
div5.addEventListener('mouseout',()=>{
    div5.style.cssText=`background:white;`
})
div6.addEventListener('mouseout',()=>{
    div6.style.cssText=`background:white;`
})
div7.addEventListener('mouseout',()=>{
    div7.style.cssText=`background:white;`
})

*/

//! ======== 2nd way======

let colors=["red","orange","green","blue","indigo","violet"]

let section = document.createElement("section");
section.style.cssText =
`
height:100vh;
width:100vw;
display:flex;
`;
document.body.append(section);

for(let color of colors){
    let div=document.createElement("div");
    div.style.cssText="flex:1";
    section.append(div);

    div.addEventListener("mouseover",()=>div.style.cssText+=`background:${color}`);
    div.addEventListener("mouseout",()=>div.style.cssText+=`background:white`);
}