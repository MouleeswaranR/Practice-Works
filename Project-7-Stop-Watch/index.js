let [sec,min,hr]=[0,0,0];
let timer=document.getElementById('timer');
let time=null;

function stopwatch(){
  sec++;
  if(sec==60){
    sec=0;
    min++;
    if(min==60){
      min=0;
      hr++;
    }
  }
  let seconds=sec<10?"0"+sec:sec;
  let minutes=min<10?"0"+min:min;
  let hours=hr<10?"0"+hr:hr;
  timer.innerHTML=hours+':'+minutes+':'+seconds;
}

function startWatch(){
  if(time!==null){
    clearInterval(time);
  }
  time=setInterval(()=>{stopwatch()},1000);
}

function stopWatch(){
  clearInterval(time);
}

function resetWatch(){
  clearInterval(time);
  [sec,min,hr]=[0,0,0];
  timer.innerHTML='00:00:00';
}