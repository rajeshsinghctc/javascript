
// all word count in a string
var b = 'hello world hello';
var a = b.split(' ');
var obj = {}
for (i = 0; i < a.length; i++) {

if(obj[a[i]]==null){
    // if the word not seen set to zero
    obj[a[i]]=0;
}
obj[a[i]]=obj[a[i]]+1 // if word is seen set to 0+1
};
console.log(obj); // { hello: 2, world: 1}

// all character count in a string
var a = 'hello world hello';
var obj = {}
for (i = 0; i < a.length; i++) {

if(obj[a[i]]==null){
    // if the word not seen set to zero
    obj[a[i]]=0;
}
obj[a[i]]=obj[a[i]]+1 // if word is seen set to 0+1
};
console.log(obj); // { h: 2, e: 2, l: 5, o: 3, ' ': 2, w: 1, r: 1, d: 1 }