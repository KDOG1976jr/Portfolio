document.addEventListener("DOMContentLoaded", function() {
    const fadeText = document.getElementById("fadeText");
    setTimeout(() => {
        fadeText.style.opacity = 1;
    }, 900); 
});
document.addEventListener("DOMContentLoaded", function() {
    const fadePicture = document.getElementById("fadePicture");
    setTimeout(() => {
        fadePicture.style.opacity = 1;
    }, 25); 
});

let contactBtn = document.querySelector(".contactBtn");
let contactPage = document.querySelector(".contactMe");
let aboutMe = document.querySelector(".about-me");
let submitPg = document.querySelector(".submit");
let submitBtn = document.querySelector(".submitbtn");
let learnMorePg = document.querySelector(".learnMore");
let learnMoreBtn = document.querySelector(".moreBtn");
let future = document.querySelector(".future");
let picture = document.querySelector(".fade-in-picture");


contactBtn.addEventListener("click", function(){
    contactPage.style.display = "block";
    aboutMe.style.display = "none";
    contactBtn.style.display = "none";
    submitPg.style.display = "block";
    learnMoreBtn.style.display = "none";
})
submitBtn.addEventListener("click", function(){
    let firstName = document.querySelector(".first");
    let lastName = document.querySelector(".last");
    let email = document.querySelector(".gmail");
    let message = document.querySelector(".messageSent");

})
learnMoreBtn.addEventListener("click", function(){
    aboutMe.style.display = "none";
    contactBtn.style.display = "none"
    learnMorePg.style.display = "block";
    learnMoreBtn.style.display = "none";
    future.style.display = "block";
    

    
})

