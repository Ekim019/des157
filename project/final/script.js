console.log("reading js");
// page part
("use strict");

// get all articles as an array
var pages = document.querySelectorAll(".page");
var links = document.querySelectorAll("a");


// bind event listener to each link by traversing the array called "links"
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    console.log(event.currentTarget.id);

    // hide all pages
    hidePages();

    // show the associated article by concatenating a '#' before and a c' after the event.currentTarget.id
    document.querySelector('#' + event.currentTarget.id + 'c').classList.remove('hidden');
  })
}

// function to hide all articles
function hidePages() {
  for (var i = 0; i < pages.length; i++) {
    console.log('hide pages');
    pages[i].classList.add("hidden");
  }
}

function save() {
  var fieldValue = document.getElementById('userName').value;
  localStorage.setItem('text', fieldValue);
  var fieldValue = document.getElementById('stress').value;
  localStorage.setItem('option', fieldValue);
  var gender = document.getElementById('gender').value;
  localStorage.setItem('option2', fieldValue);

}

function load() {
  var storedValue = localStorage.getItem('text');
  var storedValue = localStorage.getItem('option');

  if (storedValue) {
    document.getElementById('userName').value = storedValue;
    document.getElementById('userAge').value = storedValue;
    document.getElementById('gender').value = storedValue;
    document.getElementById('stress').value = storedValue;
  }
}


// game part

"use strict";

// send a message to the console
console.log("reading js");
var page3 = document.querySelector("#page3");
var pixel = document.querySelector("#pixel");
var pixelW = 45; // width of pixel
var pixelH = 45; // height of pixel
var section = document.querySelector("section");
var sectionW = 750; // for width of section, updated in moveDiv
var sectionH = 320; // height of section, updated in moveDiv
var score = document.querySelector("#score");
var scoreCount = 0; // beginning score
var timeLeft = document.querySelector("#timeLeft");
var count = 30; // for the time remaining, starts at 30
var reset = document.querySelector("#stop");
var gameOverImg = document.querySelector('#gameOverImg');
var gameOverAnim; // animation
var gameOverX = -200; // x position of graphic
var screenW = screen.width;
var pixelInterval = setInterval(moveDiv, 1500); // change the second parameter to move the pixel faster/slower
var countInterval; // to display Time Remaining
var timerId; // to end the game when the time limit is reached
page3.addEventListener("click", gamestart);

// bind click eventListener to pixel with a custom callback function
pixel.addEventListener("click", updateScore);

// bind click eventListener to reset with a custom callback function
reset.addEventListener("click", resetGame);

// moveDiv moves the pixel randomly with the area of the section
function moveDiv() {
  // get section width and height
  sectionW = section.offsetWidth; // width of section
  sectionH = section.offsetHeight; // height of section

  console.log('sectionW: ' + sectionW + '; sectionH: ' + sectionH);

  var newLeft = Math.floor(Math.random() * (sectionW - pixelW));
  var newTop = Math.floor(Math.random() * (sectionH - pixelH));

  pixel.style.left = newLeft + "px";
  pixel.style.top = newTop + "px";

}

// updateScore updates the scoreCount and adds the score to the UI
function updateScore() {
  scoreCount++;
  score.innerHTML = "Score: " + scoreCount;
}

function gamestart() {
  countInterval = setInterval(countDown, 1000);
  timerId = setTimeout(gameOver, 1000 * count);
}

// update the time remaining and display in UI
function countDown() {
  count = count - 1; // same as count--
  section.style.opacity = count * .5; // darken the screen
  timeLeft.innerHTML = "Time Remaining: " + count; // show remaining time on screen
}

// show an alert with the score and clear the timeout and reset the game
function gameOver() {
  timeLeft.innerHTML = "Time Remaining: 0";
  alert("Good Gob! " + "Game Over!" + " Your score is " + scoreCount + " ! " + "do you want play agian?");
  // hide pixel
  pixel.style.display = 'none';

  playGameOverAnim();
  // resetGame();
}

// play animation around viewport
function playGameOverAnim() {
  // clear intervals and timeout in case user
  // resets before timeout is reached
  clearInterval(pixelInterval);
  clearInterval(countInterval);
  clearTimeout(timerId);

  gameOverAnim = requestAnimationFrame(playGameOverAnim);
}

// reset all variables and UI features
function resetGame() {
  // console.log("reset");

  // clear intervals, timeout and animation
  clearInterval(pixelInterval);
  clearInterval(countInterval);
  clearTimeout(timerId);
  // cancelAnimationFrame (gameOverAnim);
  // gameOverImg.style.display = "none";

  // reset scoreCount and count
  scoreCount = 0;
  count = 30;
  // gameOverX = -200;

  // update interface
  timeLeft.innerHTML = "Time Remaining: " + count;
  score.innerHTML = "Score: " + scoreCount;
  // section.style.opacity = 1;
  pixel.style.display = 'block';

  // start intervals and timer again
  pixelInterval = setInterval(moveDiv, 1500);
  countInterval = setInterval(countDown, 1000);
  timerId = setTimeout(gameOver, 1000 * count);
}

//adding fullscreen button
var fullS = document.querySelector("#fullScreen");
fullS.addEventListener("click", requestFullScreen);

function requestFullScreen() {
  var body = document.querySelector('body');
  // expand section height
  section.style.height = '70%';
  fullS.style.display = "none";

  // going fullscreen. supports most browsers and their versions
  var requestMethod =
    body.requestFullScreen ||
    body.webkitRequestFullScreen ||
    body.mozRequestFullScreen ||
    body.msRequestFullScreen;

  if (requestMethod) {
    // native full screen
    requestMethod.call(body);
  } else if (typeof window.ActiveXObject !== "undefined") {
    // older IE
    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
  console.log('exitHandler');
  if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {

    fullS.style.display = 'inline';
    section.style.height = '320px';
  }
}