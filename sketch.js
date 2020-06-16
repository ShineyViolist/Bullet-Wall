var bullet,wall;

var speed,weight,thickness,damage;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  speed = random(223,321);

  weight = random(30,52);

  bullet = createSprite(50,200,50,25);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

}

function draw() {
  background(225,225,255);  

  bullet.velocityX = speed;

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    if(damage < 10){
      wall.shapeColor = ("green");
    }
    if(damage > 10){
      wall.shapeColor = ("red");
    }
  }

  drawSprites();
}