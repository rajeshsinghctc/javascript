
var arr = [1, 4, 10, 12]
/*
var filtered =  arr.filter(
    n => n>5
)
console.log(filtered);
console.log(arr);

arr.map(function(element){
    console.log(typeof element)
    return element
})

var mapFunction  = function(){
    return arr.map(function(element){
        return element
    })
}

var a = mapFunction()
console.log(a);
var c = 0;
var filterFunction  = function(){
    return arr.filter(function(element){
        c = c+1;
        return element >5
    })
}

var a = filterFunction()
console.log(a);
console.log('counter --->', c);
*/
var reduceFunction  = function(a){
    return arr.reduce(function(acc, element){
        //console.log(acc, element)
        return acc+element
    })
}

var a = reduceFunction(arr)
// console.log(a);
// console.log(arr);

var mapFunction  = function(){
    return arr.map(function(acc, element){
        console.log(acc, element)
        return acc+element
    })
}

var a = mapFunction()
console.log(a);