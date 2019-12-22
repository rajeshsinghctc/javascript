var arr = 'asddsfdjdsjdfdt';
for(i=0; i<=arr.length; i++){
    if(arr.indexOf(arr.charAt(i))== arr.lastIndexOf(arr.charAt(i))){
        console.log('non repeating character--->', arr.charAt(i))
        break;
    }
}