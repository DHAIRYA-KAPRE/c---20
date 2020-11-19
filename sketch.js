function setup() {
  createCanvas(800,400);
 fixedrect  =  createSprite(200,200,20,20)
 fixedrect.shapeColor = "green" ;
 movingrect = createSprite(300,300,20,20)
 movingrect.shapeColor = "green" ;
}
function draw() {
  background(255,255,255);  
  drawSprites();
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2  && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2) {
movingrect.shapeColor = "cyan"
fixedrect.shapeColor = "cyan"
  }
  else{
    fixedrect.shapeColor = "green" ;
    movingrect.shapeColor = "green" ;
  }
  }