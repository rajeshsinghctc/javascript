
/*
Reference: https://www.geeksforgeeks.org/strict-mode-javascript/
"use strict"; Defines that JavaScript code should be executed in "strict mode".
The "use strict" directive was new in ECMAScript version 5(ES5).

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
1)
Using Strict mode for the entire script
To invoke strict mode for an entire script, put the exact statement “use strict”; (or ‘use strict’;) before any other statements.
2)

Strict mode in JavaScript
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. 
This strict context prevents certain actions from being taken and throws more exceptions. 
The statement “use strict”; instructs the browser to use the Strict mode, 
which is a reduced and safer feature set of JavaScript.

Benifits of using ‘use strict’
Strict mode makes several changes to normal JavaScript semantics.

Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.
Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
It disables features that are confusing or poorly thought out.
Strict mode makes it easier to write “secure” JavaScript.

How to use strict mode?
Strict mode can be used in two ways – 
1.used in global scope for the entire script and 
2.can be applied to individual functions. 
3.Strict mode doesn’t work with block statements enclosed in {} braces. // WRONG statement - its working in block scope also

 */

/*
//Examples of using Strict mode

In normal JavaScript, mistyping a variable name creates a new global variable. 
In strict mode, this will throw an error, making it impossible to accidentally create a global variable
Using strict mode, don’t allow to use a variable without declaring it

// Using a variable, without declaring it, is not allowed: 
'use strict'; 
 x = 3.14;  // ReferenceError: x is not defined
////////////////////
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // ReferenceError: y is not defined
}
////////////////////////

myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // ReferenceError: y is not defined
}

// function expression without var,let,const not allowed

"use strict";
a = function () { //ReferenceError: a is not defined
     y = 3.14;   

}

//opject literals without var,let,const not allowed

"use strict";
x = {p1:10, p2:20}; //ReferenceError: x is not defined

//Duplicating a parameter name is not allowed
"use strict";
function x(p1, p1) {} //SyntaxError: Duplicate parameter name not allowed in this context

//Octal numeric literals are not allowed
"use strict";
let x = 010;   //SyntaxError: Octal literals are not allowed in strict mode.

//Escape characters are not allowed
"use strict";
let x = \010; // SyntaxError: Invalid or unexpected token

//The string “arguments” cannot be used as a variable
"use strict";
let arguments = 3.14 // SyntaxError: Unexpected eval or arguments in strict mode

*/