#include <Adafruit_NeoPixel.h>
#include <ColorConverter.h>
const int photoPin = A0;
const int photoPin2 = A1;

const int neoPixelPin = 5;  // control pin
const int pixelCount = 8;    // number of pixels
int change = 1;              // increment to change hue by

// set up strip:
Adafruit_NeoPixel strip = Adafruit_NeoPixel(pixelCount, neoPixelPin, NEO_GRB + NEO_KHZ800);
ColorConverter converter;

int h = 10;         // hue
int s = 100;        // saturation
int i = 100;        // intensity

void setup() {
  // initialize the button pin as an input:
  // initialize serial communication:
  strip.begin();    // initialize pixel strip
  strip.clear();    // turn all LEDs off
  strip.show();     // update strip
  Serial.begin(9600);

}


void loop() {
  // read the pushbutton input pin:
  
   int analogValue = analogRead(photoPin);
   int mappedPot = map(analogValue, 0, 1023, 0,255);
   //Serial.println(analogValue);
   
   int analogValue2 = analogRead(photoPin2);
   int mappedPot2 = map(analogValue2, 0, 1023, 0,255);
   //Serial.println(mappedPot2);

     RGBColor color = converter.HSItoRGB(h, s, i);
  // loop over all the pixels:
  for (int pixel = 0; pixel < pixelCount; pixel++) {
    strip.setPixelColor(pixel, color.red, color.green, color.blue);    // set the color for this pixel
    strip.show();   // update the strip
    //delay(1);
  }
  h = h + change;
  if (h < 0 || h > 15) {
    change = -change;
  }
  if (mappedPot < 100) {
    int b = 0;
     Serial.write(b);
     delay(1);
    }
    else if (mappedPot >= 101){
            int a = 1;
           Serial.write(a);
           delay(1);
           }

    else if (mappedPot2 < 15 ) {
          int c = 2;
          Serial.write(c);
          delay(1);
    }
    else if (mappedPot2 >= 16){
            int d = 3;
           Serial.write(d);
           delay(1);
         }
}
