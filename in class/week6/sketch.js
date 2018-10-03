/*
var x = 240;
function setup() {
  createCanvas(480,240);
  background(0);

  textSize(20);
  textAlign(CENTER);

  fill(255,255,0);

}
function draw() {
  if (keyIsPressed) {
    if(keyCode== LEFT_ARROW) {
       x= x-5;
    }
    if(keyCode == RIGHT_ARROW) {
      x= x+5;
    }
  }

//fill(255,0,0);
//when the key is pressed, the 3rd value has to be changed
//rect(0, 0, 240, 240);
//fill(0,0,255);
//when the key is pressed, the 1st and 3rd values have to be changed
//rect(x, 0, width-x, height);

}

  background(0);
  if (keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
      text("Left key is pressed.", width/2, height/2);
    }
      if(keyCode == RIGHT_ARROW){
      text("Right key is pressed.", width/2, height/2);
    }

  if(key=='c'){
  textSize(30);
  text('A NEW HOPE', 240 , 20);
  textSize(15);
  text('It is a period of civil war', 240, 50);
  textSize(20);
  text('Rebel spaceships, striking', 240, 100);
  textSize(30);
  text('from a hidden base, have won', 240, 150);
  textSize(37);
  text('their first victory against the evil', 240, 200);
  textSize(40);
  text('Galactic Empire...',240, 250);
}else{
  textSize(30);
  text('Go away, Darth Vader',240,50);
}
}
}
*/
/* var x = 60;
function setup () {
  createCanvas (120, 120);
}

function draw () {
  background (0);
  fill (255);
  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      x = x - 5;
    } else if (keyCode == RIGHT_ARROW) {
      x = x + 5;
    }
  }
  rect (x, 60, 10, 10);
}*/

/* function setup () {
  createCanvas (480, 480);
  background (204);
}

function draw () {
  // some creature
  translate (30, 30);
  rect (0, 0, 20, 20);
  translate (30, 30);
  rect (0, 0, 20, 20;
  translate (30, 30);
  rect (60, 40, 20, 20);
  translate (mouseX, mouseY);
  rect (0, 0, 40, 40);
}

function setup () {
  createCanvas (240, 240);
  background (204);
  angleMode (DEGREES);
}

function draw () {
  rect (120, 0, 40, 40);
  rotate (45);
  rect (120, 0, 40, 40);
}*/

function setup () {
  createCanvas (240, 240);
  background (204);
  angleMode (DEGREES);
}

function draw () {
  line (100, 60, 150, 60)
  translate (mouseX, mouseY)
  rotate (angle);
  line (-10, -10, 40, 40);
  angle += 10;
}
