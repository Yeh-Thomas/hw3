function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
var x = 375;
var y = 375;

function draw() {
  colorMode(HSB);
  stroke(255);

  // draw circle with random hue
  fill(random(width), random(height), 100);
  ellipse(x, y, 20);
  
  // set up next circle
  y = y - 25;

  // if we hit the right edge, go down a line
  if (y <= 0) {
    y = 375;
    x = x - 25;
  }

  // if we hit the bottom edge, reset to top
  if (x <= 0) {
    x = 375;
  }
  
}
