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
