/*
 function setup() {
  createCanvas (800, 800);
  strokeWeight (2);
}

function draw() {
background (204);
for (var i = 20; i < 400; i += 20) {
  line (i, 0, i + i/2, 80);
  ellipse (i + i/2, 80, 10, 10);
  }
}

 var x = 10;
 var y = 100;
 var w = 200;
 var d = 70;

 function setup() {
   createCanvas(800, 400);
   background(204);
   noFill();
     // put setup code here
 }

 function draw() {
     // put drawing code here
 for(var i = 1; i < 21; i++) {
   line(x*i, 0, x*i, 400);
   }
 }


 function setup() {
   for(var i = 1; i < 5; i++) {
     print(i);
     // to check on console how many circles you actually have
   }
 }

 function draw() {
   for(var i = 1; i < 5; i++) {
     print(i);
   }
 }


 function setup() {
   createCanvas(800, 400);
   background(204);
   fill(255, 0, 0);
     // put setup code here
 }

 function draw() {
   for(var i = 20; i < 400; i += 20) {
     line(i, 0, i + i/2, 80);
     ellipse(i+i/2, 80, 10, 10);
   }
 }
*/

var d = 50;

function setup() {
  createCanvas (480, 120);
  background (0);
}

function draw() {
  for (var j =0; j <10; j++) {
    for (var i =0; i <20; i++) {
      ellipse (i*d, j*d, d, d);
    }
  }
}
