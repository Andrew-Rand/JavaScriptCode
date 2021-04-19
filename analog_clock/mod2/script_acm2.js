function anclock(){
    var deg = 6;

    var day = new Date();
    var h = day.getHours() * 30;
    var m = day.getMinutes() * deg;
    var s = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${h + m/12}deg)`;
    mn.style.transform = `rotateZ(${m}deg)`;
    sc.style.transform = `rotateZ(${s}deg)`;

}

anclock();
setInterval(anclock, 1000)

