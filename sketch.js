const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var turn=0;
var gameState="start"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
   text("Score : "+score,20,30);
  Engine.update(engine);
  stroke("yellow");
  line(0,400,800,400);
  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   text("200",735,500);
    text("200",655,500);
    text("200",575,500);
    text("100",495,500);
    text("100",415,500);
    text("100",335,500);
    text("500",255,500);
    text("500",175,500);
    text("500",95,500);
    text("500",15,500);
    if(particle!=null){
      particle.display();
      
      if(particle.body.position.y>760){
        if(particle.body.position.x>575 && particle.body.position.x<800){
          score=score+200;
          
        }
          
          if(particle.body.position.x>335&&particle.body.position.x<575){
            score=score+100;
          }
          if(particle.body.position.x>15&&particle.body.position.x<335){
            score=score+500;
            
          }
          particle=null
          if(turn>=5){
            gameState="end";
          }
        }
      }
      if(gameState=="end"){
        textSize(50)
        text("Game Over",350,150)
      }
    }

function mousePressed(){
  if(gameState!=="end"){
    turn++
    particle=new Particle(mouseX,10,10)
  }
  
}