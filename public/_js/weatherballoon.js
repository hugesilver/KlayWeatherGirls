const weather = ["sun","rain","cloud","thunder","snow"];

document.querySelectorAll(".balloon").forEach(item=>{item.src = "https://klayweathergirls.com/_img/about/balloon/balloon_" + weather[Math.floor(Math.random() * 5)] + ".png";});
window.addEventListener("resize",function(){
    if(window.outerWidth <= 890){
        document.querySelectorAll(".balloon").forEach(item=>{item.style.display = "none"});
    }
    else{
        document.querySelectorAll(".balloon").forEach(item=>{item.style.display = "inline"});
    }
});