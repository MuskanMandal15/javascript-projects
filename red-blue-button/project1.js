const BLUE_BUTTON = document.getElementById("blue")
const RED_BUTTON = document.getElementById("red")
const BODY = document.querySelector("body")
const START_BUTTON = document.getElementById("start");
const STOP_BUTTON = document.getElementById("stop");
const BACKGROUND_TEXT = document.getElementById("background-text");



BLUE_BUTTON.addEventListener("click", function (){
    // console.log("first")
    BODY.style.backgroundColor = "blue"
    BLUE_BUTTON.textContent = "Mohit"
})

RED_BUTTON.addEventListener("click", function (){
    console.log("first")
    BODY.style.backgroundColor = "red"
    RED_BUTTON.textContent = "Muskan"
})


START_BUTTON.addEventListener("click",function(){
   BACKGROUND_TEXT.rota
})
