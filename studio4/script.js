var myGame;
var x=100;
var y=100;
var human = document.getElementById('human');
function setup(){
  createCanvas(512,512);

}

// function coolGame(){
//   myGameArea.start();
//   myGame=new component(30,30,"red",10,120);
// }
// var myGameArea={
//   canvas:document.createElement("canvas"),
//   start: function(){
//     this.canvas.width=480;
//     this.canvas.height=270;
//     this.context=this.canvas.getContext("2d");
//   }
// }
human.addEventListener('keyIsDown',function(){
  if(human(LEFT_ARROW)){
    x-=5;
  }

    if(keyIsDown(RIGHT_ARROW)){
      x+=5;
    }

  clear();
  human(x,y,50,50);

}
