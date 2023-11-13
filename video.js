const video = document.getElementById('my-video');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const speedBtn = document.getElementById('speed');
const muteBtn = document.getElementById('mute');
const fullScreenBtn = document.getElementById('fullscreen');
const seekBar = document.getElementById('seek-bar');
const volumeBar = document.getElementById('volume');

//play and pause functionality

playBtn.addEventListener('click', () => {
  video.play();
});

pauseBtn.addEventListener('click', () => {
  video.pause();
});

//seek bar functionality to control video

seekBar.addEventListener('input', (e) => {
  const seekTime = (video.duration / 100) * e.target.value;
  video.currentTime = seekTime;
});

// video functionality to control seek bar 

video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  seekBar.value = progress;
});

//volume bar functionality 

volumeBar.addEventListener('input', (e) => {
  video.volume = volumeBar.value;
});

//mute and unmute functionality
muteBtn.addEventListener('click', () => {
    if (video.volume === 0) {
        //unmute
        video.volume = 1;
    } else {
        //mute
        video.volume = 0;
        muteBtn.innerText = 'Unmute';
    }
});

//playback speed functionality

speedBtn.addEventListener('click', () => {
  if (video.playbackRate === 1) {
    video.playbackRate = 1.5;
    speedBtn.innerText = 'speed: 1.5x';
  } else if(video.playbackRate === 1.5) {
    video.playbackRate = 2;
    speedBtn.innerText = 'speed: 2x';
  }else {
    video.playbackRate = 1;
    speedBtn.innerText = 'speed: 1x';
  }
});

//fullscreen functionality

fullScreenBtn.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});
