var ball,position;
var database;

function setup(){
    createCanvas(500,500);
    database=firebase.database(); // help us to create own database
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPosition=database.ref("ball/position");   // ref give the path
    ballPosition.on("value",readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){  //x=0, y=1`
    database.ref("ball/position").set({
        x: position.x+x,   
        y: position.y+y
    })
   
}


function readPosition(data){
    position=data.val();  //position=23, 59
    ball.x=position.x;     // 23
    ball.y=position.y;     // 59
}

function showError(){
    console.log("hi");
}