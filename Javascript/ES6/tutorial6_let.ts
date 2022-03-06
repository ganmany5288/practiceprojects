function greetPerson(name){
    // let keyword is block-scoped, if placed here the entire function can use it
    let greet;
    if (name == "Chandler"){
        //if placed here, only the if statement can use it
        let greet = "Hello Chandler"
    }else{
        let greet = "Hi there"
    }
    console.log(greet)
}

greetPerson("Monika")


var a = 1
var b = 2; 

if (a == 1){
    var a = 10
    let b = 20
    console.log(a) // 10 
    console.log(b) // 20
}
console.log(a) // 10
console.log(b) // 2