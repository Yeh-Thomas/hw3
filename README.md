# hw3

1. What code draws the blades of grass? 

 line(x, height-10, x+random(-10, 10), height-10-random(h));

2. What code makes the "lawnmower" come by? How often does it come by?

if (random(100) > 99.9) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  Every time when "height-10-random(h)" the "h" reach over 100 the lawnmower will come by.


3. What's the point of the h variable?

It is the height of the grass. It will gradually increase by three, 
and when it reaches to a certain height the lawnmower will reset the height of the grass

4. What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?

Grass is drawn by lines, and the line needs two point to draw, 
height-10-random(h) is one of the point that decide the height of the grass,
since the first point is at the bottom "x, height-10", "height-10-random(h)" as second point will
become height and decrease in order to get higher. 
