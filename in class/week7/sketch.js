/* var sheep;
var dog;

function preload() {
  sheep = loadImage ('lamb.jpeg');
  dog = loadImage ('dog.jpeg');
}

function setup () {
  createCanvas (480, 240);
  background (204);
}

function draw () {
  image (sheep, 0, 0, 240, 120);
  image (dog, 240, 120, 240, 120);
}*/

/* var bgImg;
var houseImg;

function preload () {
  bgImg = loadImage ('landscape.jpg');
  houseImg = loadImage ('house.png');
}

function setup () {
  createCanvas (480, 300);
}

function draw () {
  image(bgImg, 0, 0);
  // apply transparency without changing color
  tint (255, 20);
  image (houseImg, 20, 100, 400, 200);
}*/

// ADD A BUTTON

/* var button;

function setup () {
  createCanvas (240, 240);
  background (205);

  button = createButton ('click');
  button.position (200, 200);
}*/

// ADD ONE

/* var button;
var count = 0;

function setup () {
  createCanvas (240, 240);
  textSize (24);
  textAlign (CENTER);
  fill (255);

  button = createButton ('click');
  button.position (200, 200);
  button.mousePressed (increaseCount);
}

function increaseCount () {
  count += 1;
}

function draw () {
  background (0);
  text (count, 120, 120);
}*/


// ADD AND SUBSTRACT 1

/* var button;
var count = 0;

function setup () {
  createCanvas (240, 240);
  textSize (24);
  textAlign (CENTER);
  fill (255);

  buttonUp = createButton ('+');
  buttonUp.position (200, 200);
  buttonUp.mousePressed (increaseCount);
  buttonDown = createButton ('-');
  buttonDown.position (40, 200);
  buttonDown.mousePressed (decreaseCount);
}

function increaseCount () {
  count += 1;
}
function decreaseCount () {
  count -= 1;
}

function draw () {
  background (0);
  text (count, 120, 120);
}*/

// MOVE COLORED CIRCLE
/*
var buttonDown;
var buttonUp;
var count = 120;

function setup () {
  createCanvas (240, 240);

  buttonUp = createButton ('Down');
  buttonUp.position (180, 200);
  buttonUp.mousePressed (increaseCount);

  buttonDown = createButton ('Up');
  buttonDown.position (40, 200);
  buttonDown.mousePressed (decreaseCount);
}

function increaseCount () {
  count += 5;
}
function decreaseCount () {
  count -= 5;
}

function draw () {
  background (205);
  fill (0, 255, 255);
  ellipse (120, count, 40, 40);
}*/

// CLEAR BUTTON

var btn;
var count = 0;
var count= 120;

function setup() {
  createCanvas(240, 240);
  background(255);
  
  btn = createButton('Clear');
  btn.position(120, 200);
  btn.mousePressed(restart);
}

function draw() {

  fill(255);
  ellipse(mouseX, mouseY, 10, 10);
}

function restart() {
  createCanvas (240, 240);
  background (255);
}
