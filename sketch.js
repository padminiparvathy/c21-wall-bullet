var fixedRect, movingRect;
var bullet,speed,weight;
var wall,thickness;
var bulletRightEdge;
var wallLeftedge;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,53);
  wall = createSprite(1200, 200, thickness, height/2);
  //fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  bullet = createSprite(50,200,50,50);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  

 if(hasCollided(bullet,wall)){
   var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10)
   {
     wall.shapeColor=color(255,0,0);
   }
   if(damage<10)
   {
     wall.shapeColor=color(0,255,0);
   }
 }

  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftedge=Lwall.x;
  if(bulletRightEdge>=wallLeftedge){
    return true;
  }
  return false;
}