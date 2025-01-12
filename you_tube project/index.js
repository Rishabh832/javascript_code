



// We wnat thumbnails url, channel , title , channelname, video link
// data.items.map((video_data, ind)=>{
//     console.log(ind,  video_data);
//     console.log(video_data);
//     console.log(video_data.id.videoId);
//     console.log(`https://www.youtube.com/aatch?v=${video_data.id}`);
// }) 




// ==== normal code =====
let togglebutton = document.getElementById("toggleButton");

// Initialize a toggle state
let istogglebutton = false;

// console.log(togglebutton);

let hide_items = document.getElementsByClassName("hide_items");
// console.log(hide_items);

togglebutton.addEventListener("click", () => {
    console.log("i am");

    // Toggle the state
    istogglebutton = !istogglebutton;


    let firstnav = document.getElementById("first");
    console.log(firstnav.children[0].children);
    
    if (istogglebutton) {
        firstnav.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center; gap:21px;";

    }
    else {
        firstnav.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center; gap:0px"

    }

    for (let element of hide_items) {
        // console.log(element);
        element.classList.toggle("hidden_content");  
    }
    
});


// classList ---> it allows to work with class names in an efficient manner
/*
    add() ---> It will add new class name
    remove() --> It will remove the class name
    replace() --> It will replace the class name with another name.
    contains() --> It will check the class name exists or not and returns a boolean value.
    toggle() --> It will check class nams is present or not.
                 If present  -- it will remove 
                 If not present  -- it will add
*/

// ? API Integration


const api = "AIzaSyCP2s9ZWBo-NnLRj3pkWWNzpasr5RIXWl4";

const searchHTTP="https://www.googleapis.com/youtube/v3/search"


let callyoutubeapi = async ()=>{
    let search_params = new URLSearchParams({
        key: api, // M
        part: "snippet", // M
        q: "JavaScript", // M
        maxResults: 2,
        type: "",
        regionCode: "",
    });

    let res = await fetch(searchHTTP + search_params);
    let data = await res.json();
    console.log(data);
    

}
callyoutubeapi();
