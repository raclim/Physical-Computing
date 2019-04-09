let serial;
let song;
let manLaugh, cheer, dogBark, dutchDinner;
let dog, footWarmer, hat, steenPipe, titleCard, cheerCard;
let portName = '/dev/cu.usbmodem1421';
let inData;

function preload() {
  manLaugh = loadSound('manLaugh.wav');
  cheer = loadSound('cheer.wav');
  dogBark = loadSound('dogBark.wav');
  dutchDinner = loadSound('dutchDinner.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  serial = new p5.SerialPort();   // make an instance of the serial library
  serial.on('data', playOuch);    // declare serial data callback function
  serial.open(portName);          // open port
  
  //text
  textFont("Courier");
  textSize(16);
  textAlign(LEFT);
  rectMode(CENTER);
  beginWord();
  dutchDinner.play();
}

function draw() {

}

function serialEvent() {
	inData = Number(serial.read());
}

function playOuch() {
  let inString = serial.read(); // read an ASCII-encoded string
  
    let inData = Number(inString);                       // convert it to a number
    console.log(inData);
  	if (inData === 7){
  	cheerWord();
    cheer.play();
  	} else {
      if (inData === 0) {
      //covered
        steenWord();
        manLaugh.play();
      }else if(inData === 1){
      //not covered
        console.log("nothing!");
      }
      else if(inData === 2){
      //covered
        footWord();
      }else if(inData === 3){
      //not covered
        console.log("nothing!");
      }
      else if(inData === 4){
      //covered
      oldWord();
      }else if(inData === 5){
      //not covered
      console.log("nothing!");
      }else if(inData === 6){
      dogWord();
      dogBark.play();
      }
    }
}

function beginWord() {
  fill(255);
  rect(width/2,height/2,width*9.5/10,height*3/4);
  fill(0);
  text("Jan Steen was a Dutch painter during the early to late mid  17th century.",width*1/5,height/2-100);
  text("Many of Steen's paintings depicted lively and robust familial display that", width*1/5, height/2-80);
  text("borderlined chaos, establishing the Dutch proverb 'a Jan Steen household',", width*1/5, height/2-60);
  text("which means a messy scene.", width*1/5, height/2-40);
  text("As the Old Sing, So Pipe the Young depicts three generations of a family", width*1/5, height/2);
  text("raucously celebrating the baptism of a baby. Thematic symbols and gestures", width*1/5, height/2+20);
  text("punctuated throughout the painting hold a moralizing connotation, implying", width*1/5, height/2+40);
  text("that Steen meant to warn the viewer rather than invite them  to copy this behavior", width*1/5, height/2+60);
  textSize(12);
  text("(Display at left references this work)",width*1/5,height/2+110);
  text("Jan Steen (1626-1679)", width*1/5, height/2+130);
  text('"As the Old Sing, So Pipe the Young", 1668-70', width*1/5, height/2+150);
  text("Oil on canvas", width*1/5, height/2+170);
  
}
function dogWord() {
  fill(255);
  rect(width/2,height/2,width*9.5/10,height*3/4);
  fill(0);
  textSize(16);
  text("The bewildered family dog's presence supplements the chaotic.",width*1/5,height/2-60);
  text("nature of this scene as it faces aimlessly into the distance.", width*1/5, height/2-40);
  text("Althought it is not pictured in this painting, dogs were also utlized", width*1/5, height/2);
  text("in other Dutch genre paintings as devices to portray bad human behavior,", width*1/5, height/2+20);
  text("such as publicly urinating, mating, or fighting.", width*1/5, height/2+40);
}

function footWord() {
  fill(255);
  rect(width/2,height/2,width*9.5/10,height*3/4);
  fill(0);
  textSize(16);
  text("The little stove under the woman's voluminous skirt usually served",width*1/5,height/2-80);
  text("as a foot warmer. The foot warmer held erotic associations as it", width*1/5, height/2-60);
  text("served to 'warm a lady from the waist down'.", width*1/5, height/2-40);
  text("It was implied that if a foot warmer was completely hidden under a skirt,", width*1/5, height/2);
  text("she was taken. However, if it was visible, she was sexually available.", width*1/5, height/2+20);
  text("Other sexual implications can also be seen by the woman's loose, opened blouse", width*1/5, height/2+60);
  text("and the oysters on the table.", width*1/5, height/2+80);
}
function steenWord() {
  fill(255);
  rect(width/2,height/2,width*9.5/10,height*3/4);
  fill(0);
  textSize(16);
  text("By inserting himself into the painting, Steen has blunted its",width*1/5,height/2-100);
  text("moralizing criticism by acting as the personification of folly.",width*1/5,height/2-80);
  text("Literally visualizing the title, he playfully portrays himself as the", width*1/5, height/2-60);
  text("figure teaching a boy how to smoke.", width*1/5, height/2-40);
  text("References to the theme of adult behavior affecting the young,", width*1/5, height/2);
  text("and its imitation can also be seen though the parrot, which symbolizes", width*1/5, height/2+20);
  text("mimicry, and the bagpipes, which suggest 'copycat piping'.", width*1/5, height/2+40);
}
function oldWord() {
  fill(255);
  rect(width/2,height/2,width*9.5/10,height*3/4);
  fill(0);
  textSize(16);
  text("The blue hat with a lace trim on the elder man's head was", width*1/5, height/2-60);
  text("traditionally worn by young fathers.", width*1/5, height/2-40);
  text("It may also reference a celebration of 12th Night, a festival in some", width*1/5, height/2);
  text("branches of Christianity marking the coming of the Epiphany, or", width*1/5, height/2+20);
  text("revelation of Jesus Christ as the God incarnate.", width*1/5, height/2+40);
}
function cheerWord() {
  fill(255);
  rect(width/2,height/2,width*9.5/10,height*3/4);
  fill(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Congratulations!",width/2,height/2-80);
  textSize(18);
  text("Let us raise our Venetian goblets!", width/2, height/2);

}