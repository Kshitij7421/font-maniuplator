
noseX=0 ;
noseY=0 ;
difference = 0 ;
rightWristX = 0;
leftWristX = 0; 
function setup() {
  canvas = createCanvas(700 ,600 );
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400, 400);
 

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
   noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y; 
  console.log("noseX = "+noseX+"noseY = "+ noseY)

  leftWristX = results[0].pose.leftWrist.x ; 
  rightWristX = results[0].pose.rightWrist.x ; 
  difference =floor (leftWristX-rightWristX) ;

  console.log("leftWristX = " + leftWristX + "rightWristX =" + rightWristX   + "difference" + difference ) ;

  }
}

function draw() {
    background('#969A97') ;
   document.getElementById("square_side").innerHTML = "Width And Height Of A Square Will Be" + difference +"px";
  fill("red");
  stroke("red")
  textSize(difference)
  text('Kshitij', noseX ,noseY) ;
    }
 

