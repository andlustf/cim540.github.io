//MOAI CODE
/*   rect (40, 40, 80, 160);
  ellipse (65, 90, 20, 70);
  ellipse (100, 65, 20, 20);
  line (120, 160, 80, 160);*/

//constructor for moai
function Moai (initX, initY, size, color) {
  // properties: location (x, y)
  this.x = initX;
  this.y = initY;
  this.size = size;
  this.color = color;
  // methods: buildmoai ()
  this.buildmoai = function () {
    rect (this.x, this.y, this.size, this.size*2);
    ellipse (this.x+this.y/8, this.y+this.size, 20, 70);
    ellipse (this.x+60, this.y+25, this.size/4, this.size/4);
    line (this.x+80, this.y+120, this.size, this.size*2);
  }
}

var moai1;
var moai2;
var moai3;

function setup () {
  createCanvas (480, 240);
  background (204);
  angleMode (DEGREES);
  moai1 = new Moai (40, 40, 80, 160);
  moai2 = new Moai (160, 40, 80);
}

function draw () {
  moai1.buildmoai ();
  moai2.buildmoai ();
}
