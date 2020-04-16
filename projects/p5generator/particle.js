function Particle(color) {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxSpeed = 3;
  this.prevPos = this.pos.copy();
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed)
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.color = color

  this.show = function(colorR, colorG, colorB, alpha ,weight) {

    stroke(colorR, colorG, colorB, alpha);
    strokeWeight(weight);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)

    this.updatePrev();
  }

  this.updatePrev = function() {
     this.prevPos.x = this.pos.x;
     this.prevPos.y = this.pos.y;
   };

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  };

  this.follow = function(vectors) {
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }
}
