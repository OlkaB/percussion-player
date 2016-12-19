// ----------- detect pressed keyboard key
var pressedKey = window.addEventListener("keypress", function(event) {
  var keyCode = event.keyCode;
  playSoundFunc(keyCode);
});


// ----------- onclik on letter bttns
var percusBttns = document.getElementsByClassName('percussion');
for (i = 0; i < percusBttns.length; i++) {
  percusBttns[i].addEventListener('click', playSoundFunc);
}

// ----------- play sound if key pressed or div clicked
function playSoundFunc(keyCode) {
  var clickedDiv = this.id;
  if (clickedDiv == 'a' || keyCode == 97){
      document.getElementById('clap').play();
  }
  else if (clickedDiv == 's' || keyCode == 115){
      document.getElementById('bighihat').play();
  }
  else if (clickedDiv == 'd' || keyCode == 100){
      document.getElementById('kick').play();
  }
  else if (clickedDiv == 'f' || keyCode == 102){
      document.getElementById('snare').play();
  }
  else if (clickedDiv == 'g' || keyCode == 103){
      document.getElementById('ride').play();
  }
  else if (clickedDiv == 'h' || keyCode == 104){
      document.getElementById('tom').play();
  }
  else {
    alert("unbinded key");
  }
}