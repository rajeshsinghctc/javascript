/*let has block scope and calling outside of block throw (ReferenceError: baz is not defined) and cannot be declared twice in the same block
throws (SyntaxError: Identifier 'baz' has already been declared)
/*
function run() {
  {
    let baz = "Bazz";
    console.log(baz); // baz
  }
  console.log(baz); // op: ReferenceError: baz is not defined
}
run();
*/
/*
function run() {
  {
    let baz = "Bazz";
    console.log(baz); //op: baz
  }

  {
  let baz = 20;
  console.log(baz); // op: 20
  }
let baz = 'inside function block scope'
console.log(baz); // op: inside function block scope
}
run();
*/

/* 
function run() {
  {
  let baz;
  let baz;
  console.log(baz); // OP: SyntaxError: Identifier 'baz' has already been declared
  }
}
run();
*/

/*
function run() {
  {
  let baz;
  let baz = 20;
  console.log(baz); // OP: SyntaxError: Identifier 'baz' has already been declared
  }
}
run();
*/

/*
function run() {
let baz= 30
  {
  let baz = 20;
  console.log(baz); // op:20
  }
}
run();
*/

/*
function run() {
  {
  let baz= 30;
  let baz = 20;
  console.log(baz); // OP: SyntaxError: Identifier 'baz' has already been declared
  }
}
run();
*/

/*
function run() {
let baz= 30;
  {
  let baz = 20;
  console.log(baz); // this line wont execute
  }
let baz= 30; // op: SyntaxError: Identifier 'baz' has already been declared
}
run();
*/

/*
function run() {
  {
  let baz;
  console.log(baz); // op: undefined
  }

}
run();
*/

/*
function run() {
  {
  let baz;
  let baz; // op: SyntaxError: Identifier 'baz' has already been declared
  console.log(baz);
  }

}
run();
*/

/*
function run() {
  {
  let baz;
  let baz = 20; // OP : SyntaxError: Identifier 'baz' has already been declared
  console.log(baz);
  }

}
run();
*/

/*
function run() {
  {
  let baz;
  baz= 20;
  console.log(baz); //op :20
  }

}
run();
*/

function run() {
  {
  let baz = 'hello';
  baz= 20;
  console.log(baz); //op :20
  }

}
run();