
// named function
module.exports.myfunc = function(){
    var a = 10;
    console.log('hello');
    var print = function(){
        console.log('value of a is ---->', a);
    };
    //print();
};