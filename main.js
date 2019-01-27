var box, drum, myPart;
var boxPat = [1,0,1,0,1,0,1,0];
//var drumPat = [0,1,0,1,0,1,0,1];
var msg = 'click to play';

function preload() {
  box = loadSound('sounds/clap01.ogg');
  //drum = loadSound('sounds/kick_hardcore01.ogg')
}

function setup() {
  noStroke();
  fill(255);
  textAlign(CENTER);
  masterVolume(0.5);

  var boxPhrase = new p5.Phrase('box', playBox, boxPat);
  //var drumPhrase = new p5.Phrase('drum', playDrum, drumPat);
  myPart = new p5.Part();
  myPart.addPhrase(boxPhrase);
  //myPart.addPhrase(drumPhrase);
  myPart.setBPM(60);
  //masterVolume(0.1);
}

function draw() {
  background(0);
  text(msg, width/2, height/2);
}

function playBox(time, playbackRate) {
  box.rate(playbackRate);
  box.play(time);
}

/*function playDrum(time, playbackRate) {
  drum.rate(playbackRate);
  drum.play(time);
}*/

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    myPart.start();
    msg = 'playing part';
  }
} 