class ghost {
  show() {
    fill(255);
    ellipse(width/4, height/4, 100,100); //face
    fill(0);
    //ellipse(width/4+30, height/4, 100,100); //shadow
    //fill(255);
    arc(width/4+10, height/4+10, 10,10, radians(320),radians(150)); //right-eye
    arc(width/4-10, height/4+10, 10,10, radians(30),radians(210)); //left-eye
    line(width/4-15, height/4, width/4-5, height/4+11); //left-eyebrow
    line(width/4+5, height/4+11, width/4+10,height/4); //right-eyebrow
    fill(255,0,0);
    noStroke();
    ellipse(width/4+10, height/4+14, 3,3); //right-iris
    ellipse(width/4-10, height/4+14, 3,3); //left-iris
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(width/4,height/4+20,20,20,radians(60),radians(160)); //grin
  }
 
}