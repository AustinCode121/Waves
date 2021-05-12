
var s;
var g;
var b;
var bb;
//
function setup(){ 


s = createSprite(10,200,90,10);
 
}
function draw(){
background("white")
    s.pointTo(mouseX,mouseY);

  s.shapeColor = "blue";


  b = createSprite(200,200,90,10);
    b.x = s.x
    b.y = s.y
    b.pointTo(mouseX,mouseY);
    b.lifetime = 100;
    b.velocityX = 39;

  if(keyDown("1")){
   b.shapeColor = "purple";
  }
  if(keyDown("2")){
   b.shapeColor = "red";
  }
  if(keyDown("3")){
   b.shapeColor = "green";
  }
  if(keyDown("4")){
   b.shapeColor = "orange";
  }
  if(keyDown("5")){
   b.shapeColor = "yellow";
  }
  if(keyDown("6")){
   b.shapeColor = "pink";
  }
  if(keyDown("7")){
   b.shapeColor = "blue";
  }
  if(keyDown("8")){
   b.shapeColor = "black";
  }
  if(keyDown("9")){
   b.shapeColor = "white";
  }
  

  

  drawSprites();

}
