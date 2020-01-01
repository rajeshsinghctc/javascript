
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

// remove element in using splice

arr = ['raj', 10, 'taj', 20]
var filterElement = arr.map(function(element){
    if(element == 'taj'){
        return element;
    }
})

console.log(filterElement); // [ undefined, undefined, 'taj', undefined ]

arr = ['raj', 10, 'taj', 20]
var filterElement = arr.filter(function(element){
    if(element == 'taj'){
        return element;
    }
})

console.log(filterElement); // ['taj']

/*
Definition and Usage
The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

Note: reduce() does not execute the function for array elements without values.

Note: this method does not change the original array.

 */

arr = ['raj', 10, 'taj', 20, 'hellp']
var reduceFunction  = function(a){
    return arr.reduce(function(accumulator, currentValue){
        console.log(accumulator, currentValue) 
        return element
    })
}

var a = reduceFunction(arr)
console.log("value of a", a);
console.log(typeof a);
/*op:
raj 10                                                                                                                          
10 'taj'                                                                                                                        
taj 20                                                                                                                          
20 'hellp'                                                                                                                      
string                                                                                                                          
value of a hellp  
*/

var numbers = [1, 3, 6, 8, 11];

var lucky = numbers.filter(function(number) {
  return number > 7;
});

// [ 8, 11 ]


/*
The reducer function takes four arguments:

Accumulator (acc)
Current Value (cur)
Current Index (idx)
Source Array (src)
Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each 
iteration throughout the array, and ultimately becomes the final, single resulting value.
*/
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
