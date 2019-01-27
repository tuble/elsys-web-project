var box, drum, myPart;
var playing = false;
var vol;

var boxPat = [1,0,1,0,1,0,1,0];
var drumPat = [0,0,0,0,0,0,0,0];


function preload() {
  box = loadSound('sounds/clap01.ogg');
  drum = loadSound('sounds/kick_hardcore01.ogg')
}

function setup() {
    createCanvas(720, 400);
    background(0);

    noStroke();
    fill(255);

    
    var boxPhrase = new p5.Phrase('box', playBox, boxPat);
    var drumPhrase = new p5.Phrase('drum', playDrum, drumPat);
    myPart = new p5.Part();
    myPart.addPhrase(boxPhrase);
    myPart.addPhrase(drumPhrase);
    myPart.setBPM(90);


}

console.log(vol);


function draw() {
    
    
    if(pB)
    pB.addEventListener("click", togglePlay);
    
    masterVolume(0.5);
    if(playing)
        myPart.start();
    else 
        myPart.stop();
    


    vol = document.getElementById("volumeSlider").oninput = function() {masterVolume(this.value)};
    
}

var pB = document.getElementById("g");

function togglePlay() {
    playing = !playing;
}

function playBox(time, playbackRate) {
  box.rate(playbackRate);
  box.play(time);
}

function playDrum(time, playbackRate) {
  drum.rate(playbackRate);
  drum.play(time);
}

