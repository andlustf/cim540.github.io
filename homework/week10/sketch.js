var x = 80;
var y = 60;
var speed = 3.3;


function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  currentTime = millis ();
  if (currentTime < 5000) {
     y += speed;
    if (y > height) {
        y = 0;
        x = random (0, width);
      }
    stroke(255);
      line(x, y, x, y+20);
      line(2*x, y-30, 2*x, y+20-30);
      line(3*x, y-30, 3*x, y+20+50);
      line(4*x, y-30, 4*x, y+20-10);
  } else {
/*    y = y;
      if (y > height) {
          y = 20;
}*/
  fill(255, 255, 0);
  noStroke()
  ellipse(width/2, y, 45, 45);
  }
}
