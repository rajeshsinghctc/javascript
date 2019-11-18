

/*
first(2, function (firstResult, error) {
    if (!error) {
        console.log('result is', firstResult)
        second(firstResult, function (secondResult, error) {
            if (!error) {
                console.log('result is', secondResult)
                third(secondResult, function (thirdResult, error) {
                    if (!error) {
                        console.log('result is', thirdResult)
                    }
                })
            }
        })
    }
})


function first(value, callback){
    callback(value+2, false)
}

function second(value, callback){
    callback(value+2, false)
}

function third(value, callback){
    callback(value+2, false)
}

*/


/*
var promise = new Promise(function(resolve, reject){
    resolve(2);
})


promise.then(first).then(second).then(third).then(function(response){
    console.log(response);
})

function first(value){
    return value+2;
}

function second(value){
    return value+2;
}

function third(value){
    return value+2;
}

*/
