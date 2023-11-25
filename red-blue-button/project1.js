const BLUE_BUTTON = document.getElementById("blue");
const RED_BUTTON = document.getElementById("red");
const BODY = document.querySelector("body");
const P_TAG = document.querySelector("p");
const START_BUTTON = document.getElementById("start");
const STOP_BUTTON = document.getElementById("stop");
const BACKGROUND_TEXT = document.getElementById("background-text");
const SPAN = document.querySelector("span");
console.log(RED_BUTTON);

function clrntxtHandler(btn, color, name) {
  BODY.style.backgroundColor = color;
  btn.textContent = name;
  SPAN.textContent = "blue";
  // if(btn === RED_BUTTON){
  //    SPAN.style.color = "red"
  //    console.log("runne")
  // }else SPAN.style.color = "blue"
  SPAN.style.color = color;
}

BLUE_BUTTON.addEventListener("click", function () {
  // console.log("first")
  // BODY.style.backgroundColor = "blue"
  // BLUE_BUTTON.textContent = "Mohit"
  // // SPAN.textContent = "blue";
  RED_BUTTON.textContent = " Red";

  clrntxtHandler(BLUE_BUTTON, "blue", "mohit");
});

RED_BUTTON.addEventListener("click", function () {
  console.log("first");
  // BODY.style.backgroundColor = "red"
  // RED_BUTTON.textContent = "Muskan"
  // SPAN.textContent = "red";
  BLUE_BUTTON.textContent = " Blue";
  clrntxtHandler(RED_BUTTON, "red", "muskan");
});

START_BUTTON.addEventListener("click", function () {});

// P_TAG.textContent = "ieuhfowifhwerufg";
