// document.querySelector("button").addEventListener("click", handleClick);
var arrayLength = document.querySelectorAll(".drum").length;
var audio = new Audio('sounds/tom-1.mp3');


for (var i = 0; i < arrayLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    audio.play();
  });
}
