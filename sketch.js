var car, wall;
var speed, weight;
var deformation;


function setup() {

  speed=random(55,90);
  weight=random(400,1500);


  createCanvas(1600,400);
 car=createSprite(5,200,50,50);
 car.velocityX=speed;
 car.shapeColor="brown";

 wall=createSprite(1500,200,60, 200);
wall.shapeColor="grey";

deformation=0.5*weight*speed*speed/22500;

  
  
  
}

function draw() {
  background("black");  
  
if(car.isTouching(wall)){
  car.velocityX=0;
 

      if(deformation<100){
        car.shapeColor="lime";
      }
      if(deformation>100 && deformation<180){
        car.shapeColor="yellow";
      }
      if(deformation>180){
        car.shapeColor="red";
      }
}
  

  drawSprites();
  
}