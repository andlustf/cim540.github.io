function setup() {
  // put setup code here
  createCanvas (800, 800);
  background (204);
  angleMode (DEGREES);
  noStroke ();
}

function draw() {
// pacman
  fill (255, 255, 0);
  arc (90, 60, 80, 80, 45, 315);
  arc (180, 60, 80, 80, 45, 295);
  arc (270, 60, 80, 80, 45, 305);
  arc (360, 60, 80, 80, 45, 335);
// circle
  fill (153);
  ellipse (400, 250, 200, 200);
// circle w no fill
  noFill ();
  ellipse (500, 106, 200, 200);
// RGB circles
  fill (255, 0, 0, 160);
  ellipse (100, 400, 100, 100);
  fill (0, 255, 0, 160);
  ellipse (150, 350, 100, 100);
  fill (0, 0, 255, 160);
  ellipse (170, 415, 100, 100);
}
