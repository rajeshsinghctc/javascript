// Case 1: using Annonimous function #################################################################

var data =  require('./file2');
dataObj = new data();
console.log(dataObj.a);
dataObj.print();

// Case 2: Using named fucntion #################################################################
var data1 =  require('./file3');
dataObj1 = new data1();
console.log(dataObj1.a);
dataObj1.print();

// Case 3: Exporting mutilple functions together #################################################

var data1 =  require('./file4').func1;
var data2 =  require('./file4').func2;
dataObj1 = new data1();
console.log(dataObj1.a);
dataObj1.print();

dataObj2 = new data2();
console.log(dataObj2.a);
dataObj2.print();

// Case 4: Adding myFunc function property dirctly to module.exports##########################

var data1 =  require('./file5').myFunc;
dataObj1 = new data1();
console.log(dataObj1.a);
dataObj1.print();

// Case 5.a: reading a anaonimous function through module.exports #############################################

var data1 =  require('./file6'); 
console.log(data1());
console.log(a);// reference error
print();// reference error

// Case 5.b: reading a anonimous function through module.exports #############################################

var data1 =  require('./file6')(); // can be required and called in the same line
console.log(data1);
console.log(a);// reference error
print();// reference error

// Case 6.a: reading a named function through module.exports #############################################

var data1 =  require('./file7').myfunc;
console.log(data1());
console.log(a);// reference error
print();// reference error

// Case 6.b: reading a named function through module.exports #############################################

var data1 =  require('./file7').myfunc(); // can be required and called in the same line
console.log(data1);
console.log(a);// reference error
print();// reference error

// Case 7: reading a object literal through module.exports #############################################

var data1 =  require('./file8').myObjLiteral;
console.log(data1.a);
data1.print();

//Case 8: Reading Json object file #################################################################

var jSonData = require('./output.json');
console.log('Json data======', jSonData.name);
console.log('Json data======', jSonData.version);
console.log('Json data======', jSonData.testName.description);