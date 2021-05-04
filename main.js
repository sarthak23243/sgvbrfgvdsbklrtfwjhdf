noseX=0;
noseY=0;
function preload() {
 preloadimage=loadImage("https://i.postimg.cc/NM6K2BJ1/getit.jpg");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    
    image(video, 0, 0, 300, 300);
    image(preloadimage,noseX,noseY,20,20);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelloaded() {
    console.log("PoseNet Has Inislised");
}

function gotPoses(results) {
    if (results.length > 0) {

        console.log(results);

        console.log("Nose x =" + results[0].pose.nose.x);
        console.log("Nose y =" + results[0].pose.nose.y);
        
        noseX=results[0].pose.nose.x;
  
        noseY=results[0].pose.nose.y; 
    }
}
