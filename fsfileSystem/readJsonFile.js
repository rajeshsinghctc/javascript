/*
Json file can be read multiple ways: direct require the json file and get the json object, using fs module.
direct require the json file and get the json object : this will store the object in cache memeory and any upate to the Json file
during the execution will not be reflected till the object is released.

using fs module: sort the previous problem using require option, it can dinamically get the updated json object eachtime the updJSON file modified during execution.

fs.readFile : will read asynchronously and non blocking of rest of statements it takes 3 arguments- jsonfile with path, encoding utf8 and a callback
with error and data as argument.

data will be return as a string and needs to parsed using JSON globla parse() which will return a JSON object through which
the properties can be accessed.

fs.readFileSync : will read synchonously and hence blocking of rest of statements till the value retrived. 
it takes 2 arguments - jsonfile with path, encoding utf8. data will be return as a string and needs to parsed using JSON globla parse() which will return a JSON object through which
the properties can be accessed.

*/

// var jsonObj = require('./sample');
// console.log(typeof jsonObj); // object
// console.log(jsonObj.name); // protractortraining
// console.log(jsonObj.testName.description); // testing

var fs = require('fs');
fs.readFile('./fsfileSystem/sample.json', 'utf8', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(typeof data); //string
        var jsonData = JSON.parse(data);
        console.log(typeof jsonData); //object
        console.log(jsonData.name); // protractortraining 
        console.log(jsonData.testName); // { description: 'testing' }
        console.log(jsonData.name, jsonData.testName.description); // protractortraining testing
    }
});

// var data = fs.readFileSync('./fsfileSystem/sample.json', 'utf8');
// console.log(typeof data);//string
// var jsonData = JSON.parse(data);
// console.log(typeof jsonData); //object
// console.log(jsonData.name); // protractortraining 
// console.log(jsonData.testName); // { description: 'testing' }
// console.log(jsonData.name, jsonData.testName.description); // protractortraining testing

