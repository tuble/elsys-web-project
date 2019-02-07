var p1_sound, p2_sound, p3_sound, p4_sound, myPart;
var playing = false;
var default_volume = 0.5;
var default_bpm = 80;
var vol;

var p1 = [1,0,0,0,0,0,0,0];
var p2 = [0,0,0,0,0,0,0,0];
var p3 = [0,0,0,0,0,0,0,0];
var p4 = [0,0,0,0,0,0,0,0];


document.getElementById("playButton").onclick = function() {togglePlay()}; 
document.getElementById("sliderBPM").oninput = function() {changeTempo(this.value)};
document.getElementById("volumeSlider").oninput = function() {changeVolume(this.value)};

function preload() {
    p1_sound = loadSound('sounds/clap.ogg', () =>{});
    p2_sound = loadSound('sounds/kick.ogg', () =>{});
    p3_sound = loadSound('sounds/closed_hihat.ogg', () =>{});
    p4_sound = loadSound('sounds/snare.ogg', () =>{});
}

function setup() {
    masterVolume(default_volume);
    setBPM(default_bpm);

    noStroke();
    fill(255);

    var p1Phrase = new p5.Phrase('clap', (time) => {p1_sound.play(time)}, p1);
    var p2Phrase = new p5.Phrase('kick', (time) => {p2_sound.play(time)}, p2);
    var p3Phrase = new p5.Phrase('closed_hihat', (time) => {p3_sound.play(time)}, p3);
    var p4Phrase = new p5.Phrase('snare', (time) => {p4_sound.play(time)}, p4);
    
    myPart = new p5.Part();

    myPart.addPhrase(p1Phrase);
    myPart.addPhrase(p2Phrase);
    myPart.addPhrase(p3Phrase);
    myPart.addPhrase(p4Phrase);
}


function draw() {
    if(playing)
        myPart.start();
    else 
        myPart.stop();
}

function changeTempo(val) {
    var tempo = val;
    setBPM(tempo);
    document.getElementById("valueBPM").textContent = tempo + " BPM";
}

function changeVolume(val) {
    //masterVolume(val);
    document.getElementById("volumeValue").textContent = val;   

}

function togglePlay() {
    playing = !playing;
    console.log("playing set to: " + playing);
}
