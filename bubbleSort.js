var a = [14, 33, 31, 27, 35, 4]
var c = 0;
var temp;
for (var j = 0; j <= a.length; j++) {
    for (var i = 0; i <= a.length; i++) {
       
        if (a[i] > a[i + 1]) {

            a[i + 1] = a[i] + a[i + 1];
            a[i] = a[i + 1] - a[i];
            a[i + 1] = a[i + 1] - a[i];

         temp = a[i] //14
         a[i] = a[i+1] //33
         a[i+1] = temp // 14
        
        } 
        c = c + 1;
    }
}
console.log(c);
console.log(a);
