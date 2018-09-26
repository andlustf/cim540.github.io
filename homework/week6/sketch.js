var x = 120;
var y = 120;
function setup () {
  createCanvas (480, 480);
}

function draw () {
  background (0);

  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      x = x - 10;
    } else if (keyCode == RIGHT_ARROW) {
      x = x + 10;
    }
    if (keyCode == UP_ARROW) {
      y = y - 10;
    } else if (keyCode == DOWN_ARROW) {
      y = y + 10;
    }
    if (key == 'd') {
      stroke (255, 255, 0);
      line (x + 10, y + 10, width, y);
 }
}
    fill (255);
    rect (x, y, 50, 50);
}
