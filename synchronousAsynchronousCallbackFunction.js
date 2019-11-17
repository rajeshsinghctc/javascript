/*
Synchronous: it waits for each operation to complete, after that it executes next operation.
Asynchronous: it never waits for each operation to complete, rather it executes all the operations in the first GO only.
*/


//Asynchronous callback function:

setTimeout(function(){
    console.log('hi this is raj');
}, 5000);

console.log('end of programme');

//Synchronous callback function

function show() {
    console.log('show is a callback function')
};

function hello(callback){
    callback();
}

hello(show);

OUTPUT:
--------
end of programme
show is a callback function
hi this is raj


