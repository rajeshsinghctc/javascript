/*
var add = (function () {
    var counter = 0;
     console.log(counter)
    return function () {
        counter += 1;
        console.log(counter)
        return counter;
    }
})();

add(); //1
add(); // 2
add(); //3
*/

/* what is first class functions in JS */
/**
 First class functions are fucntions which can be treated as objects. like they can be assigned to a vatiable,
 can be passed as an argument to a function, can be returned from another function.
 */
/*
 function page(){
     var counter = 0;
     function click(){
        counter = counter+1;
        console.log('click on page ', counter + ' times');
     }
     return click;
 }

 var clickvariable = page();
 clickvariable();
 clickvariable();
 clickvariable();
 clickvariable();
 clickvariable();
 */

 /*
 NOTE: outerfunction page only called once, inner function click remember the counter(free variable) of outer function for multiple calls
OP: 
click on page  1 times
click on page  2 times
click on page  3 times
click on page  4 times
click on page  5 times
 */

 /* define counter as global variable op will be same and same counter vaiable can be used as it is without modification */

var counter = 0;
 function page(){
    var count = counter;
    function click(){
       count = count+1;
       console.log('click on page ', count + ' times');
    }
    return click;
}

var clickvariable = page();
clickvariable();
clickvariable();
clickvariable();
clickvariable();
clickvariable();
console.log('global counter value is unaltered and can be used in same file or other files', counter);
/*
click on page  1 times
click on page  2 times
click on page  3 times
click on page  4 times
click on page  5 times
global counter value is unaltered and can be used in same file or other files 0

*/
