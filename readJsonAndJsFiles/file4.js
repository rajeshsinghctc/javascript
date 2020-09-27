var myFunc = function (){
    this.a = 111;
    var b = 222;
    this.print = function(){
        console.log(b);
    }
    console.log("hello JS")
};

var myFunc2 = function (){
    this.a = 333;
    var b = 444;
    this.print = function(){
        console.log(b);
    }
    console.log("hello JS welcome")
};

module.exports =  {
    func1 : myFunc,
    func2 : myFunc2
};