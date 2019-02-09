var p1_sound, p2_sound, p3_sound, p4_sound, myPart;
var playing = false;
var default_volume = 0.5;
var default_bpm = 80;
var vol;

var p1 = [1,0,0,0,0,0,0,0];
var p2 = [0,0,0,0,0,0,0,0];
var p3 = [0,0,0,0,0,0,0,0];
var p4 = [0,0,0,0,0,0,0,0];

var playButton = document.getElementById("playButton");
var BPMSlider = document.getElementById("sliderBPM");
var volumeSlider = document.getElementById("volumeSlider");
var clearButton = document.getElementById("clear");

playButton.onclick = function() {togglePlay()}; 
BPMSlider.oninput = function() {changeTempo(this.value)};
volumeSlider.oninput = function() {changeVolume(this.value)};
clearButton.onclick = function() {clearAll()};

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

    myPart.onStep(function() {onProgress()});

    myPart.addPhrase(p1Phrase);
    myPart.addPhrase(p2Phrase);
    myPart.addPhrase(p3Phrase);
    myPart.addPhrase(p4Phrase);
}

function draw() {

    if(playing){
        myPart.start();
    }
    else 
        myPart.pause(); // .stop()?
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

function clearAll() {

    playing = false;
    p1 = [0,0,0,0,0,0,0,0];
    p2 = [0,0,0,0,0,0,0,0];
    p3 = [0,0,0,0,0,0,0,0];
    p4 = [0,0,0,0,0,0,0,0];

    console.log(p1);

    // buttons are stil on

}


var step = 0;
function onProgress() {
    
    toggleOnProgress(step);
    
    step++;
    
    if(step > 7){

        step = 0;
        console.log(step);
    }
}

function mousePressed() { // work around because of chrome70 disableing web audio by default
     getAudioContext().resume()
} 

function toggleOnProgress(val) {
    if(val == 0){
        prog0.classList.replace("progress_off", "progress_on");
        prog7.classList.replace("progress_on", "progress_off");
    }
    if(val == 1){
        prog1.classList.replace("progress_off", "progress_on");
        prog0.classList.replace("progress_on", "progress_off");
    }
    if(val == 2){
        prog2.classList.replace("progress_off", "progress_on");
        prog1.classList.replace("progress_on", "progress_off");
    }
    if(val == 3){
        prog3.classList.replace("progress_off", "progress_on");
        prog2.classList.replace("progress_on", "progress_off");
    }
    if(val == 4){
        prog4.classList.replace("progress_off", "progress_on");
        prog3.classList.replace("progress_on", "progress_off");
    }
    if(val == 5){
        prog5.classList.replace("progress_off", "progress_on");
        prog4.classList.replace("progress_on", "progress_off");
    }
    if(val == 6){
        prog6.classList.replace("progress_off", "progress_on");
        prog5.classList.replace("progress_on", "progress_off");
    }
    if(val == 7){
        prog7.classList.replace("progress_off", "progress_on");
        prog6.classList.replace("progress_on", "progress_off");
    }
}