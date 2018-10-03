var angle= 100;

function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(240);
  strokeWeight(4);
  line(200,100,400,100);
  push();
  strokeWeight(10);
  translate(300,100);
  rotate(angle);
  angle += 1/6;
  line(0,0,300,300);
}
