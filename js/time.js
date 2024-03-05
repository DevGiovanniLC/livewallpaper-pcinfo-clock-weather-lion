const time = document.getElementById('time');
const date = document.getElementById('date');

var week = ['DO', 'LU','MA', 'MI', 'JU', 'VI', 'SA'];
var timerID = setInterval(syncronizeTime, 1000);
syncronizeTime()

function updateTime() {
    var now = new Date()
    time.textContent = zeroPadding(now.getHours(), 2) + ':' + zeroPadding(now.getMinutes(), 2) 
    date.textContent =  zeroPadding(now.getDate(), 2) + '/' + zeroPadding(now.getMonth()+1, 2) + '/' + zeroPadding(now.getFullYear(), 4) + ' ' + week[now.getDay()]
    return now.getSeconds()
};

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0')
}

function syncronizeTime(){
    var seconds = updateTime()
    if ( seconds == 0) {
        clearInterval(timerID)
        setInterval(updateTime, 60000)
        updateTime()
    }
}