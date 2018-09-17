/* function setup() {
  createCanvas (1000, 1000);
  fill (0, 102); // black with transparency
  noStroke ();
}

function draw() {
  ellipse (mouseX, mouseY, 10, 10);
} */

/* function setup() {
  createCanvas (1000, 1000);
  // fill (255, 0, 0, 120); // red with transparency
  background (204);
  // noStroke ();
}

function draw() {
  stroke (255, 0, 0, 100);
  strokeWeight (5);
  line (mouseX, mouseY, pmouseX, pmouseY);
  noStroke ();
  ellipse (mouseX, mouseY, 20, 20);
}*/

function setup () {
  createCanvas (900, 900);
  background (204);
  noStroke ();
}

function draw () {
  if (mouseY < 300) {
    fill (255, 0, 0);
  } else if (mouseY < 600){
    fill (0, 0, 255);
  } else {
    fill (0, 255, 0);
  }
  ellipse (mouseX, mouseY, 30, 30);
}
