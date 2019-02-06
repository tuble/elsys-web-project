var box, drum, myPart;
var playing = false;
var default_volume = 0.5;
var default_bpm = 80;
var vol;

var boxPat = [1,0,0,0,0,0,0,0];
var drumPat = [0,0,0,0,0,0,0,0];

document.getElementById("playButton").onclick = function() {togglePlay()}; 
document.getElementById("sliderBPM").oninput = function() {changeTempo(this.value)};


function preload() {
  box = loadSound('sounds/clap01.ogg', () =>{});
  drum = loadSound('sounds/kick_hardcore01.ogg', () =>{})
}

function setup() {
    createCanvas(720, 400);
    background(0);
    
    masterVolume(default_volume);
    setBPM(default_bpm);

    noStroke();
    fill(255);

    
    //var boxPhrase = new p5.Phrase('box', playBox, boxPat);
    //var drumPhrase = new p5.Phrase('drum', playDrum, drumPat);

    var boxPhrase = new p5.Phrase('box', (time) => {box.play(time)}, boxPat);
    var drumPhrase = new p5.Phrase('drum', (time) => {drum.play(time)}, drumPat);
    myPart = new p5.Part();

    myPart.addPhrase(boxPhrase);
    myPart.addPhrase(drumPhrase);
}


function draw() {
    if(playing)
        myPart.start();
    else 
        myPart.stop();
}

function changeTempo(val) {
    var tempo = val * 2;
    setBPM(tempo);
    document.getElementById("valueBPM").textContent = tempo + " BPM";
    console.log("tempo: " + val* 2)
}

function togglePlay() {
    playing = !playing;
    console.log("playing set to: " + playing);
}

/*function playBox(time, playbackRate) {
  box.rate(playbackRate);
  box.play(time);
}

function playDrum(time, playbackRate) {
  drum.rate(playbackRate);
  drum.play(time);
}*/

