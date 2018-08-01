// kim,Eunice-script.js des157
// p5 file
console.log("this is script.js comment");
// this varation is refering to the geometric shape of x and y.
var spot = {
  x: 100,
  y: 50
};
//this varation is refering to the color of red,green and blue(primary color).
var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  var myCanvas = createCanvas(800, 250); //size of canvas
  //has to parent to an id
  myCanvas.parent('mySketch');
  background(0);
}

function draw() {

  // if mouse pressed the rectangle and the random blue,green mix color come out.(randomly spot on the width and height)
  if (mouseIsPressed) {
    col.r = 0;
    col.g = random(100, 180);
    col.b = random(100, 255);

    cursor(CROSS);
    rect(spot.x, spot.y, 50, 50);
    //if the mouse doesn't pressed the ellipse with red,blue mix color all over the random width and height.
  } else {

    col.r = random(100, 255);
    col.g = 0;
    col.b = random(100, 180);

    ellipse(spot.x, spot.y, 30, 30);
  }
  //random variable of the width and height spot of the rectangle and ellipse.
  spot.x = random(0, width);
  spot.y = random(0, height);
  fill(col.r, col.g, col.b);
  stroke(col.r, col.g, col.b, 100);
}
