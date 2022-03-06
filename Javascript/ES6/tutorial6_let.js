function greetPerson(name) {
    // let keyword is block-scoped
    var greet;
    if (name == "Chandler") {
        var greet_1 = "Hello Chandler";
    }
    else {
        var greet_2 = "Hi there";
    }
    console.log(greet);
}
greetPerson("Monika");
var a = 1;
var b = 2;
if (a == 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a); // 10 
    console.log(b_1); // 20
}
console.log(a); // 10
console.log(b); // 2
