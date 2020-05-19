var x,y,i,j;
var button;
function setup() {
  createP("press ball please");
  createCanvas(600,400);
  button=createButton("ball please");
  button.style('font-size','24px');
  button.position(250,500);
  x=0;
  y=200;
  i=1;
  j=1;
}

function draw() {
  background(20,250,20);
  rebound();
  x=x+i;
  y=y+j;
  fill(250);
  circle(x,y,10);
  button.mousePressed(newball);
}

function rebound(){
  if (x<0){i=-i;};
  if (y<0){j=-j;};
  if (x>600){i=-i;};
  if (y>400){j=-j;};
}

function newball(){
  x=0;
  y=200;
  i=int(random(2,4));
  j=int(random(2,4));
}
