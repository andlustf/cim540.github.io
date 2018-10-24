/* var x = 0;
var speed = 5;
var radius = 40;

function setup () {
  createCanvas (480, 120);
  angleMode (DEGREES);
}

function draw () {
  background (0);
  x += speed;
  if (x > width) {
    speed = -5;
  } else if (x < 0) {
    speed = 5;
  }

  fill (255, 255, 0);
  arc (x, 60, radius, radius, 45, 315);
}*/

/* var x = 0;
var speed = 5;
var radius = 40;
var direction = 1;

function setup() {
  createCanvas(480, 120);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  fill(255, 255, 0);
  if(direction == 1) {
    x += speed;
    arc(x, 60, radius, radius, 45, 315);
    if (x > width) {
      direction = -1;
    }
  } else {
    x -= speed;
    arc(x, 60, radius, radius, 225, 135);
    if (x < 0) {
      direction = 1;
    }
  }
  // moving pacman back and forth
}*/

/* var x = 80;
var y = 0;
var speed = 2;


function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  stroke(255);
  y += speed;
  line(x, y, x, y+20);
  // line(2*x, y-30, 2*x, y+20-30);
  // line(3*x, y-30, 3*x, y+20+50);
  // line(4*x, y-30, 4*x, y+20-10);
  if (y > height) {
    y = 0;
  }
}
// rain drop example*/

/*var x = 80;
var y = 0;
var speed = 2;


function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  stroke(255);
  y += speed;
  line(x, y, x, y+20);
  line(2*x, y-30, 2*x, y+20-30);
  line(3*x, y-30, 3*x, y+20+50);
  line(4*x, y-30, 4*x, y+20-10);
  if (y > height) {
    y = 0;
  }
}
// rain example*/

/*var y = 0;
var speed = 2;


function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  stroke(255);
  y += speed;
  line(x, y, x, y+20);
  line(2*x, y-30, 2*x, y+20-30);
  line(3*x, y-30, 3*x, y+20+50);
  line(4*x, y-30, 4*x, y+20-10);
  if (y > height) {
    y = 0;
    x = random (0, width);
  }
}
// moving rain example*/

/* var x = 80;
var y = 0;
var speed = 2;


function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  currentTime = millis ();
  if (currentTime > 2000) {
     y += speed;
    if (y > height) {
        y = 0;
        x = random (0, width);
      }
    stroke(255);
      line(x, y, x, y+20);
      line(2*x, y-30, 2*x, y+20-30);
      line(3*x, y-30, 3*x, y+20+50);
      line(4*x, y-30, 4*x, y+20-10);
  }
}
// moving rain after 2 secs example*/

/*var angle = 0;
  var x = 0;

function setup () {
  createCanvas (480,120);
  angleMode (DEGREES);
}

function draw () {
  background (0);
  var y = sin (angle);
  ellipse (x, height/2 + y*height/3, 20, 20);
  angle += 20;
  x += 10; // to make slower or faster
  if (x > width) {
    x = 0;
  }
}

// moving in sine wave*/


/* function setup () {
  createCanvas (480,120);
  angleMode (DEGREES);
}

function draw () {
  background (255);
  fill (0, 0, 255);
  for (var x = 0; x < width; x+= 10) {
    var y = sin (x);
  ellipse (x, height/2+y*30, 10, 10);
  }
}

// draw a sine wave*/

var angle = 0;

function setup () {
  createCanvas (480,120);
  angleMode (DEGREES);
}

function draw () {
  background (255);
  fill (0, 0, 255);
  for (var x = 0; x < width; x+= 10) {
    var y = sin (angle + x);
  ellipse (x, height/2+y*30, 10, 10);
  }
  angle += 10;
}

// moving a sine wave
