/*
call back function is a function(anonymous, arrow function) passed into another function as an argument, which is then invoked inside
outer function to complete some action.
*/

let add = function (a,b) {
    return a+b;
}

let multiply = function (a,b) {
    return a*b;
}

let calculate = function(num1, num2, callback){

    return callback(num1, num2);
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, multiply));


/*
//A.normal callback passing an argument
let sum = function(a,b){
    console.log(a+b);
}

function calculate(num1, num2, callback){

    callback(num1, num2);
}

calculate(10, 20, sum);
*/


/*
//B.writing entire function as an argument 

function calculate(num1, num2, callback){

    callback(num1, num2);
}
calculate(10, 20, sum = function(a,b){
    console.log(a+b);
})
*/


/*
//C.use of anonymous function(i.e without having name for the function)

function calculate(num1, num2, callback){

    callback(num1, num2);
}
calculate(10, 20, function(a,b){
    console.log(a+b);
})
/*



/*
//C. use of arrow function

function calculate(num1, num2, callback){

    callback(num1, num2);
}
calculate(10, 20, (a, b) => {
    console.log(a+b);
})
*/
