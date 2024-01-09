var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
      height: '390',
      width: '640',
      videoId: 'eGsTh6-JEQw',
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {

    audioPlayer = new Howl({
        src: ['http://audio.radiownet.pl:8000/stream'],
        html5: true,
        format: ['mp3'],
        onload: () => {
            audioPlayer.play();
        }
    });

    let player = event.target;
    player.playVideo();
    player.mute();

  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
//      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }


function onYouTubePlayerReady(event) {
}

function togglePlay() {
    if (isPlaying) {
        youtubePlayer.pauseVideo();
        audioPlayer.pause();
    } else {
        youtubePlayer.stopVideo();
        youtubePlayer.playVideo();
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
}
