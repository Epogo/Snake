//initialize relevant variables

var canvas;
var ctx;
//snakes parts
var head;
var apple;
var body;

var dots;
var apple_x, apple_y;
//initialize directions 
var leftDirection=true;
var rightDirection=false;
var upDirection=false;
var downDirection=false;
//is the user in the game currently?
var inGame=true;

const Dot_size=10;
const All_Dots=1600;
const MAX_RAND=29;

const C_HEIGHT=400;
const C_WIDTH=400;

const LEFT_KEY=37;
const RIGHT_KEY=39;
const UP_KEY=38;
const DOWN_KEY=40;
var DELAY;

var x=new Array(All_Dots);
var y=new Array(All_Dots);

//initalization of gaming board
if(document.getElementById("easy").checked)
  DELAY=500;
if(document.getElementById("moderate").checked)
DELAY=300;
if(document.getElementById("Hard").checked)
DELAY=150;
function init(){
  canvas=document.getElementById('myCanvas');
  ctx=canvas.getContext('2d');
  
  LoadImages();
  GenerateSnake();
  LocateApple();
  setTimeout("gameCycle()", DELAY);
}

function LoadImages(){
  head=new Image();
  head.src='head.png';
  
  body=new Image();
  body.src='ball.png';
  
  apple=new Image();
  body.src='apple.png';
}

function GenerateSnake(){
  
  dots=3;
  for (var i=0;i<dots;i++){
    x[i]=50-i*10;
    y[i]=50;
  }
  
}

function checkApple(){
  
  if((x[0]==apple_x)&&(y[0]==apple_y)){
    dots++;
    LocateApple();
  }
 
function doDrawing(){
  ctx.clearRect(0,0,C_WIDTH,C_HEIGHT);
  
  if(inGame){
    ctx.drawImage(apple,apple_x,apple_y);
    
    for(var i=0;i<dots;i++){
      
      if(z==0){
        ctx.drawImage(head,x[i],y[i]);
      }
      else{
        ctx.drawImage(body,x[i],y[i]);
      }
    }
  }
 else{
   gameOver();
 }
}  

function gameOver(){
 ctx.fillStyle='blue';
 ctx.textBaseline='middle';
 ctx.textAlign='center';
 ctx.font='normal bold 18px serif';
 
    ctx.filltext('Game Is Over!,C_WIDTH_2,C_HEIGHT/2');
  }

function checkApple() {
  if((x[0]==apple_x)&&(y[0]==apple_y)){
    dots++;
    LocateApple();
  }
}  

function move(){
  for (var i=dots;i>0;i--){
    x[i]=x[(i-1)];
    y[i]=y[(i-1)];
  }

  if(leftDirection)
    x[0]-=Dot_size;
  if(rightDirection)
    x[0]+=Dot_size;
  if(upDirection)
    y[0]-=Dot_size;
  if(downDirection)
    y[0]+=Dot_size;  
}  
  function isCollision(){
for (var i=dots;i>0;i--){
  if((z>4)&&(x[0]==x[i])&&(y[0]==y[i]))
    inGame=false;
  }
if (y[0] >= C_HEIGHT) {
    
        inGame = false;
    }

    if (y[0] < 0) {
    
       inGame = false;
    }

    if (x[0] >= C_WIDTH) {
    
      inGame = false;
    }

    if (x[0] < 0) {
    
      inGame = false;
    }
}

function LocateApple(){
  var r=Math.floor(Math.random()*MAX_RAND);
apple_x=r*DOT_SIZE;
r=Math.floor(Math.random()*Max_RAND);
  apple_y=r*DOT_SIZE;
}
  
    if (inGame) {

        checkApple();
        isCollision();
        move();
        doDrawing();
        setTimeout("gameCycle()", DELAY);
    }  

}

onkeyptress = function(e) {
    
    var key = e.keyCode;
    
    if ((key == LEFT_KEY) && (!rightDirection)) {
        
        leftDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == RIGHT_KEY) && (!leftDirection)) {
        
        rightDirection = true;
        upDirection = false;
        downDirection = false;
    }

    if ((key == UP_KEY) && (!downDirection)) {
        
        upDirection = true;
        rightDirection = false;
        leftDirection = false;
    }

    if ((key == DOWN_KEY) && (!upDirection)) {
        
        downDirection = true;
        rightDirection = false;
        leftDirection = false;
    }        
};
