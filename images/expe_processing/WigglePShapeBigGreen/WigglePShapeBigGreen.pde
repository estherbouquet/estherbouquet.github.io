/**
 * WigglePShape. 
 * 
 * How to move the individual vertices of a PShape
 */


// A "Wiggler" object
Wiggler w;

void setup() {
  size(800, 800, P2D);
  w = new Wiggler();
}

void draw() {
  background(0,230,181);
  w.display();
  w.wiggle();  
}