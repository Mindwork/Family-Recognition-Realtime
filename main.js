function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Q6Hu4I-dD/model.json", modelLoaded);
}
function draw(){
    image(video,0,0,500,500);
    classifier.classify(video, got_result);
}
function modelLoaded() {
    console.log("modelLoaded");
}
function got_result(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("result").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}