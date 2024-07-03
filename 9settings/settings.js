
let clickMe = document.querySelector(".test");
let body = document.querySelector("body");
let reset = document.querySelector(".reset");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let videoSettings = document.querySelector(".videoPg");
let audioSettings = document.querySelector(".audioPg");
let accessibilitySettings = document.querySelector(".accessibilityPg");
let accessibilityBtn = document.querySelector(".accessibilityBtn");
let audioBtn = document.querySelector(".audiobtn");
let videoBtn = document.querySelector(".videobtn");
let creditsBtn = document.querySelector(".creditsBtn");
let creditsPg = document.querySelector(".creditsPg");

clickMe.addEventListener("click", function(){
    body.style.background = "black";
    body.style.color = "white"
})
reset.addEventListener("click", function(){
    body.style.backgroundImage = "url('/Logo.jpg')";
    body.style.color = "#686D76"
})
btn.addEventListener("click", function(){
    btn.style.backgroundColor = "#686D76";
})
btn2.addEventListener("click", function(){
    btn2.style.backgroundColor = "#686D76";
})
btn3.addEventListener("click", function(){
    btn3.style.backgroundColor = "#686D76";
})
btn4.addEventListener("click", function(){
    btn4.style.backgroundColor = "#686D76";
})
btn5.addEventListener("click", function(){
    btn5.style.backgroundColor = "#686D76";
})
btn6.addEventListener("click", function(){
    btn6.style.backgroundColor = "#686D76";
})
btn7.addEventListener("click", function(){
    btn7.style.backgroundColor = "#686D76";
})
btn8.addEventListener("click", function(){
    btn8.style.backgroundColor = "#686D76";
})
btn9.addEventListener("click", function(){
    btn9.style.backgroundColor = "#686D76";
})
videoBtn.addEventListener("click", function(){
    videoSettings.style.display = "block";
    audioSettings.style.display = "none";
    accessibilitySettings.style.display = "none";
    creditsPg.style.display = "none"
})
audioBtn.addEventListener("click", function(){
    videoSettings.style.display = "none";
    audioSettings.style.display = "block";
    accessibilitySettings.style.display = "none";
    creditsPg.style.display = "none";
})
accessibilityBtn.addEventListener("click", function(){
    videoSettings.style.display = "none";
    audioSettings.style.display = "none";
    accessibilitySettings.style.display = "block";
    creditsPg.style.display = "none";
})
creditsBtn.addEventListener("click", function(){
    videoSettings.style.display = "none";
    audioSettings.style.display = "none";
    accessibilitySettings.style.display = "none";
    creditsPg.style.display = "block";
})


