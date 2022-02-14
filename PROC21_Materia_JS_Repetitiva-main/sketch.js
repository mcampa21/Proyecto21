
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var radius = 40;	
var Ground 
var leftside;
var rigthside;

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
 var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:0.2
}
 ball = Bodies.circle(260,100,radius/2, ball_options);
 World.add(world,ball);
   Ground = new ground(width/2,670,width,20);
 leftside = new ground(1100,600,20,120);
rigthside = new ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground.display();
 rigthside.display();
 leftside.display();
ellipse(ball.position.x,ball.position.y,radius,radius);

}
 function keyPressed(){
	 if (keyCode === UP_ARROW){
		Body.applyForce(ball, ball.position,{x:10,y:-10});
	 }
 }


