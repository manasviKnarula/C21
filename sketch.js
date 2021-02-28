
var fixedRect, movingRect;
var gameObject1, gameObject2;
var bunny1, bunny2, bunny3;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "orange";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  bunny1 = createSprite (200,50,30,30)
  bunny1.shapeColor = "pink";

  bunny2 = createSprite (500,600,30,30)
  bunny2.shapeColor = "lightblue";
  
  bunny3 = createSprite (1000,500,30,30)
  bunny3.shapeColor = "purple";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,bunny1)){
    movingRect.shapeColor = "blue";
    bunny1.shapeColor = "blue";
  }
  else if(isTouching(movingRect,bunny2)){
    movingRect.shapeColor = "blue";
    bunny2.shapeColor = "blue";
  }
  else if(isTouching(movingRect,bunny3)){
    movingRect.shapeColor = "blue";
    bunny3.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "orange";
    bunny1.shapeColor = "pink"
    bunny2.shapeColor = "lightblue";
    bunny3.shapeColor = "purple";
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


