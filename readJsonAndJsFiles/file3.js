var myFunc = function (){
    this.a = 111;
    var b = 222;
    this.print = function(){
        console.log(b);
    }
    console.log("hello JS")
};

module.exports =  myFunc;