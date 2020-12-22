// Daniel Shiffman
// Neuro-Evolution Flappy Bird with TensorFlow.js
// http://thecodingtrain.com
// https://youtu.be/cdUNkwXx-I4

class Pipe {
  constructor() {
    this.spacing = 175;
    this.top = random(height / 6, (3 / 4) * height); 
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.y = this.x+this.w;
    this.speed = 6;
  }

  hits(bird) {
    let hitTop = this.hasCollided(bird.x, bird.y, bird.size/2, this.x, 0, this.w, this.top)
    if (hitTop) return true;
    let hitBottom = this.hasCollided(bird.x, bird.y, bird.size/2, this.x, height - this.bottom, this.w, this.bottom)
    if (hitBottom) return true;

    return false;


    // if (bird.y < this.top || bird.y > height - this.bottom) {
    //   if (bird.x > this.x && bird.x < this.x + this.w) {
    //     return true;
    //   }
    // }
    // return false;
  }

  hasCollided(cx, cy, rad, rx, ry, rw, rh) {
    let testX = cx;
    let testY = cy;

    if (cx < rx)         testX = rx;      // test left edge
    else if (cx > rx+rw) testX = rx+rw;   // right edge
    if (cy < ry)         testY = ry;      // top edge
    else if (cy > ry+rh) testY = ry+rh;   // bottom edge

    let d = dist(cx, cy, testX, testY);

    if (d <= rad) return true;

    return false;
  }

  show() {
    fill(100);
    rectMode(CORNER);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
