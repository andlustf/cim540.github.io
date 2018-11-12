//MOAI CODE
/*  rect (40, 40, 80, 160);
  ellipse (65, 90, 20, 70);
  ellipse (100, 65, 20, 20);
  line (120, 160, 80, 160);*/

//constructor for moai
function Moai(initX, initY, size){
  this.x = initX;
  this.y = initY;
  this.size = size;
  this.buildmoai = function(){
    fill(179, 179, 179);
    rect(this.x, this.y, this.size, this.size*2);
    fill(89, 89, 89);
    ellipse(this.x+this.size*.3, this.y+this.size*.8, this.size*.35, this.size*1.4);
    ellipse(this.x+this.size*.7, this.y+this.size*.4, this.size/4, this.size/4);
    triangle (this.x+this.size, this.y+this.size*4, this.x+this.size, this.y+this.x/2, this.x+this.size*1.2, this.y*1.6);
    //triangle(this.x+this.size, this.y+this.x, this.x+this.size, this.y+this.x*3, this.x+this.size*1.2, this.y+this.x*3);
    line (this.x-this.size*.2, this.y*4, this.x*2, this.y+4);
  }
}

var grass;
var M1;
var M2;
var M3;
var M4;
var M5;

function preload() {
  grass = loadImage("moai.jpeg");
}

function setup(){
  createCanvas(828, 549);
  background (204);
  noStroke ();
  M1 = new Moai(50, 275, 125);
  M2 = new Moai(200, 275, 100);
  M3 = new Moai(325, 275, 75);
  M4 = new Moai(425, 275, 50);
  M5 = new Moai(500, 275, 25);
}

function draw(){
  image(grass, 0, 0, 828, 549);
  M1.buildmoai();
  M2.buildmoai();
  M3.buildmoai();
  M4.buildmoai();
  M5.buildmoai();
}
