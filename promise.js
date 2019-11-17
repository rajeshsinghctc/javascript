/*
Js promise, promise.then(), promise.catch()
promise can be used in place of callback
inside then(), resolve executed, and inside catch, reject executed.
*/
var hello = function () {

    return new Promise(function (resolve, reject) {
        var error = false;
        if (!error) {
            console.log('no error: promise has been resolved')
            resolve();
        }
        else {
            console.log('error');
            reject();
        }
    })
}

hello().then(() => {
    console.log('Thanks for resolving')
}).catch(function () {
    console.log('very bad promise not resolved')
})

OUTPUT:
-------
no error: promise has been resolved
Thanks for resolving
