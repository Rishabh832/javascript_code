console.log("======== evebt==========");


function fun1() {
    console.log("100 lines of code executed successfully");
    for (let i = 0; i <= 100; i++) {
        console.log(i);

    }

}
function fun2() {
    console.log("Thank you for hovering");

}

function fun3click() {
    console.log('click event occured');

}

function fun3hover() {
    console.log('hover event occured');

}

function addcontent() {
    let p = document.createElement("p")
    p.innerHTML =
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse molestiae obcaecati, tempora, fugiat doloribus repellat doloremque commodi, laborum qui maiores sunt natus. Quasi nobis blanditiis a architecto deserunt eius pariatur?"
    let body=document.body
    body.append(p)
}

let changecolor = document.getElementById("changecolor");
changecolor.style.cssText=" color:white; background:teal"

function changecolorOn(){
    console.log('onmouseover');
    changecolor.style.cssText="color:white; background:blue"
    
}
function changecolorOff(){
    console.log('onmouseout');
    changecolor.style.cssText="color:white; background:brown"
    
}