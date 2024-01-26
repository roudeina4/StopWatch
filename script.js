var time = document.getElementById("timereceiver");
var h = document.getElementById("hours");
var m = document.getElementById("minutes");
var s = document.getElementById("seconds");

var recently = new Date();
var hours = recently.getHours();
var minutes = recently.getMinutes();
var seconds = recently.getSeconds();

var d = "PM";
 if(hours < 12){
        d = "am"
    }
   setInterval(setTime,1000)

function setTime(){
    seconds ++;
    if(seconds >= 59){
        seconds =0;
        minutes++
    }
    if(minutes> 60){
        minutes = 0;
        hours++
    }
   
    h.innerText = hours  + ":";
    m.innerText =  minutes + ":";
    s.innerText = seconds +" " + d;
}
setTime();

//StopWatch
var HstopWatch = document.getElementById("hourstopwatch");
var MinstopWatch = document.getElementById("minutetopwatch");
var SecstopWatch = document.getElementById("secondstopwatch");




var hoursSW = 0 
var MinutesSW = 0 
var SecondsSW = 0
let stoped = true
let timeout;

HstopWatch.innerText = hoursSW + " : ";
MinstopWatch.innerText = MinutesSW +" : " ;
SecstopWatch.innerText = SecondsSW ;

function start(){
    if(stoped){
        stoped = false
        starttime()
    }
  

}

function stop(){
    if(!stoped){
        stoped = true
       clearTimeout(timeout)
    }
}
function reset(){
    hoursSW = 0
    MinutesSW = 0
    SecondsSW = 0
    HstopWatch.innerText = hoursSW + " : ";
    MinstopWatch.innerText = MinutesSW + " :";
    SecstopWatch.innerText = SecondsSW ;
    stoped = true
    clearTimeout(timeout)

}



 function starttime(){
    
    SecondsSW++
    
    if(SecondsSW >= 60)
    {   
        MinutesSW++
        SecondsSW = 0 
    
    if(MinutesSW >= 59){
        hoursSW++
        MinutesSW = 0
    }}

    HstopWatch.innerText = hoursSW +" : ";
    MinstopWatch.innerText = MinutesSW + " : " ;
    SecstopWatch.innerText = SecondsSW ;
  
    timeout = setTimeout(starttime,100)

 }

 //popup
  let popup =document.getElementById("popup")
  function openPopup(){
    popup.classList.add("open-popup")
  }
  function closePopup(){
    popup.classList.remove("open-popup")
  }