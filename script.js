//your code here
function setTime() {
    timerDiv.innerText = (parseInt(time / 3600) < 10 ? "0" : "") + parseInt(time / 3600) + ":" + (parseInt((time / 60) % 60) < 10 ? "0" : "") + parseInt((time / 60) % 60) + ":" + (parseInt((time) % 60) < 10 ? "0" : "") + parseInt((time) % 60)
}


function start() {
    if (!timerOn) {
        timerId = setInterval(() => {
            time = time + 0.1;
            setTime();
        }, 100);
        document.getElementById('start').setAttribute('disabled', true)
        document.getElementById('stop').removeAttribute('disabled')
        document.getElementById('pause').removeAttribute('disabled')


        timerOn = true;
    }
}
function stop() {
    document.getElementById('start').removeAttribute('disabled')
    document.getElementById('pause').setAttribute('disabled', true)
    document.getElementById('pause').innerText = "pause"
    document.getElementById('stop').setAttribute('disabled', true)
    clearInterval(timerId)
    time = 0;
    setTime();
    timerOn = false;
}




function pause() {


    if (timerOn) {
        clearInterval(timerId)
        timerOn = false;
        document.getElementById('pause').innerText = "continue"
    }
    else {
        document.getElementById('pause').innerText = "pause"
        start()
    }
}
let time = 0;
let timerOn = false;
let timerDiv = document.getElementById('time')
document.getElementById('pause').setAttribute('disabled', true)
document.getElementById('stop').setAttribute('disabled', true)
setTime()
let timerId;