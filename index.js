var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll("button")[i].addEventListener("click", function (){
var buttonInner = this.innerHTML;
switch (buttonInner) {
  case "w":
  var audioW = new Audio("sounds/crash.mp3");
  audioW.play();
  document.querySelector(".w").classList.add("pressed");
  setTimeout(function(){ document.querySelector(".w").classList.remove("pressed"); }, 100);
  break;
  case "a" :
  var audioA =  new Audio("sounds/kick-bass.mp3");
  audioA.play();
  document.querySelector(".a").classList.add("pressed");
  setTimeout(function(){ document.querySelector(".a").classList.remove("pressed"); }, 100);
  break;
  case "s" :
  var audioS = new Audio("sounds/snare.mp3");
  audioS.play();
  document.querySelector(".s").classList.add("pressed");
  setTimeout(function(){ document.querySelector(".s").classList.remove("pressed"); }, 100);
  break;
  case "d" :
  var audioD = new Audio("sounds/tom-1.mp3");
  audioD.play();
  document.querySelector(".d").classList.add("pressed");
  setTimeout(function(){ document.querySelector(".d").classList.remove("pressed"); }, 100);
  break;
  case "j" :
  var audioJ = new Audio("sounds/tom-2.mp3");
  audioJ.play();
  document.querySelector(".j").classList.add("pressed");
  setTimeout(function(){ document.querySelector(".j").classList.remove("pressed"); }, 100);
  break;
  case "k" :
  var audioK = new Audio("sounds/tom-3.mp3");
  audioK.play();
  document.querySelector(".k").classList.add("pressed");
  setTimeout(function(){ document.querySelector(".k").classList.remove("pressed"); }, 100);
  break;
  case "l" :
  var audioL = new Audio("sounds/tom-4.mp3");
  audioL.play();
  document.querySelector(".l").classList.add("pressed");
  setTimeout(function(){ document.querySelector(".l").classList.remove("pressed"); }, 100);
  break;
  default:
  console.log(innerHTML); }
}
);
}
// Adding effects for keyboard click event
document.addEventListener("keydown", function (event) {
  if(event.which == 87 || event.code == "KeyW") {
    var audioW = new Audio("sounds/crash.mp3");
    audioW.play();
    document.querySelector(".w").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".w").classList.remove("pressed"); }, 100);
  } else if (event.which == 65 || event.code == "KeyA") {
    var audioA =  new Audio("sounds/kick-bass.mp3");
    audioA.play();
    document.querySelector(".a").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".a").classList.remove("pressed"); }, 100);
  } else if (event.which == 83 || event.code == "KeyS") {
    var audioS =  new Audio("sounds/snare.mp3");
    audioS.play();
    document.querySelector(".s").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".s").classList.remove("pressed"); }, 100);
  } else if (event.which == 68 || event.code == "KeyD") {
    var audioD = new Audio("sounds/tom-1.mp3");
    audioD.play();
    document.querySelector(".d").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".d").classList.remove("pressed"); }, 100);
  } else if (event.which == 74 || event.code == "KeyJ") {
    var audioJ = new Audio("sounds/tom-2.mp3");
    audioJ.play();
    document.querySelector(".j").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".j").classList.remove("pressed"); }, 100);
  } else if (event.which == 75 || event.code == "KeyK") {
    var audioK = new Audio("sounds/tom-3.mp3");
    audioK.play();
    document.querySelector(".k").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".k").classList.remove("pressed"); }, 100);
  } else if (event.which == 76 || event.code == "KeyL") {
    var audioL = new Audio("sounds/tom-4.mp3");
    audioL.play();
    document.querySelector(".l").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".l").classList.remove("pressed"); }, 100);
  }
}
);
