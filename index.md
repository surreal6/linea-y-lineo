
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

### Credits

Line and line, a cartesian short story 

by [Julia](http://vanidadivinotesoro.blogspot.com.es) [Olavarrieta](http://estoyhechountrapo.com/) and [Carlos Padial](http://surreal.asturnazari.com)

Translations by **María Velasco**.

Made with [Blender](https://blender.org) and [Ardour](https://ardour.org/)

### Embed it!

Add this code to your html to embed the shotfilm:

    <iframe src="https://surreal6.github.io/linea-y-lineo/projector/" style='width: 100%; height: 1000px'></iframe>

or this one to embed the webtorrent version:

    <iframe src="https://surreal6.github.io/linea-y-lineo/projector/torrent.html" style='width: 100%; height: 1200px'></iframe>

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

### HOIPOI torrent version

Visit the webtorrent version:

[https://surreal6.github.io/linea-y-lineo/torrent/](https://surreal6.github.io/linea-y-lineo/torrent/)

<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="https://afeld.github.io/emoji-css/emoji.css">

<!-- Include the latest version of WebTorrent -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>
<script type="text/javascript" src='main.js'></script>