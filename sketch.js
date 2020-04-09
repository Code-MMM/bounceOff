var fixed, moving;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving  = createSprite(200, 200, 50, 50);
  fixed.shapeColor = "green";
  moving.shapeColor = "orange";
  moving.velocityX = 4;
  fixed.velocityX = -4;
}

function draw() {
  //moving.velocityY = 4;
  background(100,100,150);  

  bounceOff(fixed, moving);

  drawSprites();
}
