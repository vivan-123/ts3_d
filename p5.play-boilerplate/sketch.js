const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var redbox = [];
var  backgroundImg;

function preload()
{
  backgroundImg = loadImage("sprites/bg.png")
  backgroundchange();
}

function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
   sr1 = new Rectangle2(750,600,500,20);

   g1 = new Rectangle2(750,680,1500,20)

  p = new Circle(150,350,50);

  for(i =1; i<=9 ; i++)
  {
      redbox[i] = new Rectangle1(500 + 50*i, 580,50,50);
  
  }
  
  for(i =1; i<=7 ; i++)
  {
      redbox[i+9] = new Rectangle1(550 + 50*i, 550,50,50);
  }
  
  for(i =1 ; i<=5 ; i++)
  {
      redbox[i+16] = new Rectangle1(600 + 50*i, 550,50,50);
  }
  for(i =1; i<=3 ; i++)
  {
      redbox[i+21] = new Rectangle1(650 + 50*i, 550,50,50);
  }
  
     redbox[25] = new Rectangle1(750,480,50,50);



   c1 = new StringConstraint(p.body,{x: 150, y :350});

}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);

  c1.display();

  score = 0;
  for (i=1; i<=25 ; i++)
 {
   redbox[i].display();
   score = score + redbox[i].score();
 }



  p.display();

  g1.display();
  sr1.display();

  textSize(40);
  fill ("white");
  text ("Click SpaceBar to get another chance !",100,80);

  textSize(40);
  fill ("white");


  text ("Score : "+score,1000,80);

  drawSprites();
}

function mouseDragged(){
 
      Matter.Body.setPosition(p.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  c1.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
    c1.attach(p.body);
    }
  }

  async function backgroundchange()
{
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responsejson = await response.json();
   var datetime = responsejson.datetime;
   var hour = datetime.slice(11,13); 
   console.log(hour);

   if (hour>19 || hour<07)
   {
        bg = "sprites/bg2.jpg"
   }

   else
   {
       bg = "sprites/bg.png"
   }

   backgroundImg = loadImage(bg);
}
