function testIf_1(a, b) {
    var x;
    if(a > b){
        x = a + b;
    }else{
        x = a * b;
    }
    return x;
}

function testIf2(a, b) {
    var x;
    if (a < b){
        x = a + b;
    } else if (a > b){
        x = a - b;
    } else {
        x = a * b;
    }
    return x;
}