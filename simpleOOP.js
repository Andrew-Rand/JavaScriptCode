//создание экземпляра
var person{
    name: "Ivam",
    age: "25",
    hire: "2017"
}

//создание нового метода , который покажет все атрибуты экземпляра

person.sayAll = function(){
    for(var i in this){
        console.log(i + " is " + this[i]);
    }
}