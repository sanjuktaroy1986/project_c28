
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var grnd,tr,stn;
var boy;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11;
var l1;


function preload()
{
boy=loadImage("images/boy.png");	
}

function setup() {
	createCanvas(1000, 600);

	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
	
	grnd=new Ground(500,590,1000,20);
	tr=new Tree(800,310);
	stn=new Stone(220,300,15);

	m1=new Mango(660,260,60,60);
	m2=new Mango(660,200,60,60);
	m3=new Mango(760,260,50,50);
	m4=new Mango(760,180,50,50);
	m5=new Mango(760,110,50,50);
	m6=new Mango(840,260,60,60);
	m7=new Mango(870,200,60,60);
	m8=new Mango(840,120,50,50);
	m9=new Mango(860,80,60,60);
	m10=new Mango(890,180,50,50);
	m11=new Mango(940,230,60,60);

	l1=new Link(stn.body,{x:220,y:280});

	//render function
	/*var render = Matter.Render.create({
		element: document.body,
		engine: myengine,
		options: {
		  width: 1000,
		  height: 600,
		  wireframes: false
		}
	  });

	  Matter.Render.run(render);*/
	
}


function draw() {
  
  Engine.update(myengine);
  background("lightblue");

  textSize(25)
    text("Press Space for another chance!!",100,100);

  image(boy,200,230,100,200);

  grnd.display();
  tr.display();
  stn.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m10.display();
  m7.display();
  m8.display();
  m9.display();
  m11.display();

  l1.display();

  detectCollision(stn,m1);
  detectCollision(stn,m2);
  detectCollision(stn,m3);
  detectCollision(stn,m4);
  detectCollision(stn,m5);
  detectCollision(stn,m6);
  detectCollision(stn,m7);
  detectCollision(stn,m8);
  detectCollision(stn,m9);
  detectCollision(stn,m10);
  detectCollision(stn,m11);

  if(keyDown("space")){
	  Matter.Body.setPosition(stn.body,{x:120,y:380})
	  l1.attach(stn.body);
  }


}
  function mouseDragged(){
	Matter.Body.setPosition(stn.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	
	l1.fly();
}

function detectCollision(stone,mango){
	distance=dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y);
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}



