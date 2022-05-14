const navigator_logo = document.getElementsByClassName("logo")[0];
const footer_logo = document.getElementsByClassName("logo")[1];
const topbutton = document.querySelector("#button_top");
const navigator_story = document.getElementsByClassName("nav_story")[0];
const mobile_nav_story = document.getElementsByClassName("nav_story")[1];
const navigator_gallery = document.getElementsByClassName("nav_gallery")[0];
const mobile_nav_gallery = document.getElementsByClassName("nav_gallery")[1];
const navigator_roadmap = document.getElementsByClassName("nav_roadmap")[0];
const mobile_nav_roadmap = document.getElementsByClassName("nav_roadmap")[1];
const navigator_team = document.getElementsByClassName('nav_team')[0];
const mobile_nav_team = document.getElementsByClassName('nav_team')[1];
const navigator_faq = document.getElementsByClassName("nav_faq")[0];
const mobile_nav_faq = document.getElementsByClassName("nav_faq")[1];

const $html = $("html");
const speed = 600;

let toggle = 0;
const mobile_menu = document.querySelector('#nav-mobile');
const mobile_menu_box = document.querySelector('#mobile-menu');

function slideanimation(){
    if(toggle == 0){
        mobile_menu_box.style.display = "block";
        toggle = 1;
    }
    else if(toggle == 1){
        mobile_menu_box.style.display = "none";
        toggle = 0;
    }
}

mobile_menu.addEventListener('click', slideanimation);

navigator_logo.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#about").offset().top }, speed);
});

footer_logo.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#about").offset().top }, speed);
});

topbutton.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#about").offset().top }, speed);
});

navigator_story.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#story").offset().top }, speed);
});

mobile_nav_story.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#story").offset().top }, speed);
  mobile_menu_box.style.display = "none";
  toggle = 0;
});

navigator_gallery.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#gallery").offset().top }, speed);
});

mobile_nav_gallery.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#gallery").offset().top }, speed);
  mobile_menu_box.style.display = "none";
  toggle = 0;
});

navigator_roadmap.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#bridge-story").offset().top }, speed);
});

mobile_nav_roadmap.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#bridge-story").offset().top }, speed);
  mobile_menu_box.style.display = "none";
  toggle = 0;
});

navigator_team.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#team").offset().top }, speed);
});

mobile_nav_team.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#team").offset().top }, speed);
  mobile_menu_box.style.display = "none";
  toggle = 0;
});

navigator_faq.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#faq").offset().top }, speed);
});

mobile_nav_faq.addEventListener("click", function(){
  $html.animate({ scrollTop: $("#faq").offset().top }, speed);
  mobile_menu_box.style.display = "none";
  toggle = 0;
});

// 모바일 메뉴
