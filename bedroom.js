img="";
status="";
objects=[];
objectDetector="";
function preload(){
img=loadImage("bedroom.jpeg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);

}

function modelLoaded(){
   console.log("model is loaded");
 //   status=true;
   // objectDetector.detect(img,gotResults);
   // document.getElementById("status").innerHTML="status : detecting objects";
}

//function gotResults(error,results){
 //   if(error){
   //     console.error("error");
   // }
    //else{
    //    console.log(results);
       // objects=results;
   // }
//}

function draw(){

 

   // if(status != ""){ 
        image(img,0,0,640,420);
//for(i=0;i < objects.length;i++){
 //   document.getElementById("status").innerHTML=" Status : object detetcted";
    //fill("red");
   // percent=floor(objects[i].confidence*100);
  //  text(objects[i].label + " " + percent + "%",objects[i].x+15,objects[i].y+15); 
  //  noFill();
  //  stroke("red");
    //rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
//}
//}
function reverse(){
    window.location("index.html");
}