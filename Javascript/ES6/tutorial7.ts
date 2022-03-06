for (var i = 0; i <= 5; i++){
    setTimeout(function(){console.log(i);},1000)
}

// Using var here would cause because we are passing the reference of the value i and not 
// the actual value of i
// how is the reference value here 6 thoxs