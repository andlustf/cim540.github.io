function setup () {
  // put setup code here
  createCanvas (480, 120);
  background (204);
}

function draw () {
  // if the mouse is clicked within the left rectangle
  if (mouseIsPressed && mouseButton == LEFT) {
    fill (255, 0, 0); // paint color red
  } else {
    fill (255);
  }
  rect (90, 30, 60, 60); // draw the left rectangle

  // if the mouse is clicked within the right rectangle
  if (mouseIsPressed && mouseButton == RIGHT) {
    fill (0, 255, 0); // paint color green
  } else {
    fill (255);
  }
  rect (330, 30, 60, 60); // draw the right rectangle
}
