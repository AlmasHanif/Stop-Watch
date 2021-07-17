// var count = 0;
// var interval;
// setInterval(function(){
//     count++
//    interval= console.log(count)
// },1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

var hour_heading = document.getElementById("hour")
var min_heading = document.getElementById("min")
var sec_heading = document.getElementById("sec")
var msec_heading = document.getElementById("msec")
var interval;
var lap_stop = document.getElementById("lapstop").disabled=true;

function timer(){
    msec++
    msec_heading.innerHTML = msec;
    if(msec >= 100){
        sec++
    sec_heading.innerHTML = sec;
    msec = 0;
    } else if(sec >= 60){
        min++
        min_heading.innerHTML = min;
        sec =0;
    }
    else if(min >= 60){
            hour++
            hour_heading.innerHTML = hour;
            min = 0;
    }
    
}

// var btn = document.getElementById("button");
// btn.disabled = false;

function start(){
interval = setInterval(timer,10)
document.getElementById("Start-button").disabled = true;
document.getElementById("lapstop").disabled=false;

}

function stop(){
    clearInterval(interval)
    document.getElementById("Start-button").disabled = false;
    

}

function restart(){
    min = 0;
    sec = 0;
    msec = 0;
    min_heading.innerHTML = min
    sec_heading.innerHTML = sec
    msec_heading.innerHTML = msec
    stop()
    lapstop()

}
function lapstop() {
  lap_stop = document.getElementById("lapstop").disabled=true;

    }    


function laptimer(){
    var laps = document.getElementById("lap")
        laps.innerHTML +=  "<div> "
         + hour_heading.innerHTML +
         " " + min_heading.innerHTML + " " +
          sec_heading.innerHTML + " " +
          msec_heading.innerHTML +
       " "  + "</div>";
    
    
}

