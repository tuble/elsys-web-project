var box, drum, myPart;
var playing = false;
var default_volume = 0.5;
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
    
    masterVolume(default_volume);

    noStroke();
    fill(255);

    
    var boxPhrase = new p5.Phrase('box', playBox, boxPat);
    var drumPhrase = new p5.Phrase('drum', playDrum, drumPat);
    myPart = new p5.Part();
    myPart.addPhrase(boxPhrase);
    myPart.addPhrase(drumPhrase);


    myPart.setBPM(90); // slider for this thing too


}

document.getElementById("playButton").onclick = function() {togglePlay()};
document.getElementById("volumeSlider").oninput = function() {changeTempo(this.value)};

function draw() {
       
    if(playing)
        myPart.start();
    else 
        myPart.stop();
    
}

function changeTempo(val) {

    setBPM(val * 2);

}

function togglePlay() {
    playing = !playing;
    console.log("playing set to: " + playing);
}

function playBox(time, playbackRate) {
  box.rate(playbackRate);
  box.play(time);
}

function playDrum(time, playbackRate) {
  drum.rate(playbackRate);
  drum.play(time);
}

