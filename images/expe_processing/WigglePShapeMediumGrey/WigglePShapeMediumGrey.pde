/**
 * WigglePShape. 
 * 
 * How to move the individual vertices of a PShape
 */


// A "Wiggler" object
Wiggler w;

void setup() {
  size(600, 600, P2D);
  w = new Wiggler();
}

void draw() {
  background(242,242,242);
  w.display();
  w.wiggle();  
}