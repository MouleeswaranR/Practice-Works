const progress=document.getElementById("progress");
const song=document.getElementById('song');
const ctrlIcon=document.getElementById('ctrlIcon');

song.onloadedmetadata=function (){
  progress.max=song.duration;
  progress.value=song.current;
}

function playPause(){
  if(ctrlIcon.classList.contains('fa-pause')){
    song.pause();
    ctrlIcon.classList.add('fa-play');
     ctrlIcon.classList.remove('fa-pause');
  }
  else{
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
  }
}

if(song.play()){
  setInterval(()=>{progress.value=song.currentTime;
  },500);
}

progress.onchange=function (){
  song.play();
  song.currentTime=progress.value;
  ctrlIcon.classList.add('fa-play');
  ctrlIcon.classList.remove('fa-play');
}