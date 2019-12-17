/*const has block scope and calling outside of block throw (ReferenceError: baz is not defined) and cannot be declared 
throws(SyntaxError: Missing initializer in const declaration)but always be initialized
cannot be initialized twice in the same block thows(SyntaxError: Identifier 'baz' has already been declared))*/
/*
function run() {
  {
    const baz = "Bazz";
    console.log(baz); // baz
  }
  console.log(baz); // ReferenceError: baz is not defined
}
run();
*/
/*
function run() {
  {
    const baz = "Bazz";
    console.log(baz); // baz
  }

  {
  const baz = 20;
  console.log(baz); // op: 20
  }
const baz = 'inside function block scope'
console.log(baz); // op: inside function block scope
}
run();
*/

/*
function run() {
  {
  const baz; //op: SyntaxError: Missing initializer in const declaration
  const baz = 20;
  console.log(baz); // this line wont execute
  }
}
run();
*/

/*
function run() {
const baz= 30
  {
  const baz = 20;
  console.log(baz); // op:20
  }
}
run();
*/

/*
function run() {
  {
  const baz= 30;
  const baz = 20; // OP: SyntaxError: Identifier 'baz' has already been declared
  console.log(baz); // this line wont execute
  }
}
run();
*/

/*
function run() {
const baz= 30;
  {
  const baz = 20;
  console.log(baz); // no output as it throws error at line 57
  }
const baz= 30; // op: SyntaxError: Identifier 'baz' has already been declared
}
run();
*/

/*
function run() {
  {
  const baz; // op: SyntaxError: Missing initializer in const declaration
  console.log(baz); // this line wont execute
  }

}
run();
*/

/*
function run() {
  {
  const baz; // op: SyntaxError: Missing initializer in const declaration
  const baz;
  console.log(baz);
  }
}
run();
*/

/*
function run() {
  {
  const baz; // op: SyntaxError: Missing initializer in const declaration
  const baz = 20; // this line wont execute
  console.log(baz);
  }

}
run();
*/

/*
function run() {
  {
  const baz = 20;
  baz= 30; // TypeError: Assignment to constant variable. 
  console.log(baz); // this line wont execute
  }
}
run();
*/

/*
function run() {
  {
  const baz = 20;
  const baz= 30; // SyntaxError: Identifier 'baz' has already been declared
  console.log(baz); // this line wont execute
  }
}
run();
*/