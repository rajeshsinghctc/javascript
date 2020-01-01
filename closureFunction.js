var add = (function () {
    var counter = 0;
     console.log(counter)
    return function () {
        counter += 1;
        console.log(counter)
        return counter;
    }
})();

add(); //1
add(); // 2
add(); //3