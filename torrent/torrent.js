var client = new WebTorrent()

var torrentId = 'magnet:?xt=urn:btih:b7bcce0065a66c810be2f46fa15cd63e1be8ce7d&dn=linea-y-lineo&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com';

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
  file.appendTo('#main-video-div', function (err, elem) {
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
})

