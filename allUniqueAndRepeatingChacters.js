var ar = 'asddsfdjdsjdfdT,@/"';
var arr = ar.toUpperCase()
for(i=0; i<=arr.length; i++){
    if(arr.indexOf(arr.charAt(i))== arr.lastIndexOf(arr.charAt(i))){
        console.log('non repeating character--->', arr.charAt(i))
    }
}
