function close(){
    document.getElementById("video_raincoat").style.display = "none";
    document.getElementById("video_demon").style.display = "none";
    document.getElementById("video_mermaid").style.display = "none";
    document.getElementById("video_astronaut").style.display = "none";
    document.getElementById("video_knight").style.display = "none";
    document.getElementById("video_blacktiger").style.display = "none";
    document.getElementById("video_safari").style.display = "none";
    document.querySelector("#video_raincoat video").pause();
    document.querySelector("#video_demon video").pause();
    document.querySelector("#video_mermaid video").pause();
    document.querySelector("#video_astronaut video").pause();
    document.querySelector("#video_knight video").pause();
    document.querySelector("#video_blacktiger video").pause();
    document.querySelector("#video_safari video").pause();
    document.querySelector("#video_raincoat video").currentTime = 0;
    document.querySelector("#video_demon video").currentTime = 0;
    document.querySelector("#video_mermaid video").currentTime = 0;
    document.querySelector("#video_astronaut video").currentTime = 0;
    document.querySelector("#video_knight video").currentTime = 0;
    document.querySelector("#video_blacktiger video").currentTime = 0;
    document.querySelector("#video_safari video").currentTime = 0;
}

document.querySelectorAll(".fa-xmark").forEach(item=>{item.addEventListener("click",close)});
document.querySelectorAll("video").forEach(item=>{item.addEventListener("ended",close)});

document.getElementById("slide_raincoat").addEventListener("click",function(){
    document.getElementById("video_raincoat").style.display = "block"
    document.querySelector("#video_raincoat video").volume = 0.3;
    document.querySelector("#video_raincoat video").play();
});

document.getElementById("slide_demon").addEventListener("click",function(){
    document.getElementById("video_demon").style.display = "block"
    document.querySelector("#video_demon video").volume = 0.3;
    document.querySelector("#video_demon video").play();
});

document.getElementById("slide_mermaid").addEventListener("click",function(){
    document.getElementById("video_mermaid").style.display = "block"
    document.querySelector("#video_mermaid video").volume = 0.3;
    document.querySelector("#video_mermaid video").play();
});

document.getElementById("slide_astronaut").addEventListener("click",function(){
    document.getElementById("video_astronaut").style.display = "block"
    document.querySelector("#video_astronaut video").volume = 0.3;
    document.querySelector("#video_astronaut video").play();
});

document.getElementById("slide_knight").addEventListener("click",function(){
    document.getElementById("video_knight").style.display = "block"
    document.querySelector("#video_knight video").volume = 0.3;
    document.querySelector("#video_knight video").play();
});

document.getElementById("slide_blacktiger").addEventListener("click",function(){
    document.getElementById("video_blacktiger").style.display = "block"
    document.querySelector("#video_blacktiger video").volume = 0.3;
    document.querySelector("#video_blacktiger video").play();
});

document.getElementById("slide_safari").addEventListener("click",function(){
    document.getElementById("video_safari").style.display = "block"
    document.querySelector("#video_safari video").volume = 0.3;
    document.querySelector("#video_safari video").play();
});
