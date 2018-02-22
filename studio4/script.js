"use strict";

// send message to console
console.log("reading js");


var mygame = document.querySelector("#mygame");

var pixel = document.querySelector("#pixel");
var pixelW = pixel.offsetWidth;
var pixelH = pixel.offsetHeight;

var container = document.querySelector("#container");
var containerW = 540;
var containerH = 540;

var newLeft;
var newTop;


var mygameLeft = 0;
var mygameTop = 0;

var score = document.querySelector("#score");
var scoreCount = 0;

// var reset=document.querySelector("#stop");

var pixelInterval = setInterval(moveDiv, 3000);
// reset.addEventListener("click", resetmyGame);

function moveDiv() {
  newLeft = Math.floor(Math.random() * (containerW - pixelW));
  newTop = Math.floor(Math.random() * (containerH - pixelH));

  // update pixel location
  pixel.style.left = newLeft + "px";
  pixel.style.top = newTop + "px";

  updateScore();
  // resetmyGame();
}
console.log(moveDiv);

function anim(e) {

  //alert(e.keyCode) to figure it out the number of key pressed of the arrow(up,down,left,right)
  // left keypress
  if (e.keyCode === 39) {
    mygameLeft += 20;
    mygame.style.left = mygameLeft + 'px';
    if (mygameLeft >= containerW) {
      mygameLeft -= 20;
    }
  }
  // right keypress
  if (e.keyCode === 37) {
    mygameLeft -= 20;


    mygame.style.left = mygameLeft + 'px';
    if (mygameLeft <= 0) {
      mygameLeft += 20;
    }
    // down keypress
  }
  if (e.keyCode === 40) {
    mygameTop += 20;
    mygame.style.top = mygameTop + 'px';

    if (mygameTop >= containerH) {
      mygameTop -= 20;
    }
  }
  // up keypress
  if (e.keyCode === 38) {
    mygameTop -= 20;

    mygame.style.top = mygameTop + 'px';
    if (mygameTop <= 0) {
      mygameTop += 20;
    }
  }
  updateScore();
  // resetmyGame();

}
document.onkeydown = anim;



function updateScore() {

  console.log(mygameLeft, mygameTop, newLeft, newTop);
  // if(mygameLeft mygameTop newLeft newTop) {
  if (Math.abs(mygameLeft - newLeft)< 3) {
    scoreCount++;
    score.innerHTML = "Score:" + scoreCount;
  }
  if (Math.abs(mygameTop - newTop) < 3) {
    scoreCount++;
    score.innerHTML = "Score:" + scoreCount;
  }

}

// function resetmyGame(){
// clearInterval (pixelInterval);
// scoreCount=0;
//   score.innerHTML="Score:"+scoreCount;
//
//   pixel.style.display='block';
//
//   pixelInterval=setInterval(moveDiv,3000);
// }
