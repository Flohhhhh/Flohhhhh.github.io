
let inc = .3;
let complexity = .5;


var cols, rows;

let zoff = 0;

let particles = [];

let flowfield = [];

//Flowfield settings
let strength = .4
let birthamt = 40;
let scl = 60;

let color = (50,50,50,255)

let cnv;


function setup() {
  cnv = createCanvas(windowWidth-120, 800);
  cnv.addClass("generator")
  background(255);

  cols = floor(width/scl)
  rows = floor(height/scl)

  // Set up flow field vector array
  flowfield = new Array(cols * rows);

  // Create Particles
  for (let i = 0; i < birthamt; i++) {
    particles[i] = new Particle('#E8BAC8');
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

      // stroke(0,0);
      // strokeWeight(1);
      // push();
      // translate(x * scl, y * scl)
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();

    }
    yoff += inc;
    zoff += 0.001;
  }


// Update particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

}
