function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  //setting currentTime to 0 allows the audio to play at any point without waiting for the entire audio to finish.
  audio.play();
  // jQuery equivalent key.addClass('playing');
  key.classList.add('playing');
  //data-key is a variable that lives inside of the event
}

function removeTransition (e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
