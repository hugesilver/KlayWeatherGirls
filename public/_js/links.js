const nav_opensea = document.getElementsByClassName("icon-opensea")[0];
const mobile_opensea = document.getElementsByClassName("icon-opensea")[1];
const footer_opensea = document.getElementsByClassName("icon-opensea")[2];

const nav_twitter = document.getElementsByClassName("icon-twitter")[0];
const mobile_twitter = document.getElementsByClassName("icon-twitter")[1];
const footer_twitter = document.getElementsByClassName("icon-twitter")[2];

const nav_discord = document.getElementsByClassName("icon-discord")[0];
const mobile_discord = document.getElementsByClassName("icon-discord")[1];
const footer_discord = document.getElementsByClassName("icon-discord")[2];

const nav_kakaotalk = document.getElementsByClassName("icon-kakaotalk")[0];
const mobile_kakaotalk = document.getElementsByClassName("icon-kakaotalk")[1];
const footer_kakaotalk = document.getElementsByClassName("icon-kakaotalk")[2];

const mobile_youtube = document.getElementsByClassName("icon-youtube")[0];
const footer_youtube = document.getElementsByClassName("icon-youtube")[1];
const button_youtube = document.getElementById("youtube-button");

const mobile_instagram = document.getElementsByClassName("icon-instagram")[0];
const footer_instagram = document.getElementsByClassName("icon-instagram")[1];

const mobile_medium = document.getElementsByClassName("icon-medium")[0];
const footer_medium = document.getElementsByClassName("icon-medium")[1];
const button_medium = document.getElementById("medium-button");

function link_opensea(){
    window.open('about:blank').location.href='https://opensea.io/collection/klayweathergirls';
}
function link_twitter(){
    window.open('about:blank').location.href='https://twitter.com/WeatherGirlsNFT';
}
function link_discord(){
    window.open('about:blank').location.href='https://discord.com/invite/pczWPcS85h';
}
function link_kakaotalk(){
    window.open('about:blank').location.href='https://open.kakao.com/o/gwsoE5Zd';
}
function link_youtube(){
    window.open('about:blank').location.href='https://www.youtube.com/channel/UCU7jA5XDiijAZgYIuOYonQw';
}
function link_instagram(){
    window.open('about:blank').location.href='https://www.instagram.com/weathergirlsnft';
}
function link_medium(){
    window.open('about:blank').location.href='https://medium.com/@KlayWeatherGirls';
}

nav_opensea.addEventListener("click",link_opensea);
mobile_opensea.addEventListener("click",link_opensea);
footer_opensea.addEventListener("click",link_opensea);

nav_twitter.addEventListener("click",link_twitter);
mobile_twitter.addEventListener("click",link_twitter);
footer_twitter.addEventListener("click",link_twitter);

nav_discord.addEventListener("click",link_discord);
mobile_discord.addEventListener("click",link_discord);
footer_discord.addEventListener("click",link_discord);

mobile_youtube.addEventListener("click",link_youtube);
footer_youtube.addEventListener("click",link_youtube);
button_youtube.addEventListener("click",link_youtube);

mobile_instagram.addEventListener("click",link_instagram);
footer_instagram.addEventListener("click",link_instagram);

mobile_medium.addEventListener("click",link_medium);
footer_medium.addEventListener("click",link_medium);
button_medium.addEventListener("click",link_medium);

document.getElementsByClassName("roadmap_doodle")[3].addEventListener("click",function(){
    window.open('about:blank').location.href='https://www.youtube.com/channel/UCU7jA5XDiijAZgYIuOYonQw';
});

var mailadd = document.getElementById("mail");
var completed_box = document.getElementById("completed");
var mailaddress = document.getElementById("mail").innerHTML;

function copymailaddress(){
    const tmptextarea = document.createElement('textarea');
    tmptextarea.value = "WeatherGirls0211@gmail.com";

    document.body.appendChild(tmptextarea);
    tmptextarea.select();
    tmptextarea.setSelectionRange(0,9999);
    document.execCommand('copy');
    document.body.removeChild(tmptextarea);

    completed_box.style.animation = "animation-completed-up 0.5s";
    completed_box.style.display = "block";
    setTimeout(function(){completed_box.style.animation = "animation-completed-down 0.2s linear"},3000);
    setTimeout(function(){completed_box.style.display = "none"},3200);
}

mailadd.addEventListener("click",copymailaddress);