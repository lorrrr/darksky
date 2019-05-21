var t;
var img;
function setup() {
  var canvas =createCanvas(windowWidth,windowHeight);
  pixelDensity(0.3);
  //frameRate(33);
  background(214,237,248);
  img = loadImage("txt.png");
    
}

function draw() {
  

  t=250;
  fill(11,31,55);
  noStroke();
  ellipse(mouseX,mouseY,t);
  filter(BLUR, 3);
  if (frameCount %5 ==0){
  background(214,237,248,10);}

   
   
 // filter(BLUR, 2);
 
}

function mouseDragged() {
  
  // t=250;
  // fill(11,31,55);
  // noStroke();
  // ellipse(mouseX,mouseY,t);
  // filter(BLUR, 3);
  // if (frameCount %5 ==0){
  // background(214,237,248,10);}
}



  function windowResized() {
 
    resizeCanvas(windowWidth, windowHeight);
  
    redraw();
  }
