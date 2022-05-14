if (document.querySelector("progress").value / (document.querySelector("progress").max / 85) > 3){
    document.getElementById("amount_sign").style.left = document.querySelector("progress").value / (document.querySelector("progress").max / 85) + "%";
}
else{
    document.getElementById("amount_sign").style.left = "3%";
}

document.getElementById("count").innerHTML += document.querySelector("progress").value;

document.getElementById("minus").addEventListener("click",function(){
    if (document.getElementById("input_amount").value > 1)
        document.getElementById("input_amount").value = parseInt(document.getElementById("input_amount").value) - 1;
});

document.getElementById("plus").addEventListener("click",function(){
    if (document.getElementById("input_amount").value < 100)
        document.getElementById("input_amount").value = parseInt(document.getElementById("input_amount").value) + 1;
});

function fadeio(){
    document.getElementById("bg").style.animation = "fadeinfadeout 1s";
}
function fadenone(){
    document.getElementById("bg").style.animation = "none";
}
function bgchange(){
    document.getElementById("bg").src = "https://klayweathergirls.com/_img/mint-background/" + (Math.floor(Math.random() * 24) + 1) + ".png";
    setTimeout(fadeio, 9500);
    setTimeout(bgchange, 10000);
    setTimeout(fadenone, 10500);
}
bgchange();