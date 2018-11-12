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
    noStroke ();
    rect(this.x, this.y, this.size, this.size*2);
    fill(89, 89, 89);
    ellipse(this.x + this.size/4, this.y+ this.size, this.size/3, this.size*1.5);
    ellipse(this.x + this.size/1.5, this.y+this.size/3, this.size/4, this.size/4);
    triangle (this.x + this.size, this.y + this.size/3, this.x + this.size, this.y+this.size, this.x+this.size*1.2, this.y+this.size);
    //triangle(this.x+this.size, this.y+this.x, this.x+this.size, this.y+this.x*3, this.x+this.size*1.2, this.y+this.x*3);
    stroke (0);
    line (this.x+this.size/2, this.y+this.size*1.5, this.x+this.size, this.y+this.size*1.5);
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
  M1 = new Moai(50, 200, 150);
  M2 = new Moai(275, 200, 125);
  M3 = new Moai(450, 200, 100);
  M4 = new Moai(600, 200, 75);
  M5 = new Moai(700, 200, 50);
}

function draw(){
  image(grass, 0, 0, 828, 549);
  M1.buildmoai();
  M2.buildmoai();
  M3.buildmoai();
  M4.buildmoai();
  M5.buildmoai();
}
