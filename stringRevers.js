
/*
var reverseString = function (inputString) {
    var toLowerCase = inputString.toLowerCase();
    var splitStringArray = toLowerCase.split('');
    var reverseArray = splitStringArray.reverse();
    var joinReverseArray = reverseArray.join('');
    return joinReverseArray;

}

console.log(reverseString("rajesh is hello team"));

function reverseStringWithForLoop(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseStringWithForLoop('hello'));

var stringPalindrome = function(string){

    var reverseString = reverseStringWithForLoop(string)

    if(string == reverseString){
        console.log('its a palindrome string');
    }else{
        console.log('its not a palindrome string');
    }
}
    
stringPalindrome('CTC isi CTC2');


function reverseString(str) {
    count=0;
    if (str === "") {
        console.log('str is ---',str)
        return "";
    }// This is the terminal case that will end the recursion
       

    else {
        result = reverseString(str.substr(1)) + str[0];

        count++;
                console.log(result, count)
        return result;
    }

/* 
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls

Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"

Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately

5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/
// }
// reverseString("hello")

var a = 'hello'
console.log(a);
var b = []
for(i=a.length-1; i>=0; i--){

    b.push(a[i])
}
console.log('b is --->', b.join(''))

function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");


