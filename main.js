var backgroundVideo = document.getElementById('background-video');
backgroundVideo.playbackRate = 0.25;

var onPauseFunction = function() {
  backgroundVideo.style.opacity = 0.3;
  backgroundVideo.play();
};

var onPlayFunction = function() {
  backgroundVideo.style.opacity = 0;
  backgroundVideo.pause();
};
