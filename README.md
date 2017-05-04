
<div id='background' class='background'>
  <video id='background-video' poster="imgs/poster.jpg" playsinline autoplay muted loop>
    <source src="videos/linea-y-lineo-background.webm" type="video/webm">
  </video>
</div>

<div class='centered-content'>
  <video id='main-video' class='video' controls loop style='width: 100%; outline: 0;' onpause='onPauseFunction()' onplay='onPlayFunction()'>
    <source src="videos/linea-y-lineo.webm" type="video/webm">
    <track label="Español" kind="subtitles" srclang="es" src='subtitles/lineaylineo_es.vtt' default>
    <track label="English" kind="subtitles" srclang="en" src='subtitles/lineaylineo_en.vtt'>
    <track label="French" kind="subtitles" srclang="fr" src='subtitles/lineaylineo_fr.vtt'>
  </video>
</div>

<script type="text/javascript">
  var backgroundVideo = document.getElementById('background-video');
  backgroundVideo.playbackRate = 0.25;
  
  // var mainVideo = document.getElementById('main-video');

  var onPauseFunction = function() {
    backgroundVideo.style.opacity = 0.3;
    backgroundVideo.play();
  };

  var onPlayFunction = function() {
    backgroundVideo.style.opacity = 0;
    backgroundVideo.pause();
  };

</script>

### Credits

Line and line, a cartesian short story 

by [Julia Olavarrieta](http://estoyhechountrapo.com/) and [Carlos Padial](http://surreal.asturnazari.com)

Translations by **María Velasco**.

Made with [Blender](https://blender.org) and [Ardour](https://ardour.org/)

### Embed it!

Add this code to your html to embed the shotfilm:

    <iframe src="https://surreal6.github.io/linea-y-lineo/projector/" style='width: 100%; height: 900px'></iframe>

### Contribute subtitles

Get [one of this files](https://github.com/surreal6/linea-y-lineo/tree/master/subtitles) and send us a translation via [GitHub](https://github.com/surreal6/linea-y-lineo/issues/new). 

Or if you know how, fork and ask for a pull request <i class="em em-ok_hand"></i>

### License

<div class='license'>
  <a href="https://creativecommons.org/licenses/by-sa/3.0/es/">
    <img src="imgs/CC-BY-SA_icon.svg.png" alt='cc-by-sa'>
    cc-by-sa
  </a>
</div>

HOIPOI Cinema Boilerplate - first draft

<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="https://afeld.github.io/emoji-css/emoji.css">

<!-- Include the latest version of WebTorrent -->
<script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>

<script type="text/javascript" src='torrent/torrent.js'></script>