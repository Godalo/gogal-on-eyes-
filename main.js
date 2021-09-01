eyeX = 0;
eyeY = 0;

function preload(){
    gogal_eye = loadImage("https://i.postimg.cc/sXfCnXJ8/gogal-image.png");
}
function setup(){

canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}

function modelLoaded(){

    console.log("poseNet is initialized");
}

function gotPoses(results){


    if(results.length>0){

    console.log(results);
    eyeX = results[0].pose.eye.x-50;
    eyeY = results[0].pose.eye.y;
    console.log("eye x =" + results[0].pose.eye.x);
    console.log("eye y =" + results[0].pose.eye.y);

    
    }

}

function draw(){

    image(video,0,0,300,300);
    image(gogal_eye,eyeX,eyeY,30,30);

}

function take_snapshot(){

    save('myfilter.png');
}


