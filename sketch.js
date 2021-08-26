
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.5,
    frictionAir:0.02
  }

  var ball_options = {
    restitution: 0.5,
    frictionAir:0.02
  }

   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
 ground=Bodies.rectangle(200,380,400,20,ground_options);
 World.add(world,ground);


//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ball1 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball1);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);

  //write a rectangle function to display ground.
 rect(ground.position.x,ground.position.y,400,20);


  
  
}

