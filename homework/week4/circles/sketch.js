//Circles

var x = 100;
var y = 70;
var d = 20;
var s = 40;

function setup() {
  createCanvas (1000, 1000);
  background (204);
  noFill ();
}

function draw() {
/*  ellipse (x, y, d, d);
  ellipse (x, y, 2*d, 2*d);
  ellipse (x, y, 3*d, 3*d);
  ellipse (x, y, 4*d, 4*d);
  ellipse (x, y, 5*d, 5*d);
*/
  // Circles
  for (var i = 1; i < 6; i++) {
    ellipse (x, y, i*d, i*d);
  }
  for (var i = 1; i < 6; i++) {
    ellipse (x*3, y, i*d, i*d);
  }
}
