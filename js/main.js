    let timeSecond = 0;
    let timeMiniSecond = 0;
    let seconds = document.getElementById('seconds');
    let miniSeconds = document.getElementById('mini-seconds');
    let Interval;


function startTime() {
    clearInterval(Interval);
    Interval = setInterval(function() {
        calculateTime();
    }, 10);
}

function stopTime() {
    clearInterval(Interval);
}

function resetTime() {
    clearInterval(Interval);
    timeSecond = "00";
    timeMiniSecond = "00";
    seconds.innerHTML = timeSecond;
    miniSeconds.innerHTML = timeMiniSecond;
}

function calculateTime() {
    timeMiniSecond++;
    
    if(timeMiniSecond <= 9) {
        miniSeconds.innerHTML = "0" + timeMiniSecond;
    } else {
        miniSeconds.innerHTML =  timeMiniSecond;
    }

    if(timeMiniSecond > 99) {
        timeSecond++;
        if(timeSecond <= 9) {
            seconds.innerHTML = "0" + timeSecond;
        } else {
            seconds.innerHTML =  + timeSecond;
        }
       

        timeMiniSecond = 0;
        miniSeconds.innerHTML = "0" + timeMiniSecond;
    }
}




