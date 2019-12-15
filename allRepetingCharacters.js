var a = 'hello world';
var obj = {}
for(i=0; i<a.length; i++){
    var ch = a.charAt(i)
    if(!obj[ch]){
        obj[ch] = 0;
    }
    obj[ch]++;

    
};
    console.log(obj);

// op : { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }