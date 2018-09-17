
function setup() {
  createCanvas (800, 400);
  background (204);
  noFill ();
}

function draw() {

  // Extra credit
  for (var y = 20; y <= height-20; y += 10) {
    for (var x = 20; x <= height-20; x += 10) {
      ellipse (x, y, 4, 4);
      line (x, y, 240, 100);
    }
  }
}
