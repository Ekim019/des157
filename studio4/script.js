"use strict";

// send message to console
console.log("reading js");


var mygame = document.querySelector('#mygame');

// var pixel = document.getElementById('pixel');
var pixel = document.querySelector('#pixel');
var pixelW = pixel.offsetWidth;
var pixelH = pixel.offsetHeight;

var container = document.querySelector('#container');
var containerW = 540;
var containerH = 540;



var mygameLeft = 0;
var mygameTop = 0;

var score = document.querySelector('#score');
var scoreCount = 0;

var pixelInterval = setInterval(moveDiv, 1000);

// pixel.addEventListener("e.keyCode", updateScore);
mygame.addEventListener("e.keyCode", updateScore);

function moveDiv() {

  var newLeft = Math.floor(Math.random() * (containerW - pixelW)) + "px";
  var newTop = Math.floor(Math.random() * (containerH - pixelH)) + "px";


  // update pixel location
  pixel.style.left = newLeft;
  pixel.style.top = newTop;

}
console.log(moveDiv);

function anim(e) {
  clearInterval(pixelInterval);
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

    // if(mygameLeft>=500){
    //   mygameLeft-=20;
    // }
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
  pixel.addEventListener("e.keyCode", updateScore);
}

document.onkeydown = anim;

function updateScore() {
  scoreCount++;
  score.innerHTML = "Score:" + scoreCount;
}
