/* function setup() {
  createCanvas (1000, 1000);
  fill (0, 102); // black with transparency
  noStroke ();
}

function draw() {
  ellipse (mouseX, mouseY, 10, 10);
} */

/* function setup() {
  createCanvas (1000, 1000);
  // fill (255, 0, 0, 120); // red with transparency
  background (204);
  // noStroke ();
}

function draw() {
  stroke (255, 0, 0, 100);
  strokeWeight (5);
  line (mouseX, mouseY, pmouseX, pmouseY);
  noStroke ();
  ellipse (mouseX, mouseY, 20, 20);
}*/

/* function setup () {
  createCanvas (900, 900);
  background (204);
  noStroke ();
}

function draw () {
  if (mouseY < 300) {
    fill (255, 0, 0);
  } else if (mouseY < 600){
    fill (0, 0, 255);
  } else {
    fill (0, 255, 0);
  }
  ellipse (mouseX, mouseY, 30, 30);
}*/

function setup() {
  createCanvas(480, 120);
  background(204);
  // noStroke();
  // put setup code here
}

function draw() {

    fill(255, 0, 0);
    if(mouseIsPressed && mouseButton== LEFT) {
      fill(0, 255, 0);
    }else if(mouseIsPressed && mouseButton== RIGHT) {
      fill(242, 255, 0);
    }
  ellipse(240, 60, 50, 50);
  }



// stroke(250, 0, 0, 100);
// strokeWeight(10);
// line(mouseX, mouseY, pmouseX, pmouseY);
// noStroke();
// ellipse(mouseX, mouseY, 10, 10);


// var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
// strokeWeight(weight);
// line(mouseX, mouseY, pmouseX, pmouseY);


// var draw_rect = true;
// if(draw_rect) {
//   rect(10, 10, 10, 10);
// }



// var a_boolean_variable = true;
//
// if(a_boolean_variable) {
//   rect(10, 10, 10, 10);
// } else {
//   ellipse(10, 10, 10, 10);
// }


// if(mouseY<40) {
//   fill(255, 0, 0);
// }else if (mouseY <80){
//   fill(0, 0, 255);
// } else {
//   fill (0, 255, 0);
// }
//
// ellipse(mouseX, mouseY, 10, 10);



// if(mouseX==0 && mouseY==0) {
//   fill(204);
//   // another way of not getting automatic dot
// }else if (mouseY<40){
//   fill(0, 0, 255);
// }else if (mouseY<80){
//   fill (0, 255, 0);
// }
//   else{
//     fill(255, 0, 0);
//   }
//
// ellipse(mouseX, mouseY, 10, 10);
// }
