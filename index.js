
// document.querySelector("button").addEventListener("click", handleClick);
var arrayLength= document.querySelectorAll(".drum").length;

for(var i = 0; i<arrayLength; i++){
    document.querySelector(".drum")[i].addEventListener("click", function handleClick(){
        alert("I got clicked!");
    }
    );
}


