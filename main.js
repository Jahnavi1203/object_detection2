img = "";
status1 = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modlLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
}

function modlLoaded(){
    console.log("Model is Loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#0000FF");
    text("Dog", 45, 75);
    noFill();
    stroke("#0000FF");
    rect(35, 60, 350, 300)

    fill("#0000FF");
    text("Cat", 320, 120);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 270, 320);
}