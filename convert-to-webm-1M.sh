ffmpeg -i $1 -c:v libvpx -crf 10 -b:v 0.5M -c:a libvorbis $1.webm
