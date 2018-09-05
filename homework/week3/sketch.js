var x = 80;
var y = 40;
var d = 200;
var s = 100;

function setup() {
  // put setup code here
  createCanvas (1400, 800);
  background (204);

}

function draw() {
  rect (x, y, s, s);
  rect (x + d, y, 2*s, 2*s);
  rect (x + s + 2*d, y, 3*s, 3*s);
}
