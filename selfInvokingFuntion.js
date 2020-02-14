/*
Defination:
A self-invoking(also called self-executing) expression is invoked (started) automatically, without being called.
Function expressions will execute automatically if the expression is followed by ()

*/

// without argument
var hello = (function(){
    var a = 10;
    console.log(a)
  })()
  
//with argument
var hello = (function(a){
    console.log(a)
  })(10)


