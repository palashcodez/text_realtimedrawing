differencex = 0;
noseX=0;
noseY=0;
lwristx=0;
rwristx=0;

  function setup() {
    canvas = createCanvas(700, 700);  
    canvas.position(920, 360)
    video = createCapture(VIDEO);
    video.position(150, 480)
    //create a div element using createDiv() function of p5, give this div id "live_div" using attribute() function of p5
    //make the "div" element we just create parent of "video" element which holds the live preview 
    
    

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function preload(){
  steveee=loadImage("steveeee.png");
}

function draw() {
  background('#d6dcf5');
  fill("#81d4fa");
  stroke("#152238");
  textSize(differencex-150);
  text("ADITI IS A DONKEY", 20, 400);
  document.getElementById("square_sizeofadonkey").innerHTML="width of the image is-"+differencex+"px and the height of the image is-300px";
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("NoseX-"+noseX+" NoseY-"+noseY);

    lwristx=results[0].pose.leftWrist.x;
    rwristx=results[0].pose.rightWrist.x;
    console.log("lwrist-"+lwristx+" rwrist-"+rwristx);
    differencex=floor(lwristx-rwristx);
    console.log(differencex);
  }
}



