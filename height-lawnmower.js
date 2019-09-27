function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
  fill(255);
  rect(0, 0, width, height-10);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);// grass color
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }
    
    
  if (h >= 99.9) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
