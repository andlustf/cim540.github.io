var unicorn;
var witch;
var knight;
var castle;
var fairy;
var x = 215;
var y = 215;
var w = 215;
var z = 215;
var v = 215;


function preload() {
  castle = loadImage("midterm-01.png");
  knight = loadImage("midterm-02.png");
  fairy = loadImage("midterm-03.png");
  unicorn = loadImage("midterm-04.png");
  witch = loadImage("midterm-05.png");
}

function setup() {
  createCanvas(1024, 768);
}

function draw() {
  image (castle, 0, 0, 1024, 768);
  image (knight, 512, 384, 512, 384);
  image (witch, mouseX, mouseY, 512, 384);

// move fairy with arrows
   if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      x--;
    }
    else if (keyCode == RIGHT_ARROW) {
      x++;
    }
    else if (keyCode == UP_ARROW) {
      y--;
    }
    else if (keyCode == DOWN_ARROW) {
      y++;
    }
  }
  image (fairy, x, y, 512, 384);

// move unicorn with letters
  if (keyIsPressed) {
    if (key == 'a') {
      w--;
    }
    else if (key == 'd') {
      w++;
    }
    else if (key == 'w') {
      z--;
    }
    else if (key == 's') {
      z++;
    }
  }
  image (unicorn, w, z, 512, 384);

// make knight jump
/* if (keyIsPressed) {
  if (key == 'j') {
    v--;
    }
  }
  image (knight, 512, v, 512, 384);*/
}
