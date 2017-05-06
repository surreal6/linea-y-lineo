
<div id="hero">
  <div id="output">
    <div id="progressBar"></div>
    <!-- The video player will be added here -->
  </div>
  <!-- Statistics -->
  <div id="status">
    <div>
      <span class="show-leech">Downloading </span>
      <span class="show-seed">Seeding </span>
      <code>
        <!-- Informative link to the torrent file -->
        <a id="torrentLink" href="../linea-y-lineo.torrent">linea-y-lineo.torrent</a>
      </code>
      <span class="show-leech"> from </span>
      <span class="show-seed"> to </span>
      <code id="numPeers">0 peers</code>.
    </div>
    <div>
      <code id="downloaded"></code>
      of <code id="total"></code>
      — <span id="remaining"></span><br/>
      &#x2198;<code id="downloadSpeed">0 b/s</code>
      / &#x2197;<code id="uploadSpeed">0 b/s</code>
    </div>
  </div>
</div>

<div id='background' class='background'>
</div>


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
    <img src="../imgs/CC-BY-SA_icon.svg.png" alt='cc-by-sa'>
    cc-by-sa
  </a>
</div>

### HOIPOI Cinema Boilerplate

#### first draft


#### get the magnet

    magnet:?xt=urn:btih:f46330192b255f5626494de2290bcc87b2315238&dn=linea-y-lineo.avi&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com


<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="https://afeld.github.io/emoji-css/emoji.css">

<!-- Include the latest version of WebTorrent -->
<script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>


	
<!-- Moment is used to show a human-readable remaining time -->
<script src="http://momentjs.com/downloads/moment.min.js"></script>

<script>
  var torrentId = 'magnet:?xt=urn:btih:f46330192b255f5626494de2290bcc87b2315238&dn=linea-y-lineo.avi&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com';

  var client = new WebTorrent()

  // HTML elements
  var $body = document.body
  var $progressBar = document.querySelector('#progressBar')
  var $numPeers = document.querySelector('#numPeers')
  var $downloaded = document.querySelector('#downloaded')
  var $total = document.querySelector('#total')
  var $remaining = document.querySelector('#remaining')
  var $uploadSpeed = document.querySelector('#uploadSpeed')
  var $downloadSpeed = document.querySelector('#downloadSpeed')

  // Download the torrent
  client.add(torrentId, function (torrent) {

    // background video
    var file = torrent.files.find(function (file) {
      return file.name.includes('background')
    })
    file.appendTo('#background', function (err, elem) {
          elem.id = 'background-video';
          elem.playbackRate = 0.25;
          elem.play();
          elem.loop = true;
      })

    // main video
    var file = torrent.files.find(function (file) {
      return file.name.endsWith('.webm')
    })
    file.appendTo('#output', function (err, elem) {
      var backgroundVideo = document.getElementById('background-video');
      var onPauseFunction = function() {
          backgroundVideo.style.opacity = 0.3;
          backgroundVideo.play();
      };
      var onPlayFunction = function() {
          backgroundVideo.style.opacity = 0;
          backgroundVideo.pause();
      };

      elem.pause();
      elem.id = 'main-video';
      elem.class='video';
      elem.loop = true;
      elem.style='width: 100%; outline: 0;';
      elem.onpause = function() {
          backgroundVideo.style.opacity = 0.3;
          backgroundVideo.play();
      }; 
      elem.onplay = function() {
          backgroundVideo.style.opacity = 0;
          backgroundVideo.pause();
      };

      track = document.createElement("track"); 
      track.kind = "captions"; 
      track.label = "Castellano"; 
      track.srclang = "es"; 
      track.mode = "showing"; 
      track.src = "../subtitles/lineaylineo_es.vtt";
      elem.appendChild(track);

      track = document.createElement("track"); 
      track.kind = "captions"; 
      track.label = "French"; 
      track.srclang = "fr"; 
      track.src = "../subtitles/lineaylineo_fr.vtt";
      elem.appendChild(track);

      var track = document.createElement("track"); 
      track.kind = "captions"; 
      track.label = "English"; 
      track.srclang = "en"; 
      track.src = "../subtitles/lineaylineo_en.vtt"; 
      elem.appendChild(track);

      elem.textTracks[0].mode = "showing"; // thanks Firefox    
    })

    // Trigger statistics refresh
    torrent.on('done', onDone)
    setInterval(onProgress, 500)
    onProgress()

    // Statistics
    function onProgress () {
      // Peers
      $numPeers.innerHTML = torrent.numPeers + (torrent.numPeers === 1 ? ' peer' : ' peers')

      // Progress
      var percent = Math.round(torrent.progress * 100 * 100) / 100
      $progressBar.style.width = percent + '%'
      $downloaded.innerHTML = prettyBytes(torrent.downloaded)
      $total.innerHTML = prettyBytes(torrent.length)

      // Remaining time
      var remaining
      if (torrent.done) {
        remaining = 'Done.'
      } else {
        remaining = moment.duration(torrent.timeRemaining / 1000, 'seconds').humanize()
        remaining = remaining[0].toUpperCase() + remaining.substring(1) + ' remaining.'
      }
      $remaining.innerHTML = remaining

      // Speed rates
      $downloadSpeed.innerHTML = prettyBytes(torrent.downloadSpeed) + '/s'
      $uploadSpeed.innerHTML = prettyBytes(torrent.uploadSpeed) + '/s'
    }
    function onDone () {
      $body.className += ' is-seed'
      onProgress()
    }
  })

  // Human readable bytes util
  function prettyBytes(num) {
    var exponent, unit, neg = num < 0, units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    if (neg) num = -num
    if (num < 1) return (neg ? '-' : '') + num + ' B'
    exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1)
    num = Number((num / Math.pow(1000, exponent)).toFixed(2))
    unit = units[exponent]
    return (neg ? '-' : '') + num + ' ' + unit
  }

</script>

<!-- activate hoipoi cinema
<script type="text/javascript" src='torrent.js'></script>
 -->
