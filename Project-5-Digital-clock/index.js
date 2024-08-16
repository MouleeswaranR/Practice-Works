let hrs=document.getElementById("hours");
let mins=document.getElementById("minutes");
let secs=document.getElementById("seconds");

setInterval(()=>{
  let presentTime=new Date();
  hrs.innerHTML= (presentTime.getHours>10?'0':'')+presentTime.getHours();
  mins.innerHTML=(presentTime.getMinutes>10?'0':'')+presentTime.getMinutes();
  secs.innerHTML=(presentTime.getSeconds>10?'0':'')+presentTime.getSeconds();
},1000)