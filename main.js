song="";
left_wristX=0;
right_wristX=0;
left_wristY=0;
right_wristY=0;
leftWristscore=0;
rightWristscore=0;

function preload(){
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3")
}

function draw(){
    image(video,0,0,500,600);
    fill("FF0000");
    stroke("FF0000");

    circle(right_wristX,right_wristY,25);

    if(right_wristY==2){
      document.getElementById("speed").innerHTML="Song Name=Harry Potter";
      song2.rate(0.5)
    } 

     if(leftWristscore>0.2){
       circle(left_wristX,left_wristY,20)
       document.getElementById("vol").innerHTML="Song name=";
       song2.setVolume(V);
     }
}

function musicplay(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function musicstop(){
    song.stop();
}
function musicpause(){
    song.pause();
}
function setup(){
    canvas=createCanvas(500,600)
    canvas.center();

    video=createCapture(VIDEO);
    video.hide(); 

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',got_results);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function got_results(results){
if(results.length>0){
    console.log(results);
    left_wristX=results[0].pose.leftWrist.x;
    right_wristX=results[0].pose.rightWrist.x;
    left_wristY=results[0].pose.leftWrist.y;
    right_wristY=results[0].pose.rightWrist.y;

    leftWristscore=results[0].pose.keypoints[9].score;
    rightWristscore=results[0].pose.keypoints[10].score;
}
}