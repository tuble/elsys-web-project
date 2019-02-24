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

var p0 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // progress bar; value doesn't matter
var p1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var p2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var p3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var p4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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

function changeVolume(val) {
    //myPart.setVolume(val);
    masterVolume(val);
    document.getElementById("volumeValue").textContent = val;
}

function changePat1Volume(val) {
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

    for(var i = 0; i <= steps_count - 1; i++){
        p1[i] = 0;
        p2[i] = 0;
        p3[i] = 0;
        p4[i] = 0;
    }
    disbleAllSteps();
}

var step = 0;
function onProgress() {
    //console.log(step);
    toggleOnProgress(step);
    
    step++;
    
    if(step > steps_count - 1){
        step = 0;
    }
}

function toggleOnProgress(val) {
    if(val == 0){
        prog0.classList.replace("progress_off", "progress_on");
        prog15.classList.replace("progress_on", "progress_off");
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
    if(val == 8){
        prog8.classList.replace("progress_off", "progress_on");
        prog7.classList.replace("progress_on", "progress_off");
    }
    if(val == 9){
        prog9.classList.replace("progress_off", "progress_on");
        prog8.classList.replace("progress_on", "progress_off");
    }
    if(val == 10){
        prog10.classList.replace("progress_off", "progress_on");
        prog9.classList.replace("progress_on", "progress_off");
    }
    if(val == 11){
        prog11.classList.replace("progress_off", "progress_on");
        prog10.classList.replace("progress_on", "progress_off");
    }
    if(val == 12){
        prog12.classList.replace("progress_off", "progress_on");
        prog11.classList.replace("progress_on", "progress_off");
    }
    if(val == 13){
        prog13.classList.replace("progress_off", "progress_on");
        prog12.classList.replace("progress_on", "progress_off");
    }
    if(val == 14){
        prog14.classList.replace("progress_off", "progress_on");
        prog13.classList.replace("progress_on", "progress_off");
    }
    if(val == 15){
        prog15.classList.replace("progress_off", "progress_on");
        prog14.classList.replace("progress_on", "progress_off");
    }
}

function disbleAllSteps() { // ew
    p1_0.classList.replace("clicked_box", "unclicked_box");
    p1_1.classList.replace("clicked_box", "unclicked_box");
    p1_2.classList.replace("clicked_box", "unclicked_box");
    p1_3.classList.replace("clicked_box", "unclicked_box");
    p1_4.classList.replace("clicked_box", "unclicked_box");
    p1_5.classList.replace("clicked_box", "unclicked_box");
    p1_6.classList.replace("clicked_box", "unclicked_box");
    p1_7.classList.replace("clicked_box", "unclicked_box");
    p1_8.classList.replace("clicked_box", "unclicked_box");
    p1_9.classList.replace("clicked_box", "unclicked_box");
    p1_10.classList.replace("clicked_box", "unclicked_box");
    p1_11.classList.replace("clicked_box", "unclicked_box");
    p1_12.classList.replace("clicked_box", "unclicked_box");
    p1_13.classList.replace("clicked_box", "unclicked_box");
    p1_14.classList.replace("clicked_box", "unclicked_box");
    p1_15.classList.replace("clicked_box", "unclicked_box");

    p2_0.classList.replace("clicked_box", "unclicked_box");
    p2_1.classList.replace("clicked_box", "unclicked_box");
    p2_2.classList.replace("clicked_box", "unclicked_box");
    p2_3.classList.replace("clicked_box", "unclicked_box");
    p2_4.classList.replace("clicked_box", "unclicked_box");
    p2_5.classList.replace("clicked_box", "unclicked_box");
    p2_6.classList.replace("clicked_box", "unclicked_box");
    p2_7.classList.replace("clicked_box", "unclicked_box");

    p3_0.classList.replace("clicked_box", "unclicked_box");
    p3_1.classList.replace("clicked_box", "unclicked_box");
    p3_2.classList.replace("clicked_box", "unclicked_box");
    p3_3.classList.replace("clicked_box", "unclicked_box");
    p3_4.classList.replace("clicked_box", "unclicked_box");
    p3_5.classList.replace("clicked_box", "unclicked_box");
    p3_6.classList.replace("clicked_box", "unclicked_box");
    p3_7.classList.replace("clicked_box", "unclicked_box");

    p4_0.classList.replace("clicked_box", "unclicked_box");
    p4_1.classList.replace("clicked_box", "unclicked_box");
    p4_2.classList.replace("clicked_box", "unclicked_box");
    p4_3.classList.replace("clicked_box", "unclicked_box");
    p4_4.classList.replace("clicked_box", "unclicked_box");
    p4_5.classList.replace("clicked_box", "unclicked_box");
    p4_6.classList.replace("clicked_box", "unclicked_box");
    p4_7.classList.replace("clicked_box", "unclicked_box");
}

function mousePressed() { // because of chrome70 disabling web audio by default
    getAudioContext().resume()
} 
