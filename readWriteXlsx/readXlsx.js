/*
xlsx package is used to read xlxs files. It has two methods readFileSync and readFile which will be stored in workbook variable
worksheet is the perticular sheet in workbook and it can be retrived as workbook.Sheets.name_of_sheet.
Cell can be retived by workbook.Sheets.name_of_sheet.cellNumber- return cell object
Cell value can be retrived by workbook.Sheets.name_of_sheet.cellNumber.v - return cell value

To deal with larger data best way to convert a xlsx to json object. 
xlsx.utils.sheet_to_json(worksheet) - return list object with key :value pairs. Each element in list represents a row in xlsx.

*/

var xlsx = require('xlsx');

workBook = xlsx.readFileSync('./sample.xlsx');
workBook = xlsx.readFile('./sample.xlsx');
// console.log(workBook)
workSheet = workBook.Sheets.Sheet1;
console.log(workSheet.B3.v);// Hank

// convert the excel sheet to json to read whole data set in xlsx


var a = xlsx.utils.sheet_to_json(workSheet);
// console.log(a); // return a list of key:value objects for all the rows as ([ { userName: 'raj', pw: 'pass' },{ userName: 'Tom', pw: 'Hank' },{ userName: 'Hello', pw: 'world' } ])
// console.log(typeof a); // object
// console.log(a[0]); // { userName: 'raj', pw: 'pass' }
// console.log(a[0].userName, a[0].pw); // raj pass
// a.forEach(function(data){
//     console.log(data.userName);// return all userName column data
//     console.log(data.pw);// return all pw column data
// });

// a.map(function(data){
//     console.log(data.userName);
//     console.log(data.pw);
// });
// for(var i in a){
//     console.log(a[i].userName);
//     console.log(a[i].pw); 
// }
len = a.length
for(i=0; i<=len-1; i++){
    console.log(a[i].userName);
    console.log(a[i].pw);
}
