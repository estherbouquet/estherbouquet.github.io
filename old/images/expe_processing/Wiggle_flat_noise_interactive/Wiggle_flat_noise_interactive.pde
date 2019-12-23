float xnoise=0.0;
float ynoise=0.0;
float inc=0.09;
float yOffset=0.0;
int gridSize=8;

Wiggler w;

void setup() {
  size(600, 600, P3D);
  w = new Wiggler();
}

void draw() {
  background(45, 44, 50);
  xnoise=0.0;
  ynoise=yOffset;

  translate(0, 20, -50);
  rotate(0);

  for (int y =0; y<60; y++) {
    noFill();
    beginShape();
    for (int x =0; x<60; x++) {
      float z=noise(xnoise, ynoise)*255.0;
      float alpha=map(y, 0, 60, 0, 10);
      stroke(45, 44, 50, alpha);
      vertex(x*gridSize, y*gridSize, z);
      xnoise=xnoise+inc;
    }
    xnoise=0.0;
    ynoise=ynoise+inc;
    endShape();
  }
  yOffset+= inc/8.0; // ralentit le mouvement des lignes plus la valeur est haute

  w.display();
  w.wiggle();
}

void keyPressed() {
  println(key);
  if (key=='e') {  
    inc+=0.01;
  }
  if (key=='z') {  
    inc+=0.05;
  }  
  if (key=='a') {
    inc-=0.01;
  }
  println(inc);
}