class scary {
  show() {
    fill(255);
    noStroke();
    ellipse(width/2,height/2,400,400); //face
    //eyes
    for (let i=100; i>0; i-=10) {
      fill(100-i);
      ellipse(width/2-75,height/2,i,i);
      ellipse(width/2+50,height/2,i,i);
    }
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(width/2,height/2,300,300,radians(30),radians(150));//smile
  }
}