module.exports =  function(){
    this.a = 10;
    var b = 20;
    this.print = function(){
        console.log(b);
    };
    console.log("hello")
};
