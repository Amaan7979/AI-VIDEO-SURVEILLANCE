video="";
status1="";
objects=[];
function preload(){
    video=createVideo("video.mp4");
    console.log("inside preload");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video.hide();
    console.log("inside setup");
}
function draw() {
    image(video,0,0,400,400);
    console.log("inside draw");
   if(status1!=""){
   object_detector.detect(video,got_results);
   r=random(255);
   g=random(255);
   b=random(255);
   for (let index = 0; index < objects.length; index++) {
  document.getElementById("status").innerHTML="status :objects detected";
  document.getElementById("number_of_objects").innerHTML="Number of objects detected are " + objects.length;
  fill(r,g,b);
  percent=floor(objects[index].confidence*100);
  text(objects[index].label+" "+percent+"%",objects[index].x,objects[index].y);
  noFill();
  stroke(r,g,b);
  rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height);
   }
   } 
}
function start() {
object_detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status : detecting objects";
}
function modelLoaded() {
    console.log("model is loaded");
status1=true;
video.loop();
video.speed(1);
video.volume(1);
}
function got_results(error,results){
if(error){
console.log(error);
}
else{
console.log(results);
objects=results;
}
}
