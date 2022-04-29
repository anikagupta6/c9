var box
function setup() {
  createCanvas(700,500);
  box = createSprite (350,250,60,80)
  box.shapeColor = "purple"
}

function draw() 
{
  background(165);
  if (keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 5
  }
  if (keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 5
  }
  if (keyIsDown(UP_ARROW)){
    box.position.y = box.position.y  - 5
  }
  if (keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 5
  }
  drawSprites ();
}




