function testWhile(a) {
    var x=0;
    var i = 0;
    while(i <= a){
        if(i % 2 == 0){
            x = x + i;
        } 
        i = i + 1; 
    }
    return x;
}