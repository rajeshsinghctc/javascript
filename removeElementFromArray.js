// var arr = [10, 30, 'rajesh', 'satish'];
// console.log(arr);
// arr.splice
/*
The splice() method is a versatile way of removing, replacing, and/or adding elements in an array. It works similarly to splice() functions
 in other languages. Basically, you take an array and selectively remove portions of it (aka “splice”). 
 The inputs to the splice() function are the index point to start at and the number of elements to remove.
Also, remember that arrays are zero-indexed in JavaScript.
To remove one element from a specific index in an array:

splice(indexPoint, no of elements from indexpoint) --> it delete element from parrent array
slice(indexPoint, no of elements from starting index) --> it cut the array and provide new array however donot delete element from parent array
 */

var list = ["bar", "baz", "foo", "qux"]
 

console.log(list.splice(2, 1))
console.log(list);
// Starting at index position 2, remove one element
// ["bar", "baz", "qux"]
 
// list.splice(2,2)
// Starting at index position 2, remove two elements
//["bar", "baz"]

/*
Removing One Element Using pop()
The array methods push() and pop() work on the the end of an array. 
The terms push() and pop() come from the idea of a stack in memory from the early days of microprocessors. 
This implements the idea of a Last-In-First-Out data structure (LIFO). 
The push() method will ADD an element to the array and the pop() method will remove one.

 */
//Example to remove the last element of an array:

var arr = ["bar", "baz", "foo", "qux"]
console.log(arr.pop()); //"qux"
console.log(arr); // ["bar", "baz", "foo"]
arr.push(10)
console.log(arr); // ["bar", "baz", "foo", 10]

/*
Removing One Element Using shift()
The array methods shift() and unshift() work on the beginning of an array instead of the end of an array,
 as is the case with push() and pop(). The shift() command will remove the first element of the array 
 and the unshift() command will add an element to the beginning of the array.
*/

// Example To remove the first element of an array:

var strArr = ["bar", "baz", "foo", "qux"]
 
console.log(strArr.shift()); //"qux"
console.log(strArr); // ["baz", "foo", "qux"]
strArr.unshift('10');
console.log(strArr); // [10, "baz", "foo", "qux"]

/*
Searching and Removing a Specific Element by Value
The indexOf() command returns the first index at which a given element can be found in the array, or -1 
if it is not present. This can be used along with splice() to search for an element and then remove it, 
even if you don’t know where it is in the array.
Let’s remove the “foo” element:
 */
// Find the index position of "foo," then remove one element from that position
var stringArray = ["bar", "baz", "foo", "qux"]
console.log(stringArray.indexOf('foo')); // 2
console.log(stringArray.splice(stringArray.indexOf('foo'), 1 )); // ["foo"]
console.log(stringArray); // ["bar", "baz", "qux"]

/*
Removing Multiple Specific Elements
Let’s add an extra “foo” element to our array, and then remove all occurrences of “foo”:
 */

var arrayList = ["bar", "baz", "foo", "qux", "foo", 10, "foo"];
console.log(arrayList); //[ 'bar', 'baz', 'foo', 'qux', 'foo', 10, 'foo' ]
for(i=0 ; i<=arrayList.length; i++){
    if(arrayList[i]=="foo"){
       arrayList.splice(i, 1) // [ 'bar', 'baz', 'qux', 10 ]
    }
}
console.log(arrayList);

/*using filter*/

// remove entire element from an array using loop

var a = [10, 20, 'raje', 'hello']

console.log(a.length);
for(i = 0; i<a.length; i++){
    a.pop();
    console.log(a)
}

console.log('a---->', a);

// remove element in array using one statement

var oneLineArray = [10, 20, 30, 'raje', 'hello'];
var emptyArr = [new set(oneLineArray)]
console.log(emptyArr)

// remove element in using splice

var arrayList = ["bar", "baz", "foo", "qux", "foo", 10, "foo"];
console.log(arrayList); 
for(i=0 ; i<=arrayList.length; i++){
    // console.log(arrayList[i]);
       var a = arrayList.splice(0, 0);
}
console.log(a);
