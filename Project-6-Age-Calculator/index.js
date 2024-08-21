let userDate=document.getElementById("date");
userDate.max=new Date().toISOString().split("T")[0];
let result=document.getElementById("result");


function calculateAge(){
  let birthData=new Date(userDate.value);
  let birthDayDate=birthData.getDate();
  let birthDayMonth=birthData.getMonth()+1;
  let birthDayYear=birthData.getFullYear();

  let todayData=new Date();
  let today=todayData.getDate();
  let thisMonth=todayData.getMonth()+1;
  let thisYear=todayData.getFullYear();

  let date,month,year;

  year=thisYear-birthDayYear;

  if(thisMonth>=birthDayMonth){
    month=thisMonth-birthDayMonth;
  }else{
    year--;
    month=12+thisMonth-birthDayMonth;
  }

  if(today>=birthDayDate){
    date=today-birthDayDate;
  }else{
    month--;
    date=getDays(birthDayYear,birthDayMonth)+today-birthDayDate;
  }
  if(month<0){
    month=11;
    year--;
  }
  result.innerHTML=`You are <span>${year}</span> years ,<span> ${month}</span> months,<span> ${date} </span> days old`;

}

function getDays(year,month){
  return new Date(year,month,0).getDate();
}