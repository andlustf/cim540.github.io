var street;
var dog;
var bike;

function preload() {
  street = loadImage("street.jpg");
  dog = loadImage("dog.png");
  bike = loadImage("bike.png");
}

function setup() {
  createCanvas(1000, 581);
}

function draw() {
  background (0);
  tint (255);
  image (street, 0, 0, 1032, 580.5);
  tint (255);
  image (dog, 600, 350,300,150);
  tint (0, 255, 0);
  image (dog, 450, 350,300,150);
  tint (255, 0, 0);
  image (dog, 250, 350,300,150);
  tint (0, 0, 255);
  image (dog, 50, 350,300,150);
  tint (255);
  image (bike, mouseX *1, 340, 246, 256);
}
