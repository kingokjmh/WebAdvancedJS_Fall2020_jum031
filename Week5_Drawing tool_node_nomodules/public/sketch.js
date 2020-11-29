var socket;


function setup(){
    createCanvas(600,400);
    background(50);

    socket = io.connect("http://localhost:3000");
    socket.on('mouse', newDrawing);
}

function newDrawing(data){
    noStroke();
    colorMode(RGB,255,255,255,1);
    fill(230,230,230,0.3);
    rectMode(CENTER);
    rect(data.x,data.y,15,15);
}

function mouseDragged(){
    console.log('Sending: ' + mouseX + "," + mouseY);

    var data = {
        x: mouseX,
        y: mouseY 
    }

 socket.emit('mouse',data)
}

function draw(){
    noStroke();
    colorMode(RGB,255,255,255,1);
    fill(255,0,10,0.3);
    if (mouseIsPressed){
    ellipse(mouseX,mouseY,15,15);
    }
}