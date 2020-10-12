// document.querySelector(".w").addEventListener("click",handleClick);
//
// function handleClick(){}
//   var audio = new Audio('sounds/tom-1.mp3');
//   audio.play();
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        // this.style.color = "white";
        var tom1 = new Audio ("sounds/tom-1.mp3");
        tom1.play();
        break;
      default:
        break;
    }
  }

);
}

// add keyboard event in your page
document.addEventListener("keydown", function(event){
    // get the key value
    makeSound(event.key);
});

function makeSound (key) {
  
}
