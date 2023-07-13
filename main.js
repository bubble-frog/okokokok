score = 0;
answer = "";
time = 0;
quick_draw = ["flower","apple","cloud","butterfly","cake"];
time_check = "";

function updatedCanvas(){
    background("white");
    randomnumber=Math.floor((Math.random()*quick_draw.length)+1);
    sketch = quick_draw[randomnumber];
    document.getElementById("sketch_name").innerHTML="sketch to be drawn :  "+sketch;
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    background("white");
}

function preload() {
    classifier = ml5.imageClassifier("DoodleNet")
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
    check_sketch();
    if(drawn_sketch == sketch){
        answer="set";
        score++;
        document.getElementById("score").innerHTML="score: "+score;
    }
}
function check_sketch(){
    time++;
    document.getElementById("time").innerHTML="timer : "+ time;
    if (time>400){
        time = 0;
        time_check = "completed";
    }
    if (time_check=="completed"||answer=="set"){
        time_check="";
        answer="";
        updatedCanvas();
    }
}