
/*
"use strict"; Defines that JavaScript code should be executed in "strict mode".
The "use strict" directive was new in ECMAScript version 5(ES5).

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
1)
Using Strict mode for the entire script
To invoke strict mode for an entire script, put the exact statement “use strict”; (or ‘use strict’;) before any other statements.
2)
 */

/*

"use strict";

x = 3.14; // ReferenceError: x is not defined
console.log(x); 

////////////////////
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // ReferenceError: y is not defined
}
////////////////////////

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // ReferenceError: y is not defined
}

*/

//"use strict";
// var arguments=10; //op: SyntaxError: Unexpected eval or arguments in strict mode
// var eval=10;

