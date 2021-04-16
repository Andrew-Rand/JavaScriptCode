function testDateTime(a, b) {
    var date1 = new Date(a);
    var date2 = new Date(b);
    var days = new Array('Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота');
    var G = date1.getDay();
    var H = date2.getDay();
    if (date1 > date2){
        return days[G];  
    }
    else{
        return days[H];
    }
        
}
