function setup() {
  // put setup code here
  createCanvas (800, 400);
  background (204);
}

function draw() {
// frog
// face
  fill (0, 102, 0);
  ellipse (100, 160, 160, 80);
// mouth
  fill (255, 0, 0);
  ellipse (100, 170, 77, 17);
// eyes
  fill (0, 0, 255);
  ellipse (60, 120, 17, 17);
  ellipse (140, 120, 17, 17);
// triangle
  fill (241, 239, 10);
  triangle (80, 30, 20, 80, 120, 80);
  line (20, 30, 150, 30)
// butterfly
// face
  fill (241, 239, 10);
  ellipse (400, 50, 40, 40);
// body
  fill (131, 37, 224);
  rect (381, 70, 37, 100);
// wings
  fill (246, 4, 251);
  quad (300, 30, 382, 70, 382, 170, 300, 200);
  quad (418, 70, 500, 30, 500, 200, 418, 170)
}
