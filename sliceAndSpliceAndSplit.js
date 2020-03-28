/*
Slice: it takes portion of an array to create a new array without deleting elements from the parent array
it takes stating index and the end index as parameter, where the difference between the index will return
the number of elements from parent array. The return type or output will be a array or list.

Syntax: arr.slice(start index, last index) // op: [no of elements(diffrence of start and end index) starting from start index ]
______**********_______________________________***********____________________________*********___________________________
Splice: it pops out/delete no of elements from parent element hence alter/update the parent arrry.
it takes start index and count of elements to be deleted starting from start index. 
The return type or output will be a array or list.

syntax: arr.splice(start index, count of elements to be deleted from start index);

split: it actually splits a string based on a perticular character or string including space, and special characters.
It's operates on strings only.The return type or output will be a array or list.

*/

// array slice()
-------------------
var a = [1,2,3,4,5,6]
var b = a.slice(2,4)// op: [3,4]
console.log('value of a', a) //[1,2,3,4,5,6]
console.log('value of b', b) //[3,4]
var b = a.slice(2,6)// op: [3,4,5,6] = a.slice(2, any value more than last index of array)
console.log('value of a', a) //[1,2,3,4,5,6]
console.log('value of b', b) //[3,4]
var b = a.slice(2,1202) // it wont throw error, however max possible element to be fetched from arry
console.log('value of b', b) //[3,4,5,6]

// array split()
-------------------
var a = [1,2,3,4,5,6]
var b = a.splice(2,2);
console.log('value of a', a) //[1,2,5,6]
console.log('value of b', b) //[3,4]
var b = a.splice(2,4);
console.log('value of a', a) //[1,2] 
console.log('value of b', b) //[3,4,5,6] =a.splice(2, any value more than last index of array)
var a = [1,2,3,4,5,6]
var b = a.splice(2,4200);
console.log('value of a', a) //[1,2] 
console.log('value of b', b) //[3,4,5,6] =a.splice(2, any value more than last index of array)

____________________**************_______________________
//String Split()
----------------
var a = 'hellohello';
var b = a.split('o');
console.log('value of a', a) //'hellohello'
console.log('value of b', b) // [ 'hell', 'hell', '' ]
var b = a.split('h');
console.log('value of b', b)  //[ '', 'ello', 'ello' ]
var b = a.split('l');
console.log('value of b', b)  //[ 'he', '', 'ohe', '', 'o' ]
var b = a.split('ll');
console.log('value of b', b)  //[ 'he', ohe', 'o' ]
