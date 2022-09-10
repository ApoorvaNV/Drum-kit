for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var exp = this.innerHTML;
    makesound(exp);
    highlight(exp);
  });
}

document.addEventListener("keydown",function(event){
  var key=event.key;
  makesound(key);
  highlight(key);
});

function makesound(exp){
  switch (exp) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:console.log(exp);

  }

}

function highlight(exp){
  document.querySelector("."+exp).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+exp).classList.remove("pressed")},100)
}
