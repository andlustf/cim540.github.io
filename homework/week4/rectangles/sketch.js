var x = 25;
var h = 20;
var y = 25;


function setup() {
  createCanvas(1200, 400);

}


function draw() {
  background(204);
  x = 20;
  rect(x, y, 120, h);
  x = x + 120;
  rect(x, y + h, 120, h);
  x = x + 120;
  rect(x, y + h*2, 120, h);
  x = x + 120;
  rect(x, y + h*3, 120, h);
  x = x + 120;
  rect(x, y + h*4, 120, h);
  x = x + 120;
  rect(x, y + h*5, 120, h);
  x = x + 120;
  rect(x, y + h*6, 120, h);
  x = x + 120;
  rect(x, y + h*7, 120, h);
  x = x + 120;
  rect(x, y + h*8, 120, h);
  x = x + 120;
  rect(x, y + h*9, 120, h);
  x = x + 120;
  rect(x, y + h*10, 120, h);
  x = x + 120;
  rect(x, y + h*11, 120, h);
  x = x + 120;
  rect(x, y + h*12, 120, h);

}
