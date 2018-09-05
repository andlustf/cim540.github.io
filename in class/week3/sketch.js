var x = 80;
var y = 40;
var d = 200;
var s = 100;

function setup() {
  // put setup code here
  createCanvas (800, 800);
  background (204);

}

function draw() {
  rect (x, y, s, s);
  rect (x + d, y, 2*s, 2*s);
}
