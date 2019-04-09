let serial;
let song;
let portName = '/dev/cu.usbmodem1421';
//let portName = '/dev/cu.usbmodem1411';
let inData;

let mooning;
const NUM_STAR = 300;
const NUM_CLOUDS = 8;
let starStuff = {
  wow:[], 
  x: [],
  y: []
};

let cloudStuff = {
  clouds:[],
  x:[],
  y:[]
};

let ghosty, eyeing, scaring, jacking, a;

function preload() {
  // soundFormats('mp3', 'ogg');
  song = loadSound('Evil_Laugh.mp3');
  //song.loop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  serial = new p5.SerialPort();   // make an instance of the serial library
  serial.on('data', playOuch);    // declare serial data callback function
  serial.open(portName);          // open port
  
  ellipseMode(CENTER);
  mooning = new moon();
  initialStars();
  initialClouds();
  
  //a = floor(random(3));
  ghosty = new ghost();
  eyeing = new eyes();
  scaring = new scary();
  jacking = new jack();

}

function draw() {
  if (frameCount%90==0) {
    a = floor(random(0,4));
  }
  else if (frameCount < 90) {
    a  = floor(random(1,2));
  }
  print(a);
  background(0);
  if (song.isPlaying() === false) {
    //wow();
    mooning.show();
  	showClouds();
  	showStars();
  }
  else if (song.isPlaying() === true) {
    if (a == 0) {
  		showClouds();
  		showStars();
      ghosty.show();
  	}
  	else if (a == 1){
      mooning.show();
  		showStars();
      showClouds();
      eyeing.show();
  	}
  	else if (a == 2) {
  		showStars();
      scaring.show();
  	}
    else if (a == 3) {
  		showStars();
      showClouds();
      jacking.show();
  	}
  }
}

function serialEvent() {
	inData = Number(serial.read());
}

function playOuch() {
  let inString = serial.read(); // read an ASCII-encoded string
  
    let inData = Number(inString);                       // convert it to a number
    console.log(inData);
  	if (inData === 1 && song.isPlaying() ===false) { 
      song.play(); 
      //console.log("PLAY")
    }else if(inData === 0 && song.isPlaying() === true){
    	song.pause()
      //console.log("STOP")
    }
  
}

function initialStars() {
    for (i=0; i<NUM_STAR; i+=1){
      //static stars
      starStuff.x[i] = random(width);
      starStuff.y[i] = random(height);
      starStuff.wow[i] = new stars(starStuff.x[i],starStuff.y[i])
  }
}

function initialClouds() {
  //random clouds
  for (h=0;h<NUM_CLOUDS; h+=1){
    cloudStuff.x[h] = random(width);
    cloudStuff.y[h] = random(0,500);
    cloudStuff.clouds[h] = new cloud(cloudStuff.x[h],cloudStuff.y[h])
  }
}

function showStars() {
  for (i=0; i<NUM_STAR; i+=1){
  	starStuff.wow[i].show();
    
    //constellations
    if(i%40==0) {
      stroke(255);
      strokeWeight(1);
      for (oh=0;oh<30;oh+=random(10)) {
      	line(starStuff.x[i],starStuff.y[i],starStuff.x[i]+oh,starStuff.y[i]+oh);
      }
    }
  }
}

function showClouds() {
  for (h=0; h<NUM_CLOUDS; h+=1){
  	cloudStuff.clouds[h].show();
    cloudStuff.clouds[h].update();
  }
}