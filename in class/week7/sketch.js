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

var bgImg;
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
}
