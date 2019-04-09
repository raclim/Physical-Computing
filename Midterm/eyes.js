class eyes {
  constructor() {
    this.LeyeX = width*3/4-30;
    this.ReyeX = width*3/4+30;
    this.speed = -0.5;
  }
  show() {
  fill(255);
  noStroke();
  ellipse(width*3/4-40,height*3/4,50,60); //left-eye
  ellipse(width*3/4+20,height*3/4,50,60); //right-eye
  fill(0);
  ellipse(this.LeyeX,height*3/4,30,30); //left-pupil
  ellipse(this.ReyeX,height*3/4,30,30); //right-pupil
  this.update();
  }
  
  update() {
    this.LeyeX = this.LeyeX + this.speed;
    this.ReyeX = this.ReyeX + this.speed;
    this.updateSpeed();
  }
  updateSpeed() {
    let radius = 15;
    if (this.LeyeX < width*3/4-40-radius && this.ReyeX < width*3/4+20-radius || this.LeyeX > width*3/4-40+radius && this.ReyeX > width*3/4+20+radius) {
      this.speed = -this.speed;
    }
  }
}