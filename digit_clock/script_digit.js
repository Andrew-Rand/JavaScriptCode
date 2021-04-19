var clock = document.getElementById('clock');
var color = "#000000";  //кодирует цвет в шестнадцатиричном для фона

function digitClock() {
    var time = new Date();
    var h = time.getHours().toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if (h.length < 2){
        h = "0" + h; 
    }
    if (m.length < 2){
        m = "0" + m; 
    }
    if (s.length < 2){
        s = "0" + s; 
    }

    clock.textContent = h + ":" + m + ":" + s;
    color = '#' + h + m + s;

    document.body.style.backgroundColor = color;

}

digitClock();
setInterval(digitClock, 1000)