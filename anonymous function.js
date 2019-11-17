/*
An anonymous function is a function that was declared without any named identifier to refer to it. As such, an anonymous function is usually not accessible after its initial creation.

Normal function definition:
function hello() {
  alert('Hello world');
}
hello();
Anonymous function definition:

var anon = function() {
  alert('I am anonymous');
}
anon();

One common use for anonymous functions is as arguments to other functions. Another common use is as a closure, for which see also the Closures chapter.

Use as an argument to other functions:

setTimeout(function() {
  alert('hello');
}, 1000);
Use as a closure:

(function() {
  alert('foo');
})();
Breakdown of the above anonymous statements:

The surrounding parentheses are a wrapper for the anonymous function
The trailing parentheses initiate a call to the function and can contain arguments
Another way to write the previous example and get the same result:

(function(message) {
  alert(message);
}('foo'));
An alternative representation of the above places the initiating braces to the surrounding braces and not the function itself, which causes confusion over why the surrounding braces are needed in the first place.

(function() {
  // …
})();

*/
