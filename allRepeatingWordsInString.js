
var repeatingWord = function (string) {
    var duplicateWord= string;// "rajesh is to be Rajesh but is Rajesh"//"Big black bug bit a big black dog on his big black nose"
    var temp = "";
    var toLowerCaseWord = duplicateWord.toLowerCase();
    var word = toLowerCaseWord.split(" ");
    console.log(word);
    var count;
    for (i = 0; i < word.length; i++) {
        count = 1
        
        for (j = i + 1; j < word.length; j++) {
            if (word[i] == word[j]) {
                count++;
                word[j] = '2';
                console.log('word is', word[i])
                console.log(count, j, word[j], word);
            }

        }
        //console.log(count)
        if (count > 1 && word[i] != '2') {
            temp = temp + word[i]+count;
          console.log(temp);
        }
    };
return temp;
}

var a = "rajesh is Rajesh but is Rajesh";
var result = repeatingWord(a);
console.log(result);