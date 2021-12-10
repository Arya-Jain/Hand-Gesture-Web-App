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

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/e7Do1Aeos/model.json', modelLoaded);

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
    img = document.getElementById("captured");
    classifier.classify(img, gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;

        prediction_1 = results[0].label;
        prediction_2 = results[1].label;

        speak();

        if(prediction_1 == 'Dislike'){
            document.getElementById("result_emoji").innerHTML = "&#128078;";
        }
        else if(prediction_1 =='Clap'){
            document.getElementById('result_emoji').innerHTML = "&#128079;";
        }
        else if(prediction_2 =='Wist'){
            document.getElementById('result_emoji').innerHTML = "&#9994;";
        }
        else{
            document.getElementById('result_emoji').innerHTML = "&#128076;";
        }


        if(prediction_2 == 'Dislike'){
            document.getElementById("result_emoji2").innerHTML = "&#128078;";
        }
        else if(prediction_2 =='Clap'){
            document.getElementById('result_emoji2').innerHTML = "&#128079;";
        }
        else if(prediction_2 =='Wist'){
            document.getElementById('result_emoji2').innerHTML = "&#9994;";
        }
        else{
            document.getElementById('result_emoji2').innerHTML = "&#128076;";
        }
    
    }
}


 