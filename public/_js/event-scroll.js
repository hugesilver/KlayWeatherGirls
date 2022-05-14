document.addEventListener("scroll",function() {
    let scrollvalue = document.documentElement.scrollTop;

    // 날씨 말풍선 구간

    const about_title = document.getElementsByClassName("title")[0];
    const about_title_offsettop = about_title.offsetTop;

    const balloon1 = document.getElementById("balloon-1");
    const balloon2 = document.getElementById("balloon-2");
    const balloon3 = document.getElementById("balloon-3");
    const balloon4 = document.getElementById("balloon-4");
    const balloon5 = document.getElementById("balloon-5");

    if(window.innerWidth > 890){
        if(scrollvalue > about_title_offsettop){
            balloon1.style.animation = "animation-zoom-in-up 1s";
            balloon1.style.display = "inline";
            setTimeout(function(){balloon4.style.animation = "animation-zoom-in-up 1s"; balloon4.style.display = "inline";},500);
            setTimeout(function(){balloon2.style.animation = "animation-zoom-in-up 1s"; balloon2.style.display = "inline";},1000);
            setTimeout(function(){balloon5.style.animation = "animation-zoom-in-up 1s"; balloon5.style.display = "inline";},1500);
            setTimeout(function(){balloon3.style.animation = "animation-zoom-in-up 1s"; balloon3.style.display = "inline";},2000);
        }
    }
    // 네비게이션 구간

    const html_nav = document.querySelector("nav");
    const background_value = document.querySelector(".background");

    let pc_top_value = (scrollvalue * (-1)) * 1.35 + "px";
    const storytext = document.querySelector(".description");
    const storytext_offsettop = storytext.offsetTop;

    if(window.innerWidth >= window.innerHeight){
        background_value.style.top = pc_top_value;
    }

    if(scrollvalue < storytext_offsettop){
        html_nav.style.position = "absolute";
        html_nav.style.backgroundColor = "transparent";
        html_nav.style.animation = "none";
        document.getElementById("button_top").style.display = "none";
    }
    else{
        html_nav.style.position = "fixed";
        html_nav.style.backgroundColor = "#ffb8c2";
        html_nav.style.color = "#000";
        html_nav.style.animation = "animation-navigation 0.3s";
        document.getElementById("button_top").style.display = "block";
    }

    // 팀원 소개 구간

    const teamsection = document.getElementsByClassName("bridge")[1];
    const teamsection_offsettop = teamsection.offsetTop;

    if(scrollvalue > teamsection_offsettop){
        for(var i=0;i<=9;i++){
            document.getElementsByClassName("team-picture")[i].style.animation = "animation-fadeup " + 0.2 * (i + 1) + "s";
            document.getElementsByClassName("team-picture")[i].style.display = "block";
        }
    }
});


