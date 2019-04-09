class moon {

  constructor() {
    this.width = width/4;
    this.height = height/4;
    this.circleSize = 100;
  }
  show() {
    noStroke();
    fill(255, 246, 183);
    ellipse(this.width, this.height, this.circleSize, this.circleSIze);
    fill(200);
    ellipse(this.width - 30, this.height - 30, 10, 10);
    ellipse(this.width + 20, this.height + 20, 10, 30);
    ellipse(this.width - 20, this.height - 20, 10, 20);
  }
}