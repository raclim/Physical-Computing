#include <Servo.h>

const int servoPin = 5;
const int photo1 = A0;
const int photo2 = A1;
const int photo3 = A2;
const int forceSensor = A3;
const int threshold = 400;

int sensorReading = 0;

Servo toyServo;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  toyServo.attach(servoPin);
}

void loop() {
  // put your main code here, to run repeatedly:
  //digitalWrite(LED_BUILTIN,HIGH);
  //int ledState = digitalRead();
  sensorReading = analogRead(forceSensor);
  //Serial.println(sensorReading);
  int analog1 = analogRead(photo1);
  //Serial.println(analog1);
  int mapped1 = map(analog1, 0, 1023, 0,255);
  //Serial.println(mapped1);
   
  int analog2 = analogRead(photo2);
  //Serial.println(analog2);
  int mapped2 = map(analog2, 0, 1023, 0,255);
  //Serial.println(mapped2);

  int analog3 = analogRead(photo3);
  //Serial.println(analog3);
  int mapped3 = map(analog3, 0, 1023, 0,255);
  //Serial.println(mapped3);

  if (sensorReading >= threshold) {
    //Serial.println("Knock!");
    int g = 6;
    Serial.write(g);
    delay(1);  // delay to avoid overloading the serial port buffer
  }
  if (mapped3 <60 && mapped2 <60 && mapped1 < 60) {
    int z = 7;
    Serial.write(z);
    for (int i=0; i<90; i+=45) {
      toyServo.write(i);
    }
  }
  else if (mapped1 <60 && mapped2 <60){
    int h = 8;
    Serial.write(h);
    delay(1); 
  }
  else if (mapped1 <60 && mapped3 <60){
    int i = 9;
    Serial.write(i);
    delay(1);   
  }
  else if (mapped2 <60 && mapped3 <60){
   int j = 10;
   Serial.write(j);
   delay(1); 
  }
  else{
    if (mapped1 < 60) {
      int b = 0;
      Serial.write(b);
      delay(1);
    }
    else if (mapped1 >= 60){
      int a = 1;
      Serial.write(a);
      delay(1);
    }
  
    if (mapped2 < 60 ) {
      int c = 2;
      Serial.write(c);
      delay(1);
    }
    else if (mapped2 >= 60){
      int d = 3;
      Serial.write(d);
      delay(1);
  }
  
    if (mapped3 < 60 ) {
      int e = 4;
      Serial.write(e);
      delay(1);
    }
    else if (mapped3 >= 60){
      int f = 5;
      Serial.write(f);
      delay(1);
    }
  }
}
