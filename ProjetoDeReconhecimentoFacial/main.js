console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HBkNAhQRC/", modelLoaded);
function modelLoaded(){
    console.log("modelo carregado com sucesso");
}
function check(){
    img = document.getElementById("foto");
    classifier.classify(img, gotResult);
}
function gotResult(erro, results){
    if(erro){
        console.log(erro);
    }else{
        console.log(results);
        document.getElementById("nome").innerHTML = results[0].label;
        document.getElementById("precisao").innerHTML = results[0].confidence.toFixed(2) * 100 + '%';
    }
    
};

camera = document.getElementById("camera");
Webcam.attach(camera);
Webcam.set({
    width:350,
    height: 300,
    image_format:'png',
    png_quality:90
});
function take_snapshot(){
    Webcam.snap((data_uri)=>{
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').innerHTML = '<img id="foto" src='+data_uri+'>';
    });
}