$(function(){
  var faq_area = $(".faq-area");

  faq_area.each(function(){
    var _faqarea = new GroupBox(this);
  });

  function GroupBox(groupElement){
    var box = $(groupElement).find(".box");
    var question = $(groupElement).find(".question p");

    box.each(function(idx){
      var newBox = new RootBox(this);
      if (idx >= 0){
        newBox.siblingsClose();
      }
    });
  }

  function RootBox(boxElement){
    var _this = this;
    var boxEl = $(boxElement);
    var question = $(boxEl).find(".question p");
    var arrow = $(boxEl).find(".question img");
    var answer = $(boxEl).find(".answer");

    boxEl.on("click", anchorClickEvent);

    function anchorClickEvent(){
      if (answer.is(':hidden')){
        _this.open();
      } else {
        _this.close();
      }
    }

    _this.siblingsClose = function(){
      answer.css('display', 'none');
    };
    _this.open = function() {
      answer.slideDown(); // duration, easing, complete
    };
    _this.close = function() {
      answer.slideUp(); // duration, easing, complete
    }
  }
});

const faq_box1 = document.querySelector('#faq1');
const faq_box2 = document.querySelector('#faq2');
const faq_box3 = document.querySelector('#faq3');
const faq_box4 = document.querySelector('#faq4');
const faq_box5 = document.querySelector('#faq5');
const faq_box6 = document.querySelector('#faq6');
const faq_box7 = document.querySelector('#faq7');
const faq_box8 = document.querySelector('#faq8');
const arrow1 = document.getElementsByClassName('arrow')[0];
const arrow2 = document.getElementsByClassName('arrow')[1];
const arrow3 = document.getElementsByClassName('arrow')[2];
const arrow4 = document.getElementsByClassName('arrow')[3];
const arrow5 = document.getElementsByClassName('arrow')[4];
const arrow6 = document.getElementsByClassName('arrow')[5];
const arrow7 = document.getElementsByClassName('arrow')[6];
const arrow8 = document.getElementsByClassName('arrow')[7];
let toggle1 = 0;
let toggle2 = 0;
let toggle3 = 0;
let toggle4 = 0;
let toggle5 = 0;
let toggle6 = 0;
let toggle7 = 0;
let toggle8 = 0;

function opencloseanimation1(){
    if(toggle1 == 0){
        arrow1.classList.remove('close');
        arrow1.classList.add('open');
        toggle1 = 1;
    }
    else if(toggle1 == 1){
        arrow1.classList.remove('open');
        arrow1.classList.add('close');
        toggle1 = 0;
    }
}
function opencloseanimation2(){
    if(toggle2 == 0){
        arrow2.classList.remove('close');
        arrow2.classList.add('open');
        toggle2 = 1;
    }
    else if(toggle2 == 1){
        arrow2.classList.remove('open');
        arrow2.classList.add('close');
        toggle2 = 0;
    }
}
function opencloseanimation3(){
    if(toggle3 == 0){
        arrow3.classList.remove('close');
        arrow3.classList.add('open');
        toggle3 = 1;
    }
    else if(toggle3 == 1){
        arrow3.classList.remove('open');
        arrow3.classList.add('close');
        toggle3 = 0;
    }
}
function opencloseanimation4(){
    if(toggle4 == 0){
        arrow4.classList.remove('close');
        arrow4.classList.add('open');
        toggle4 = 1;
    }
    else if(toggle4 == 1){
        arrow4.classList.remove('open');
        arrow4.classList.add('close');
        toggle4 = 0;
    }
}
function opencloseanimation5(){
    if(toggle5 == 0){
        arrow5.classList.remove('close');
        arrow5.classList.add('open');
        toggle5 = 1;
    }
    else if(toggle5 == 1){
        arrow5.classList.remove('open');
        arrow5.classList.add('close');
        toggle5 = 0;
    }
}
function opencloseanimation6(){
    if(toggle6 == 0){
        arrow6.classList.remove('close');
        arrow6.classList.add('open');
        toggle6 = 1;
    }
    else if(toggle6 == 1){
        arrow6.classList.remove('open');
        arrow6.classList.add('close');
        toggle6 = 0;
    }
}
function opencloseanimation7(){
    if(toggle7 == 0){
        arrow7.classList.remove('close');
        arrow7.classList.add('open');
        toggle7 = 1;
    }
    else if(toggle7 == 1){
        arrow7.classList.remove('open');
        arrow7.classList.add('close');
        toggle7 = 0;
    }
}
function opencloseanimation8(){
    if(toggle8 == 0){
        arrow8.classList.remove('close');
        arrow8.classList.add('open');
        toggle8 = 1;
    }
    else if(toggle8 == 1){
        arrow8.classList.remove('open');
        arrow8.classList.add('close');
        toggle8 = 0;
    }
}

faq_box1.addEventListener('click', opencloseanimation1);
faq_box2.addEventListener('click', opencloseanimation2);
faq_box3.addEventListener('click', opencloseanimation3);
faq_box4.addEventListener('click', opencloseanimation4);
faq_box5.addEventListener('click', opencloseanimation5);
faq_box6.addEventListener('click', opencloseanimation6);
faq_box7.addEventListener('click', opencloseanimation7);
faq_box8.addEventListener('click', opencloseanimation8);