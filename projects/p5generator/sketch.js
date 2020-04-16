
// Setup variables
let inc = .3;
let complexity = .5;
var cols, rows;
let zoff = 0;
let particles = [];
let flowfield = [];

let sliderR
let sliderG
let sliderB
let sliderA
let sliderWeight
let colorPicker

//Flowfield settings
let strength = .4
let birthamt = 2400;
let scl = 40;

// Drawing settings
let colorR = 0
let colorG = 100
let colorB = 255
let alpha = .1
let weight = 2

let cnv;

// https://github.com/processing/p5.js/wiki/Positioning-your-canvas
// https://github.com/awgreenblatt/gradientmaps

function setup() {
  cnv = createCanvas(windowWidth-120, 700);
  //cnv.parent('generator-holder');
  background(255);
  // Color Mode
  colorMode(RGB, 255, 255, 255, 1);

  colorPicker = createColorPicker('#9FA0EB');

  // Controls Setup
  // Color Sliders
  sliderR = createSlider(0, 255, 0, 0);
  sliderG = createSlider(0, 255, 0, 0);
  sliderB = createSlider(0, 255, 0, 0);
  sliderA = createSlider(0, .05, .01, 0);
  // Weight Slider
  sliderWeight = createSlider(0,10,2,0);

  cols = floor(width/scl)
  rows = floor(height/scl)

  // Set up flow field vector array
  flowfield = new Array(cols * rows);

  // Create Particles
  for (let i = 0; i < birthamt; i++) {
    particles[i] = new Particle();
  }

}

function draw() {
// Variables

  noiseDetail(complexity);
  var yoff = 0;

// Draw Flow Field Vectors
  for (y = 0; y < rows; y++){
    let xoff = 0;
    for (x = 0; x < cols; x++){

      // store vectors in flowfield array
      let index = (x + y * cols);
      flowfield[index] = v;

      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);

      v.setMag(strength);

      xoff += inc;

    }
    yoff += inc;
    zoff += 0.001;


  // Controls

  // Color Sliders
  colorR = sliderR.value();
  colorG = sliderG.value();
  colorB = sliderB.value();
  alpha = sliderA.value();
  // Weight Slider
  weight = sliderWeight.value();
  }



// Update particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show(colorR, colorG, colorB, alpha ,weight);
  }

}

function keyTyped() {
  if (key === 'q'){
    background(colorPicker.value())
  }
}
