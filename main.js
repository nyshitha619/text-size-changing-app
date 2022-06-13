noseX=0;
noseY=0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){

    video = createCapture(VIDEO);
    video.size(550,500)
    video.position(230,150)

    canvas = createCanvas(550, 450)
    canvas.position(800,150)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResult);
}noseX=0;
noseY=0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){

    video = createCapture(VIDEO);
    video.size(550,500)
    video.position(230,150)

    canvas = createCanvas(550, 450)
    canvas.position(800,150)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResult);
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotResult(results){
    if (results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + ", noseY = " + noseY )

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("leftWrist = " + leftWrist + "rightWrist = " + rightWrist + "difference = " + difference)
    }
}
function draw(){
    background("#dff2f2");
    textSize(difference)
    fill('lightgreen')
    text("Created By: Nyshitha A.",noseX,NoseY)
    
    document.getElementById("square_side").innerHTML= "Width and height of square is: "+ difference + "px"; 
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotResult(results){
    if (results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + ", noseY = " + noseY )

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("leftWrist = " + leftWrist + "rightWrist = " + rightWrist + "difference = " + difference)
    }
}
function draw(){
    background("#dff2f2");
    textSize(difference);
    fill('lightgreen');
    text("Created By: Nyshitha A.",noseX,noseY);
    
}



