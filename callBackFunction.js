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
