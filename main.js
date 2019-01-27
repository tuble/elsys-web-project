var box, drum, myPart;

var boxPat = [1,0,1,0,1,0,1,0];
var drumPat = [0,0,0,0,0,0,0,0];


function preload() {
  box = loadSound('sounds/clap01.ogg');
  drum = loadSound('sounds/kick_hardcore01.ogg')
}

function setup() {
  createCanvas(720, 400);
  noStroke();
  fill(255);
  masterVolume(0.5);

  var button = createButton("play/stop");
  button.position(0,0);
    
  var boxPhrase = new p5.Phrase('box', playBox, boxPat);
  var drumPhrase = new p5.Phrase('drum', playDrum, drumPat);
  myPart = new p5.Part();
  myPart.addPhrase(boxPhrase);
  myPart.addPhrase(drumPhrase);
  myPart.setBPM(90);


}

function draw() {
  background(0);
  myPart.start();
}

function togglePlay() {



}

function playBox(time, playbackRate) {
  box.rate(playbackRate);
  box.play(time);
}

function playDrum(time, playbackRate) {
  drum.rate(playbackRate);
  drum.play(time);
}

