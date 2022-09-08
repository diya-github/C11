
var trex ,trex_running, ground, ground_image;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
 trex = createSprite(60,150,10,30);
 trex.addAnimation("running", trex_running);
 trex.scale = 0.7
 ground = createSprite(50,183,400,10);
 ground.addImage(ground_image);
}

function draw(){
  background("white");
  if (keyDown("space")){
    trex.velocityY = -6;
  }
  trex.velocityY = trex.velocityY +0.5;

  trex.collide(ground);
  drawSprites();

}
