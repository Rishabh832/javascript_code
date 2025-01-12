

let section = document.createElement("section")
console.log(section);

let h1 = document.createElement("h1")
h1.innerHTML="HTML Attributes"
h1.setAttribute("style","color:red")
h1.setAttribute("id","heading")
section.append(h1)
console.log(h1);




let p=document.createElement("p")
p.innerHTML="CRUD operations"
p.setAttribute("class","para");
section.append(p)
console.log(p);



let div1 = document.createElement("div");
div1.innerHTML="Create";
div1.setAttribute("class","color1")
section.append(div1);
console.log(div1);


let div2 = document.createElement("div");
div2.innerHTML="Read";
div2.setAttribute("class","color2");
section.append(div2);
console.log(div2);

let div3 = document.createElement("div");
div3.innerHTML="Update";
div3.setAttribute("class","color3");
section.append(div3);
console.log(div3);

let div4 = document.createElement("div");
div4.innerHTML="Delete";
div4.setAttribute("class","color4");
section.append(div4);
console.log(div4);

let body = document.body;
body.append(section);