//https://teachablemachine.withgoogle.com/models/e7Do1Aeos/  link of the model

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

 camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured' src='"+data_uri+"'>";
    })
}

console.log("ml5 version : ",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UBwLBlZZ5/model.json', modelLoaded);

function modelLoaded(){
    console.log("model Ready !!!");
}

function speak(){
    var synth = window.speechSynthesis;
     speak_data_1 = " The first Prediction is " + prediction_1 ;
     speak_data_2 = "The second Prediction is " + prediction_2 ; 

     var utterThis  = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);

     synth.speak(utterThis);

}

function check(){
    speak();
}

