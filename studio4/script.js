"use strict";

// send message to console
console.log("reading js");


var mygame=document.getElementById('mygame');
var container=document.getElementById('container');
var pixel=document.getElementById('pixel');
// var pixel = document.querySelector("#pixel");
var pixelW = pixel.offsetWidth; 
var pixelH = pixel.offsetHeight;

// var container=document.quarySlector('#container');
// var containerW = container.offsetWidth; 
// var containerH = container.offsetHeight;

var mygameLeft=0;
var mygameTop=0;

var score = document.querySelector('#score');
var scoreCount = 0;

var pixelInterval = setInterval(moveDiv, 1000);

pixel.addEventListener("e.keyCode", updateScore);

function moveDiv() {
  // get random values for new position with 'px' for the css
  // The Math.random() method generates a random number between 0 and almost 1
  // The Math.floor() method rounds a number downwards to the nearest integer
  var newLeft = Math.floor(Math.random() * (containerW - pixelW)) + "px";
  var newTop = Math.floor(Math.random() * (containernH - pixelH)) + "px";
  

  // update pixel location
  pixel.style.left = newLeft;
  pixel.style.top = newTop;
 
}

function anim(e){
  //alert(e.keyCode) to figure it out the number of key pressed of the arrow(up,down,left,right)
// left keypress
  if(e.keyCode===39){
mygameLeft+=20;
mygame.style.left=mygameLeft+'px';
  } 
  // right keypress
  if(e.keyCode===37){
    mygameLeft-=20;

    if(mygameLeft>=600){
      mygameLeft-=20;
    }
mygame.style.left=mygameLeft+'px';
if(mygameLeft<=0){
  mygameLeft+=20;
}
 // down keypress
  } if(e.keyCode===40){
    mygameTop+=20;
    mygame.style.top=mygameTop+'px';
      }
       // up keypress
   if(e.keyCode===38){
      mygameTop-=20;
      mygame.style.top=mygameTop+'px';
      
        }
}

document.onkeydown =anim;

function updateScore(){
  scoreCount++;
  score.innerHTML="Score:"+
  scoreCount;
}




