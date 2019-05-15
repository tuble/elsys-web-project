class Pattern { // no
    constructor(logic_pattern, graphic_pattern) {
        this.logic_pattern = logic_pattern;
        this.graphic_pattern = graphic_pattern;
    }
}

// bad placement

var p1_sound, p2_sound, p3_sound, p4_sound, myPart;
var playing = false;
var default_volume = 0.5;
var default_bpm = 80;
var vol;
var steps_count = 16;

var prog0 = document.getElementById("prog0");
var prog1 = document.getElementById("prog1");
var prog2 = document.getElementById("prog2");
var prog3 = document.getElementById("prog3");
var prog4 = document.getElementById("prog4");
var prog5 = document.getElementById("prog5");
var prog6 = document.getElementById("prog6");
var prog7 = document.getElementById("prog7");

var pat0 = document.getElementsByClassName("pattern_0");
var pat1 = document.getElementsByClassName("pattern_1");
var pat2 = document.getElementsByClassName("pattern_2");
var pat3 = document.getElementsByClassName("pattern_3");
var pat4 = document.getElementsByClassName("pattern_4");


var p0 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // progress bar
var p1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var p2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var p3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var p4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var pattern0 = new Pattern(p0, pat0); // progress bar
var pattern1 = new Pattern(p1, pat1);
var pattern2 = new Pattern(p2, pat2);
var pattern3 = new Pattern(p3, pat3);
var pattern4 = new Pattern(p4, pat4);

var p0Phrase; // progress bar
var p1Phrase;
var p2Phrase;
var p3Phrase;
var p4Phrase;

var playButton = document.getElementById("playButton");
var BPMSlider = document.getElementById("sliderBPM");
var volumeSlider = document.getElementById("volumeSlider");
var clearButton = document.getElementById("clearButton");

var pat1VolumeSlider = document.getElementById("pat1VolumeSlider"); // todo: other sliders

pat1VolumeSlider.oninput = function() {changePat1Volume(this.value)};

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

    p0Phrase = new p5.Phrase('progress', function() {onProgress()}, p0); // progress bar
    p1Phrase = new p5.Phrase('clap', (time) => {p1_sound.play(time)}, p1);
    p2Phrase = new p5.Phrase('kick', (time) => {p2_sound.play(time)}, p2);
    p3Phrase = new p5.Phrase('closed_hihat', (time) => {p3_sound.play(time)}, p3);
    p4Phrase = new p5.Phrase('snare', (time) => {p4_sound.play(time)}, p4);

    document.getElementById("pat1_name").textContent = p1Phrase.name;
    document.getElementById("pat2_name").textContent = p2Phrase.name;
    document.getElementById("pat3_name").textContent = p3Phrase.name;
    document.getElementById("pat4_name").textContent = p4Phrase.name;
    
    myPart = new p5.Part();

    myPart.addPhrase(p0Phrase);
    myPart.addPhrase(p1Phrase);
    myPart.addPhrase(p2Phrase);
    myPart.addPhrase(p3Phrase);
    myPart.addPhrase(p4Phrase);
}

function draw() {
    if(playing){
        myPart.start();
        playButton.textContent = "stop";
    }
    else {
        myPart.pause(); // .stop()?
        playButton.textContent = "start";
    }
}

function changeTempo(val) {
    var tempo = val;
    setBPM(tempo);
    document.getElementById("valueBPM").textContent = tempo + " BPM";
}

function changeVolume(val) { // broken
    //myPart.setVolume(val);
    masterVolume(val);
    document.getElementById("volumeValue").textContent = val;
}

function changePat1Volume(val) { // broken
    p1_sound.setVolume(val);
    document.getElementById("pat1VolumeValue").textContent = val;
}

function togglePlay() {
    playing = !playing;
    console.log("playing set to: " + playing);
}

function clearAll() {

    playing = false; 
    myPart.pause(); 

    disbleAllSteps();

}

var step = 0;
function onProgress() {

    //console.log(step);
    if(step == steps_count){
        step = 0;
    }

    if(step == 0) {
        pattern0.graphic_pattern[step].classList.replace("progress_off", "progress_on");
        pattern0.graphic_pattern[steps_count - 1].classList.replace("progress_on", "progress_off");
    } else {
        pattern0.graphic_pattern[step].classList.replace("progress_off", "progress_on");
        pattern0.graphic_pattern[step - 1].classList.replace("progress_on", "progress_off");
    }

    step++;
    
}


function disbleAllSteps() {
  
    for(var i = 0; i < steps_count; i++) {
        pattern1.logic_pattern[i] = 0;
        pattern2.logic_pattern[i] = 0;
        pattern3.logic_pattern[i] = 0;
        pattern4.logic_pattern[i] = 0;

        pattern1.graphic_pattern[i].classList.replace("clicked_box", "unclicked_box");
        pattern2.graphic_pattern[i].classList.replace("clicked_box", "unclicked_box");
        pattern3.graphic_pattern[i].classList.replace("clicked_box", "unclicked_box");
        pattern4.graphic_pattern[i].classList.replace("clicked_box", "unclicked_box");
    }

}

function mousePressed() { // because of chrome70 disabling web audio by default
    getAudioContext().resume()
} 
