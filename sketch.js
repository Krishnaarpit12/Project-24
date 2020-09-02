var car, wall;
var c2, c3;
var speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color(0);
  car.velocityX = speed;

  c2 = createSprite(50, 100, 50, 50);
  c2.shapeColor = color(0);
  c2.velocityX = speed;

  c3 = createSprite(50, 300, 50, 50);
  c3.shapeColor = color(0);
  c3.velocityX = speed;

  wall = createSprite(1400, 200, 60, 300);
  wall.shapeColor =color(80, 80, 80);

  
  
}

function draw() {
  background(255, 255, 255);  
  
  if(wall.x - car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor = color(255, 0, 0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor = color(230, 230, 0);
    }

    if(deformation<100)
    {
      car.shapeColor = color(0, 255, 0);
    }
    
  }
  if(wall.x - c2.x < (c2.width + wall.width)/2)
  {
    c2.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      c2.shapeColor = color(255, 0, 0);
    }

    if(deformation<180 && deformation>100)
    {
      c2.shapeColor = color(230, 230, 0);
    }

    if(deformation<100)
    {
      c2.shapeColor = color(0, 255, 0);
    }
    
  }
  if(wall.x - c3.x < (c3.width + wall.width)/2)
  {
    c3.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      c3.shapeColor = color(255, 0, 0);
    }

    if(deformation<180 && deformation>100)
    {
      c3.shapeColor = color(230, 230, 0);
    }

    if(deformation<100)
    {
      c3.shapeColor = color(0, 255, 0);
    }
    
  }

  drawSprites();
}