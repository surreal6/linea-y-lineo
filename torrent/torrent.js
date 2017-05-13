var torrentId = 'magnet:?xt=urn:btih:b7bcce0065a66c810be2f46fa15cd63e1be8ce7d&dn=linea-y-lineo&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com';

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
      return file.name.includes('linea-y-lineo.webm')
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