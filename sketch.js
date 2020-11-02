var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  car=createSprite(50,200,50,50);
  wall=createSprite(400,200,60,400/2);
  
  
  speed=random(55,90);
  weight=random(55,99);
  //car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  
  car.velocityX=speed;

  if(wall.x-car.x <(car.width+wall.width)/2){

    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>30){
      car.shapeColor=color(255,0,0);
    } 
    else if(deformation<30 && deformation>10){
      car.shapeColor=color(230,230,0);
    }
    else if(deformation<10 ){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}