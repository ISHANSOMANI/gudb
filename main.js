noseX = 0;
noseY = 0
rightwristX = 0;
leftwristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);
    canvas.position(550,120);

    poseNet = ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotPoses);
}

function modeloaded(){
    console.log("PoseNet Is Intialized");
}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX ="+noseX + "noseY ="+noseY);

    leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.x;
    difference = floor(leftwristX - rightwristX)
    console.log("leftwristX ="+leftwristX +  "rightwristX =" +  rightwristX  + "difference" + difference)
}
}

function draw(){
    background('#D4AF37');
document.getElementById("square_size").innerHTML = "Width and Height of square is" + difference + "px";
    fill(0,0,200)
stroke(255,0,0)
square(noseX,noseY,difference)
}