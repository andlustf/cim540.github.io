function setup() {
  // put setup code here
  createCanvas (800, 400);
  background (204);
}

function draw() {
  fill (0);
  beginShape ();
  vertex (160, 80);
  vertex (185, 120);
  vertex (215, 120);
  vertex (240, 80);
  vertex (265, 120);
  vertex (255, 140);
  vertex (400, 140);
  vertex (435, 160);
  vertex (550, 80);
  vertex (575, 100);
  vertex (460, 180);
  vertex (560, 240);
  vertex (470, 240);
  vertex (470, 320);
  vertex (445, 320);
  vertex (445, 240);
  vertex (350, 240);
  vertex (350, 320);
  vertex (325, 320);
  vertex (325, 240);
  vertex (255, 240);
  vertex (255, 180);
  vertex (185, 180);
  vertex (135, 120);
  endShape ();
  fill (0, 0, 255);
  ellipse (180, 140, 13, 13);
  ellipse (220, 140, 13, 13);
  ellipse (200, 160, 30, 13);

}
