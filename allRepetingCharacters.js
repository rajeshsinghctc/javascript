// Q - print all charchters count in a string using hash table

var a = 'hello world';
var obj = {}
for (i = 0; i < a.length; i++) {
    var ch = a[i];//a.charAt(i)
    if (!obj[ch]) {
        obj[ch] = 0;
    }
    obj[ch]++;
};
console.log(obj); // op : { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
console.log(Object.keys(obj)); // [ 'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd' ] 
console.log(Object.values(obj)); // [ 1, 1, 3, 2, 1, 1, 1, 1 ] 
//console.log(Object.entries(obj)); 
var keys = Object.keys(obj)
var values = Object.values(obj)
var result = '';
for (i = 0; i < keys.length; i++) {
    temp = keys[i] + values[i]
    result = result + temp;
}
console.log(result); // h1e1l3o2 1w1r1d1