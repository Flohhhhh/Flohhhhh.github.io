let amt = 200;
let xsize = 75;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop()
  angleMode(DEGREES)
}

function draw() {
  background("#C7DDFC");

  for (i = 0; i < amt; i++) {
    hamburger(random(20, windowWidth), random(20, windowHeight-100), xsize, xsize * .15);
  }
}

function hamburger(x, y, width, height) {

  push()
  translate(x, y)
  rotate(random(-180, 180))


  strokeWeight(0)
  rectMode(CENTER);
  //patty
  fill("#593318")
  rect(0, 0, width, height)

  //lettuce
  fill("#5AE049")
  rect(0, -height, width, height - height / 2)

  //tomato
  fill("#FF3E3E")
  rect(0, -height * 1.75, width, height - height / 2)

  //bun top
  fill("#D9B259")
  arc(0, -height * 2.25, width, width, 180, 0, CHORD)

  //bun bottom
  fill("#D9B259")
  rect(0, +height * 1.25, width, height)

  pop()
}