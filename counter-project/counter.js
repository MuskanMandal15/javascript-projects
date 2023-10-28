const DECREASE_BUTTON = document.getElementById("decrease");
const RESET_BUTTON = document.getElementById("reset");
const INCREASE_BUTTON = document.getElementById("increase");
const RESULT_BOX = document.getElementById("result-box");
let count = 0;



DECREASE_BUTTON.addEventListener("click",function(){
    count--;
    RESULT_BOX.textContent = count;
})

RESET_BUTTON.addEventListener("click",function(){
 count = 0;
 RESULT_BOX.textContent = count;
 
})
INCREASE_BUTTON.addEventListener("click",function(){
  count++;
  RESULT_BOX.textContent = count;
})