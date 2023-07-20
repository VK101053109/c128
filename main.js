lwx= "";
lwy= "";
rwx= "";
rwy= "";
lwscore="";
harrysong="";
petersong="";
function preload(){
    harrysong=loadSound("harrypotter.mp3");
    petersong=loadSound("peterpan.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600,500);
    video.hide();
    posenet = ml5.poseNet(video, modelready);
    posenet.on("pose",got);
}
function modelready(){
    console.log("model is working!!!");
}
function got(r){
    if (r.length > 0) {
        lwx = r[0].pose.leftWrist.x;
        lwy = r[0].pose.leftWrist.y;
        rwx = r[0].pose.rightWrist.x;
        rwy = r[0].pose.rightWrist.y;
    }

}
function draw(){
    image(video,0,0,600,500);

}
