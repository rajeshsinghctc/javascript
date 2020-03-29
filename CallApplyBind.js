//https://medium.com/javascript-in-plain-english/5-tricky-javascript-problems-to-check-before-your-next-interview-part-1-60fdecaa59d6

/*Call invokes the function and allows you to pass in arguments one by one commma separated,
Apply invokes the function and allows you to pass in arguments as an array. 
Bind returns a new function, allowing you to pass in a this array and any number of arguments. */



name = 'hello';
age = 20;
var person1 = {
    name: 'hari',
    age: 28,
    getDetails: function (address, occupation) {
        console.log('name is ', this.name + '  age is ' + this.age);
        console.log('address is ', address + '  ocupation is ' + occupation);
        // innerFunction = function(){
        //     console.log('inner function')
        //     console.log('name is ', self.name + '  age is '+self.age);
        // }
        // innerFunction();
    }

}

var person2 = {
    name: 'team',
    age: 50,
}

// person1.getDetails(); // name is  hari  age is 28
person1.getDetails.bind(person2, 'home', 'delivery')(); //name is  team  age is 50
// person1.getDetails.call(person2, 'home', 'delivery');
//person1.getDetails.apply(person2, ['home', 'delivery']);


let a = {Fname:'raj'}
let b = {Fname:'hello'}
let print = function(Lname, address){
  console.log(this.Fname +Lname+"  "+address)
};

print.call(b, 'team', 'usa') // takes obj to be attached with and comma separated arguments 
print.apply(a, ['team', 'usa']) // takes obj to be attached with and array of arguments 
print.bind(b, 'team', 'usa')(); // takes obj to be attached with and array of arguments or array and return a function, hence to be called with brackets to get output

/*
https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript



*/

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",
  
    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
  }
  
  
car.displayDetails(); // OP:  GA12345 Toyota

//But what if we want to borrow a method?
var myCarDetails =  car.displayDetails;
myCarDetails(); // op: undefined undefined[becoz Well, this won’t work as the “this” will be now assigned to the global context which doesn’t have neither the registrationNumber nor the brand property.]

var myCarDetails = car.displayDetails.bind(car); 
myCarDetails(); // GA12345 Toyota
/*
The bind() Method
For such cases we can use the ECMAScript 5 bind() method of the Function.prototype property. This means bind() can be used by every single function.
The bind() method creates a new function where “this” refers to the parameter in the parenthesis in the above case “car”. This way the bind() method enables calling a function with a specified “this” value.

*/