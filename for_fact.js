function testFactorial(a) {
    var x = 1;
    for(let i = 1; i<= a; i = i+1){
        x = x * i;
    }
    return x;
}