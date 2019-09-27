var x = 225;
var y = 220;

var waterX = 212;
var waterY = 396;
var waterHeight = 35;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0, 50);
  noStroke();

  // draw drip
  fill(0, 150, 200);
  ellipse(x, y, 10);
  
  // draw pipe
  fill(200);
  rect(90, 200, 130, 20); //neck
  rect(90, 160, 20, 240); //body
  rect(210, 200, 30, 30); // tip
  rect(90, 160, 50, 10); //top

  rect(210, 360, 30, 40); //cup
  
  fill(0, 150, 200); //water
  rect(waterX, waterY, 26, waterHeight);
  
  if(y >= height){
    waterY -= 3;
     } // adding water into the cup
  
  if(waterY < 365){
    waterY = 396;
     } //reset
  
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 3

  // if invisible for a full “height” amount…
  if (y > height) {
    // reset
    y = 220;
  }
}
