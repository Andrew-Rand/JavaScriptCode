function testRegExp(s, sub_s) {
    var myPattern = new RegExp(sub_s,"g");
    result = s.match(myPattern);
    return result.join(); 
    
}