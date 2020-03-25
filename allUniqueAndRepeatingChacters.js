
// code to print all non repeating or unique characters in a string and also print repeating/duplicate characters
var ar = 'asddsfdjdsjdfdT,@/"';
var arr = ar.toUpperCase()
for(i=0; i<=arr.length; i++){
        // print unique characters in a string
    if(arr.indexOf(arr.charAt(i))== arr.lastIndexOf(arr.charAt(i))){
        console.log('non repeating character--->', arr.charAt(i))
    }else{
        // print duplicate or repeating characters in a string
        console.log('repeating character--->', arr.charAt(i))
    }
}
