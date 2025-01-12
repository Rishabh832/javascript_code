async function Youtube() {
    let res = await fetch("./data.json");
    let data = await res.json();
    console.log(data);


    // ? Map:
    data.map((Val, ind) => {
        console.log(Val);
        console.log(Val.video_url);
        console.log(Val.video_title);
        console.log(Val.video_thumbnails);


        // create main tag
        let main = document.createElement("main");
        main.innerHTML = `
    <img src="${Val.video_thumbnails}" alt="">
    <h3>${Val.video_title}</h3>
    `;
        console.log(main);

        let playbox = document.getElementById("playbox")
        let playlist = document.getElementById("playlist")

        // append main tag
        playlist.append(main);

        // onclick event 
        main.addEventListener("click", () => {
            playbox.innerHTML = `
        <video src="${Val.video_url}" controls autoplay></video>
        `;
        });
    });
}
Youtube();