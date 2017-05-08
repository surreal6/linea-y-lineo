
<div id='background' class='background'>
  <video id='background-video' poster="torrent_source/linea-y-lineo/lineaylineo_HD_poster.jpg" playsinline autoplay muted loop>
    <source src="torrent_source/linea-y-lineo/03_linea-y-lineo-background.webm" type="video/webm">
  </video>
</div>

<div class='centered-content'>
  <video id='main-video' class='video' controls loop style='width: 100%; outline: 0;' onpause='onPauseFunction()' onplay='onPlayFunction()'>
    <source src="torrent_source/linea-y-lineo/01_linea-y-lineo.avi" type="video/mp4">
    <source src="torrent_source/linea-y-lineo/02_linea-y-lineo.webm" type="video/webm">
    <track label="Español" kind="subtitles" srclang="es" src='torrent_source/linea-y-lineo/lineaylineo_es.vtt' default>
    <track label="English" kind="subtitles" srclang="en" src='torrent_source/linea-y-lineo/lineaylineo_en.vtt'>
    <track label="French" kind="subtitles" srclang="fr" src='torrent_source/linea-y-lineo/lineaylineo_fr.vtt'>
  </video>
</div>

<!-- content -->

<iframe src="components/credits.html" style='width: 100%; height: 230px;'></iframe>

<iframe src="components/embedIt.html" style='width: 100%; height: 320px;'></iframe>

<iframe src="components/contribute.html" style='width: 100%; height: 160px;'></iframe>

<iframe src="components/licencia.html" style='width: 100%; height: 180px;'></iframe>

<iframe src="components/torrent-banner.html" style='width: 100%; height: 160px;'></iframe>

<!-- /content -->

<!-- scripts -->

<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="https://afeld.github.io/emoji-css/emoji.css">

<!-- Include the latest version of WebTorrent -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>
<script type="text/javascript" src='main.js'></script>