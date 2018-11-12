// one rubiks cube
/* function setup () {
  createCanvas (480, 120);
  background (204);
  rubikCube (100);
}

function rubikCube () {
  // red
  fill (255, 0, 0);
  rect (50, 20, 15, 15);
  // green
  fill (0, 255, 0);
  rect (65, 20, 15, 15);
  // blue
  fill (0, 0, 255);
  rect (50, 35, 15, 15);
  // purple
  fill (255, 0, 255);
  rect (65, 35, 15, 15);
}*/

// four rubiks cube
/* function setup () {
  createCanvas (480, 120);
  background (204);
  rubikCube (20, 10);
  rubikCube (60, 55);
  rubikCube (270, 20);
  rubikCube (340, 40);
}

function rubikCube (x, y) {
  // red
  fill (255, 0, 0);
  rect (x, y, 30, 30);
  // green
  fill (0, 255, 0);
  rect (x+30, y, 30, 30);
  // blue
  fill (0, 0, 255);
  rect (x, y+30, 30, 30);
  // purple
  fill (255, 0, 255);
  rect (x+30, y+30, 30, 30);
}*/

// using random function to roll dice
/* function setup () {
  createCanvas (480, 120);
  textSize (24);
  textAlign (CENTER);
  background (204);
  rollDice (160, 60);
  rollDice (320, 60);
}

function rollDice (x, y) {
  var number = 1+int(random(6));
  text (number, x, y);
}*/

/*function setup () {
  createCanvas (480, 240);
  textSize(24);
  textAlign(CENTER);
  background(204);
  var number = rollDice();
  if(number == 1) {
    fill(255, 0, 0);
  } else if(number == 2) {
    fill(0, 0, 255);
  } else if(number == 3) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 255);
  }
  rect(100, 10, 50, 50);

  // text(face, 160, 60);
  // face = rollDice();
  // text(face, 320, 60)
}

function rollDice() {
  var number = 1+int(random(4));
  return number;
}*/

/*// constructor for spaceship
function Spaceship (initX, initY) {
  // properties: location (x, y)
  this.x = initX;
  this.y = initY;
  // methods: move () and display ()
  this.move = function () {
    this.x += random (-5, 5);
  }
  this.display = function () {
    ellipse (this.x, this.y, 10, 10);
  }
}

var ship;

function setup () {
  createCanvas (480, 120);
  background (204);
  ship = new Spaceship (width/2, height/2);
}

function draw () {
  ship.move ();
  ship.display ();
}*/

// smiley face
/*function setup() {
  createCanvas (480, 240);
  background(204);
  angleMode(DEGREES);
}

function draw() {
  ellipse(240, 120, 80, 80);
  ellipse(240-20, 120-20, 2, 2);
  ellipse(240+20, 120-20, 2, 2);
  arc(240, 120, 40, 40, 45, 135);
}

function Smiley(initX, initY, size) {
  this.x = initX;
  this.y = initY;
  this.size = size;

  this.smile= function() {
    ellipse(this.x, this.y, this.size, this.size);
  }
}*/

// constructor for Smiley
/* function Smiley (initX, initY, size) {
  // properties: location (x, y)
  this.x = initX;
  this.y = initY;
  this.size = size;
  // methods: smile ()
  this.smile = function () {
    ellipse (this.x, this.y, this.size, this.size);
    ellipse (this.x-this.size/4, this.y-this.size/4, 2, 2);
    ellipse (this.x+this.size/4, this.y-this.size/4, 2, 2);
    arc (this.x, this.y, this.size/2, this.size/2, 45, 135);
  }
}

var smiley1;

function setup () {
  createCanvas (480, 240);
  background (204);
  angleMode (DEGREES);
  smiley1 = new Smiley(width/2, height/2, 80);
}

function draw () {
  smiley1.smile ();
}*/

// constructor for Smiley
function Smiley (initX, initY, size, color) {
  // properties: location (x, y)
  this.x = initX;
  this.y = initY;
  this.size = size;
  this.color = color;
  // methods: smile ()
  this.smile = function () {
    ellipse (this.x, this.y, this.size, this.size);
    ellipse (this.x-this.size/4, this.y-this.size/4, 2, 2);
    ellipse (this.x+this.size/4, this.y-this.size/4, 2, 2);
    arc (this.x, this.y, this.size/2, this.size/2, 45, 135);
  }
}

var smiley1;

function setup () {
  createCanvas (480, 240);
  background (204);
  angleMode (DEGREES);
  smiley1 = new Smiley(width/2, height/2, 80);
  smiley2 = new Smiley (width/2, height/2, 20);
}

function draw () {
  fill (255, 0, 0);
  smiley1.smile ();
  fill (0, 0, 255);
  smiley2.smile ();
}
