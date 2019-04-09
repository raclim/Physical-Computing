class jack {
  show() {
  //stem
  noFill();
  stroke(103, 163, 81);
  strokeWeight(16);
  arc(width/2+7, height/2-87,30,30,radians(90),radians(240));
  
  
  fill(255,165,0);
  stroke(191, 99, 63);
  strokeWeight(4);
  //pumpkin
  ellipse(width/2+50, height/2, 100,130);
  ellipse(width/2-50, height/2, 100,130);
  ellipse(width/2+25, height/2, 100,150);
  ellipse(width/2-25, height/2, 100,150);
  ellipse(width/2, height/2, 80,150);
  
  //eyes
  fill(0);
  stroke(191, 99, 63);
  triangle(width/2-35, height/2-25, width/2-50,height/2+5, width/2-20,height/2+5); //left
  triangle(width/2+35, height/2-25, width/2+50,height/2+5, width/2+20,height/2+5); //right
  fill(255,0,0);
  noStroke();
  ellipse(width/2-35, height/2-5,7,5);
  ellipse(width/2+35, height/2-5,7,5);
  
  //mouth 
  fill(0);
  stroke(191, 99, 63);
  strokeWeight(4);
  arc(width/2,height/2+20,80,70,radians(0),radians(180));
  fill(255);
  noStroke();
  rect(width/2-20,height/2+20,10,8);
  rect(width/2+10,height/2+20,10,8);
  
  //eyebrows
  noFill();
  stroke(191, 99, 63);
  line(width/2-50,height/2-40, width/2-20,height/2-20);
  line(width/2+50,height/2-40, width/2+20,height/2-20);
  }
}