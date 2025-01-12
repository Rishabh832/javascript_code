let togglebutton = document.getElementById("toggleButton");
console.log(togglebutton);

let hide_items = document.getElementsByClassName("hide_items");
console.log(hide_items);

togglebutton.addEventListener("click",()=>{
    console.log("i am");

    for(let element of hide_items){
        console.log(element);
        element.classList.toggle("hidden_content")
        
    }
    
})

