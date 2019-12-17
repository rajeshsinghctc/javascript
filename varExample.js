/* var has function scope local or global only(no block scope) */
/*
function run() {
  {
  var baz = '20';
  console.log(baz); //op :20
  }

}
run();
*/

/*
function run() {
  {
  var baz = '20';
  }
console.log(baz); //op :20
}
run();
*/

/*
function run() {
  var baz = '20';
}
run();
console.log(baz); //op : ReferenceError: baz is not defined 
*/


/*
function run() {
var baz = 'hello';
  {
  var baz= 20;
  console.log(baz); //op :20
  }

}
run();
*/

/*
function run() {
var baz = 'hello';
  {
  var baz= 20;
  
  }
console.log(baz); //op :20
}
run();
*/

/*
function run() {
  var baz = 'hello';
  var baz= 20;
  console.log(baz); //op :20
}
run();
*/

/*
var baz = 'hello';
function run() {
  var baz= 20;
  console.log(baz); //op :20
}
run();
*/

/*
var baz = 'hello';
function run() {
  baz= 20;
  console.log(baz); //op :20
}
console.log(baz); //op :hello
run();
console.log(baz); //op :20

// op: hello , 20, 20
*/