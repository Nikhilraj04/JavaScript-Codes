// // console.log("External js");
// // document.writeln("Hello")
// // document.writeln("Hello")
// // document.writeln("Hello")

// // document.write("JS")
// // document.write("JS")
// // document.write("JS")

// //! TOKENS : IT IS THE SMALLEST ELEMENT OF A PROGRAMMING LANGUAGE

// /*
// in javascript we have 4 types of tokens
// 1) keywords : reserved words which have special meaning in js eg: var, let , const , if , else , for , while , function , return , etc
// 2) identifiers : names given to variables , functions , arrays , objects , etc eg: myVar , sum , calculateArea , etc
// 3) literals : fixed values assigned to variables eg: 10 , "Hello" , true , 3.14 , etc
// 4) operators : symbols that perform operations on operands eg: + , - , * , / , = , == , === , etc

// There are 2 types of datatypes in javascript
// 1} Primitive datatypes : number , string , boolean , null , undefined , symbol , bigint
// 2} Non-primitive datatypes : object , array , function

// */

// var a = 10; // number
// console.log(a); // 10
// console.log(typeof a); // number

// var a2= 'Hello'; // string
// console.log(a2); // Hello
// console.log(typeof a2);// string

// var a3 = true; //
// console.log(a3);
// console.log(typeof a3); // boolean

// console.log(typeof typeof a3);// string

// var a4 = undefined; // null
// console.log(a4);
// console.log(typeof a4); // undefined

// var a5 = null; // null
// console.log(a5); // null
// console.log(typeof a5); // object (this is a bug in js)

// var a6 = 9999999999999999999999999999999999999999999999999n
// console.log(a6); // 1e+30 (this is a bug in js, it cannot handle large numbers)
// console.log(typeof a6); // bigint

// var a7 = Symbol("Hello"); // symbol
// var a8 = Symbol("Hello"); // symbol

// console.log(a7==a8); // false (symbols must be unique)
// console.log(a7===a8); // false (symbols must be unique)
// console.log(a7==a7); // symbol

// console.log(typeof a7); // symbol

// //not defined matlab variable is not declared variable present nhi hai
// //undefened matlab variable is declared but not assigned any value

// //! NON-PRIMITIVE DATATYPES

// let obj1 = {
//     firstName: "John",
//     lastName: "Doe",

// };
// console.log(obj1);
// console.log(typeof obj1);//object

// let arr1=[10,20,30];
// console.log(arr1)
// console.log(typeof arr1);//object

// function greet(){
//     console.log("Welcome");

// }

// console.log(greet);
// console.log(typeof greet); // function

//! HOW MANY WAYS TO DECLARE A VRIABLE
/*
1) var
2) let ----(ES6)
3) const----(ES6)

*/

// var a; //declaration
// console.log(a); //undefined
// a=10; //assignment
// console.log(a); //10
// var a; //re-declaration
// console.log(a); //10
// a=20; //re-assignment
// console.log(a); //20
// var b=100 //declaration + assignment
// console.log(b);//100
// var b=200 //re-declaration + re-assignment
// console.log(b);//200

// let c;
// console.log(c); //undefined
// c=1000;
// console.log(c); //1000
// // let c; //re-declaration not allowed
// //! but re-assignment allowed
// c=2000;
// console.log(c); //2000

// //! CONST is similar to final keyword in java
// //! it cannot be re-declared or re-assigned

// const d=5000;
// console.log(d); //5000

//! HOISTING IN JAVASCRIPT
// 1) var variables are hoisted and initialized with undefined
// 2) let and const variables are hoisted but not initialized
// 3) accessing let and const variables before declaration will throw ReferenceError

//var a1 = undefined //! internally
// console.log(a1); //undefined
// var a1=10
// console.log(a1); //10

// //! TEMPORAL DEAD ZONE (TDZ)
// //let b1; //declaration
// //console.log(b1); //ReferenceError: Cannot access 'b1' before initialization

// let b1;
// console.log(b1); //undefined
// b1=20
// console.log(b1); //20

// //!GEC(GLOBAL EXECUTION CONTEXT) )
// debugger;
// console.log("Start");
// console.log(a);
// let b;
// console.log(b);
// b=30;
// console.log(b);
// b=30;
// console.log(a);
// console.log(b)
// var a=40
// console.log(b,a)
// a=100
// console.log(a)
// console.log("End");

// //!GEC EXAMPLE 2
// console.log("start");
// log(a)
// let b;
// log(b)

//! TYPES OF VARIABLES IN JAVASCRIPT
/*
1) Global Variables- variable which is present outside of loops conditional statemnets and functions
      It can be accessed from anywhere in the program
     variables declared outside any function or block .


2) Local Variables : variable which is present inside of loops conditional statemnets and functions
      It can be accessed only within that function or block
      variables declared inside any function or block .

*/

// var a1=10 //global variable //! GLOBAL SCOPE(DUE TO HOISTING)
// let a2=20 //global variable //! SCRIPT SCOPE(DUE TO TDJ- TEMPORAL DEAD ZONE)
// const a3=30 //global variable //! SCRIPT SCOPE(DUE TO TDJ- TEMPORAL DEAD ZONE)

// if(5>2){
//     console.log(a1,a2,a3); //10 20 30
// }
// for(let i=0;i<5;i++){
//     console.log(a1,a2,a3); //10 20 30
// }
// function demo1(){
//     console.log(a1,a2,a3); //10 20 30
// }

// demo1();

// //!CONDITIONAL/LOOPS
// debugger
// if(10>2){
//     var b1=100; //global variable - global scope
//     let b2=200; //local variable - block scope
//     const b3=300; //local variable - block scope
//     console.log(b1,b2,b3); //100 200 300
// }

// conssole.log(b1); //100
// //console.log(b2); //! cannot access block scope variable outside the block

// //!FUNCTIONS
// function demo2(){
//     var c1=1000; //local variable - local scope
//     let c2=2000; //local variable - local scope
//     const c3=3000; //local variable - local scope
//     console.log(c1,c2,c3); //1000 2000 3000
// }
// demo2()
// //console.log(c1); //! cannot access local scope variable outside the function-----

// //!NAMED FUNCTION : FUNCTION WHICH HAS NAME

// //NOTE: functions hoisting only occurs with named functions

// greet() // we can call due to function hoisting

// function greet(){
//     console.log("Hello World");
//     console.log("Hello Universe");
//     console.log("Hello Galaxy");
// }

// greet()

// //!GEC
// console.log("Start");
// console.log(a)
// demo1()
// console.log(demo1);
// var a =10
// console.log(a);
// function demo1(){
//     console.log("I am Demo1");
// }
// console.log(demo1)
// console.log(END)

// //!GEC
// //debugger
// console.log("Start");
// console.log(demo2);
// function demo2(){
//     var a1 = "Hello"
//     console.log(a1);
// }
// demo2();
// console.log(end);

//!ANONYMOUS FUNCTION : function with name

/*
SYNTAX : function (){}

*/

//! FUNCTION EXPRESSION : used to call anonymous func by storing it into a variable
// //debugger;
// console.log(fun);
// //fun() //! error , function hoisting not possible
// var fun = function(){
// console.log("i am Anonymous, called using function expression");
// }
// fun()

// //! RETURN TYPE FUNCTION

// function getFullName(){
// let fname = "John";
// let lname = "Doe";
// let fullName = fname + " " + lname
// return fullName
// console.log(fname,lname)
// }

// function displayName(){
//value variable is storing return value of getFullName func
//     let value = getFullName();
//     console.log(value);
//     document.writeln(value);

// }
// displayName();
//! GEC Exampls:
// function sum1(){
//     let n1=10;
//     let n2=20;
//     let total=n1+n2;
//     return total;
// }

// let val1 = sum1();
// console.log(val1);
// // console.log(sum());

// function sum2(a,b){ // <-- here a,b are parameters used to store arguments

//     let total=a+b;
//     return total;
// }

// let val2 = sum2(5,2);  // <-- arguments: data passed during func call
// console.log(val2); //7
// console.log(sum1(50,20)); //70

// console.log(sum1(10)); //NaN (Not a Number) because sum1 have two parameters but we are passing only one argument
//                         // so second parameter will be undefined and any operation with undefined results in NaN

//! Nested Functions
// Example -1
// function parent(){
//     var money = 70000;
//     console.log(money);

//     function child(){
//         var savings = 500;
//         console.log(savings);

//     }
//     child();
// }
// parent();

// Output:
// 70000
// 500
//! Example -2
// function parent(){
//     var money = 70000;
//     console.log(money);

//     function child(){
//         var savings = 500;
//         console.log(savings+money);

//     }
// child();
// }
// parent();
// Output:
// 70000
// 70500

//! Example -3

// function parent(){
//     var money = 70000;
//     console.log(money);

//     function child(){
//         var savings = 500;
//         console.log(savings+money);

//     }
// return child
// }

// let fun = parent();
// console.log(fun);
// fun()

//! JS CURRYING: whenever a child function is being called without using log with the help of parent function:
//! Example: 4
// function parent(){
//     var money = 70000;
//     console.log(money);

//     function child(){
//         var savings = 500;
//         console.log(savings+money);

//     }
// return child
// }

// parent()()  //<--JS CURRYING
//! DAY 05 ===============================================================================================

// //! HIGHER ORDER FUNCTION: A function which accepts another function as as argument or return a function

// //! CALLBACK FUNCTION: A function which passes as an argument to another function
///-----EXAMPLE 1
// function Student (callback){
// callback();
// }

// Student(function () {   //anonymous function
//  console.log("I AM Callback");
// });

//---EXAMPLE 2
//  function Parent(){
//       return function () {
//             console.log("i am return value of the parent function");

//       };
// }
//  Parent()()

//!ARROW FUNCTION : shorter syntax of traditional function,introduced in the ES6

//const a1 = () => {} anonymous arrow function

//WAY-1
// const a1 = () => {
//   console.log("i am arrow function");
// };

// console.log(a1); // () => { console.log("i am arrow function");}
// a1();

//WAY-2 : if no parameter needed , replace () with _
// const a2 = (_) => {
//   console.log("i am arrow function 2");
// };
// a2();

//WAY 3: if having only one parameter , ignore ()
// const a3 = (x) => {
//   console.log("I am Arrow Function 3", x);
// };
// a3("🚀");

//WAY 4: If having only one line of code , ignore {}
// const a4 = () => console.log("I Am Arrow Function 4");
// a4();

// //WAY-5 : Explicit return , {} and return keyword is mandatory
// const a5 = () => {
//   return "I am Arrow Function 5 , Explicit return";
// };
// console.log(a5());

// //WAY 6 : Implicit return , {} and return keyword not required
// const a6 = () => "I am Arrow Function 6, Implicit return ";
// console.log(a6());
// //! IMMEDIEATLY INVOKED FUNCTION EXPRESSION (IIFE)
// (function iife() {
//   console.log("IIFE 1");
// })();

// (() => {
//   console.log("IIFE 2");
// })();

// function demo3() {
//   return "Hello ❤️";
// }

// let val = demo3();
// console.log(val);

// //! STRINGS
// let str1 = "Hello";
// let str2 = "World";

// //string interpolation ${}
// let str3 = "Hey !!! ${str1} ${str2} ";

// console.log(str1);
// console.log(str2);
// console.log(str3);

// //! STRING METHODS
// let str1="Hello World"
// console.log(str1.length);

// //charAt(indexPos) : returns char at particular index
// console.log(str1.charAt(0));//H
// console.log(str1.charAt(12));

// //slice(startindex , endIndex):returns sliced part of string
// //! Note: lastIndex always get Ignored
// console.log(str1.slice(0,4));//Hell
// console.log(str1.slice(-11,-7)); //Hell
// console.log(str1.slice(0,-7));//Hell

// //subString(startIndex,endIndex)
// //!Note : lastIndex always get ignored
// console.log(str1.substring(0,4)); // Hell
// console.log(str1.substring(-11,-7)) //! NOT PSBL
// console.log(str1.substring(-5,11)); // Hello World, here -5 converted to 0

// let description = "Javascript is a programming language"
// let val = `${description.slice(0,7)}...`
// console.log(val);

// //replace(searchValue , replaceValue): replaces 1st occuring word and returns it
// let statemnet1 ="Hello everyone, Hello to javascript";
// let newsStatemnet1 = statemnet1.replace("Hello", "Welcome")
// console.log(newsStatemnet1);

// //replaceAll(searchValue ,replaceValue) : replaces all occuring word and returns it
// let newsStatemnet2 = statemnet1.replaceAll("Hello", "Welcome")
// console.log(newsStatemnet2)

// let word = "JaVaScRiPt"
// //toLowerCase() : Converts all the alphabetic characters in a string to lowercase
// console.log(word.toLowerCase()); //javascript

// //toUpperCase() : Converts all the alphabetic characters in a string to uppercase
// console.log(word.toUpperCase()); //JAVASCRIPT

// //trim()
// let word2 = " frontend                   "
// console.log(word2)
// console.log(word2.trimStart()); // Removes the leading white space
// console.log(word2.trimEnd());// Removes the trailing white space
// console.log(word2.trim()); // Removes the leading and trailing white space

// let phoneNo = "7986520960" //7845XXXXXX
// console.log(phoneNo.slice(0,4).padEnd(10,"X")); //7986XXXXXX
// console.log(phoneNo.slice(-4).padStart(10,"x")); //XXXXXX0960

// let word3 = "HTML"
// console.log(word3.split()); // ['HTML']
// console.log(word3.split('')); //['H' ,'T' ,'M' ,'L']
// console.log(word3.split('T')); ['H', 'ML']

// let statement2 = "Javascript is a programming langugage"
// console.log(statement2.split(" ")); ['Javascript' , 'is' , 'a' , 'programming' , 'language']

// function checkPallindrome(str){
//       let value = str.split("").reverse().join("");
//       if(str === value){
//             console.log("Yes its Pallindrome");
//       } else {
//             console.log("Not a Pallindrome");
// }}
// checkPallindrome("abc");
// checkPallindrome("racecar");

// //!ARRAYS
// let arr1 = [10,20,30,40,50]
// console.log(arr1[0]);

// //for loop
// for(let i= 0 ; i < arr1.length ;i++){
//       console.log(arr1[i]);
// }

// //for in
// for(let i in arr1){
//       console.log(i);
// }

// //for of
// for(let i of arr1){
//       console.log(i);
// }

//!practice
// console.log("welcome to QSPIDERS");
// console.log("Nikhil Raj");

// fullName = "Tony Stark";
// age=24;
// console.log(fullName);
// x=null;
// y=undefined;
// console.log
// price =99.99;
// radius=14;
// isfollow = false;
// console.log(isfollow);
// fullName=65; // can change the fu
// console.log(fullName);

// let fullName ="NIKHIL RAJ";
// let age = 24;
// var totalPrice=24;
// console.log(fullName);

//!var can be re-declared & updated a global scope
// let var age =76;
//  var age = 88;
//  var age =98;

// console.log(age);

//! consts can't be redeclared or updated

// const age = 24;
// age = 59;
// age = 86;
// console.log(age);

//!pi is const ex
// const PI = 3.14;
// console.log(PI);

//!const need to be declared
// let a;
// let a = 10;
// console.log(a);

// const a;  //const declare must be initialized
// console.log(a);

//!ARRAY METHODS
// let arr1 = [10,20,30,40,50]
// console.log(arr1);

// console.log("Length is",arr1.length); //5 <---- Property

// //!pop() : Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// let poppedValue = arr1.pop()
// console.log(arr1);//[10,20,30,40,50]
// console.log("Popped Value is", poppedValue);// 50

// //!push(): Appends new elements to the end of an array, and returns the new length of the array.

// let newLength = arr1.push(100,200,47,80)
// console.log(arr1); //[10,20,30,40,100,200,47,80]
// console.log("New Length is",newLength);// 8

// //!shift() : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
// let returnVal = arr1.shift()
// console.log(arr1); [10,20,30,40,100,200,47,80]
// console.log("First Element is" , returnVal);//10

// //! unshift(newElements)
// arr1.unshift("Hello","JS",true,null,(),=>{})
// console.log(arr1); // ['Hello' , 'JS' , true , null , f , 20, 30, 40, 50,100,200,47,80]
// console.log("New Length is", newLength2);

// //!splice(startIndex , deleteCount , newElements ) Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// let arr2 = [10,20,30,40,50];

// //!ONlY DELETE
// let deletedElements = arr2.splice(2,1); //30 removed
// console.log(arr2); // [10,20,40,50]
// console.log("Deleted Elements",deletedElements);//[30]

// //!ONLY ADD
// arr2.splice(3,0,1200,1300)
// console.log(arr2);//[10 , 20, 40,1200,1300,50]

// //! ADD AND DELETE
// arr2.splice(1,3,"Hello World")
// console.log(arr2);// [10,'Hello World' , 1300,50]

// //!slice(startIndex,endIndex):Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array
// //NOTE : IT WILL NOT MODIFY THE ORIGINAL ARRAY

// let arr3 = [100,200,300,400,500]
// let newArr3 = arr3.slice(1,4)
// console.log(arr3); //[100,200,300,400,500]
// console.log(newArr3);//[200,300,400]

// //!sort()
// let arr4 = [4,5,1,3,6,2,9]
// let sortedArr1 = arr4.sort()
// console.log(sortedArr1); //[1,2,3,4,5,6,9]

// //lexographical sorting
// let arr5 = [90,6,10,2,70,3]
// let sortedArr2 = arr5.sort()
// console.log(sortedArr2); //[10,2,3,6,70,90]

// let arr6 = [40,1,68,55,2,9,12]
// let sortedArr3 = arr6.sort((a,b)=> a-b) //Asc
// console.log(sortedArr3); // [1,2,9,12,40,55,68]

//!ADVANCED ARRAY METHODS

//!forEach(callback)
// let arr1 = [10, 20, 30, 40, 50];
// let val1=arr1.forEach((ele, idx, array) => {
//   console.log(ele, idx, array);
//   return ele + 5;
// });
// console.log(val1); // UD

// //!map(callback)
// let val2 = arr1.map((ele, idx, array) => {
//   console.log(ele, idx, array);
//   return ele + 5;
// });
// console.log(val2); // new array [15,25,35,45,55]

// //!filter(callback) :returns array of filtered elements
// let val3 = arr1.filter((ele, idx, array) => {
//   console.log(ele, idx, array);
//   return ele > 15;
// });

// //!find(callback) : returns single element
// let arr2 = [100, 90, 10, 20, 30, 10, 50, 60];
// let val4 = arr2.find((ele) => ele === 10);
// console.log(val4);

// //!findIndex(callback) : returns index of first element
// let val5 = arr2.findIndex((ele) => ele === 10);
// console.log(val5); //2

// //! reduce(callback , accumulatorValue)
// let arr3 = [10, 20, 30, 40, 50];
// let val6 = arr3.reduce((acc, ele, idx, array) => {
//   console.log(acc, ele);
//   return acc + ele;
// }, 0);
// console.log(val6);

//!ARRAY DESTRUCTING
// let arr1 = [10, 20, 30];
// let [a1, a2, a3] = arr1;
// console.log(a3);

// let arr2 = [100, 200, 300];
// let [, , b1] = arr2;
// console.log(b1);

// let arr3 = [1000, [10, 20, ["HI"]], 90];
// let [, [c1, , [c3]], c2] = arr3;
// console.log(c1, c2, c3);

//!-------------------12-12-25-------------------------------------------

//! OBJECTS
//! CREATE
// let obj1 = {
//     id : 1 ,
//     fname : "John",
//     isLoggedIn : true,
//     havingLpaop : null,
//     accountNo : 987654326546884n,
//     greet : function(){}
// }
// console.log(obj1);
// /*
// {id: 1, fname: 'John', isLoggedIn: true, havingLpaop: null, accountNo: 987654326546884n, …}
// */
// //! READ - We have 2 ways
// //    1) Using DOT opertaor
//     console.log(obj1.fname);  //John
// // 2) USING SQAURE BRACKETS  ----> objName["key"]
// console.log(obj1["id"]);  //1
// //! we can iterate object by using an object by using FOR IN LOOP
// for(let i in obj1){
//     console.log(obj1[i]);
    
// }
// /*
// 1
// John
// true
// null
// 987654326546884n
// ƒ (){}
// */
// //! UPDATE OBJECT obj1
// obj1.havingLpaop = "HP"
// console.log(obj1); 
// //{id: 1, fname: 'John', isLoggedIn: true, havingLpaop: 'HP', accountNo: 987654326546884n, …}
// //! HOW TO ADD A NEW PROPERTY IN  OBJECT
// obj1.company = "WIPRO"
// console.log(obj1);
// /*
// accountNo
// : 
// 987654326546884n
// company
// : 
// "WIPRO"
// fname
// : 
// "John"
// greet
// : 
// ƒ ()
// */
// //! DELETE PROPERTY FRROM AN OBJECT
// delete obj1.accountNo;
// console.log(obj1);
// //{id: 1, fname: 'John', isLoggedIn: true, havingLpaop: 'HP', greet: ƒ, …}



// //! OBJECT PROPERTIES
// let obj2 = {
//     id: 2,
//     fname: "Jane",
//     lname: "Doe"
// };
// //Object.keys();
// let keys = Object.keys(obj2)
// console.log(keys);      //['id', 'fname', 'lname']
// //Object.values()
// let values = Object.values(obj2)
// console.log(values);  // [2, 'Jane', 'Doe']
// //Object.entries()
// let keyAndValues = Object.entries(obj2)
// console.log(keyAndValues);  //[Array(2), Array(2), Array(2)]

// //Object.fromEntries()
// let keysAndValuesFromEntries = Object.fromEntries(keyAndValues)
// console.log(keysAndValuesFromEntries);  //{id: 2, fname: 'Jane', lname: 'Doe'}



// //! "this" keyword
// console.log(window);  //script.js:867 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.log(this);   //script.js:867 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// let user1 = {
//     fname: "Jane",
//     lname: "Doe",
//     getFullName : function() {  //! never use Arrow function in method
//         console.log(this.fname , this.lname);
//     },
//     getEmail() {
//         console.log(${this.fname}.${this.lname}@gmail.com);
        
//     }
// }
// user1.getFullName();  //Jane Doe
// user1.getEmail();  //Jane.Doe@gmail.com



// //! CONSTRUCTOR FUNCTION - FirstName letter should be in upperCase
// class Student{
//     constructor(x, y){
//         this.id = x;
//         this.name = y;
//     }dggd
//     getStudentName(){
//         return Student name is ${this.name}
//     }
// }
// let s1 = new Student(1, "Clark")
// console.log(s1);    //Student {id: 1, name: 'Clark'}
// console.log(s1.getStudentName());   //Student name is Clark


// //!PROMISE
// let p1 = new Promise((resolve , reject)=>{

//  if(10>2){
//       resolve("Hello World 😊😊")
//  }else{
//       reject("Something went wrong ❌")
//  }
// })
// console.log(p1);
// p1.then((response)=>{
//       document.writeln(`<h1>${response}</h1>`)
// })
// p1.catch((err)=>{
//       document.writeln(`<h1>${err}</h1>`)
// })

// p1.finally(()=>{
//       document.writeln("<p>Api calling done</p>")
// })

// //! TODOS API CALL USING FETCH()
// function getTodos() {
//   const URL = "https://jsonplaceholder.typicode.com/todos";

//   let p1 = fetch(URL);
//   console.log(p1);

//   p1.then((response) => {
//     let p2 = response.json();

//     console.log(p2);
//     p2.then((data) => {
//       console.log(data);
//       displayTodo(data);
//     });
//   });
//   p1.catch((err) => {
//     console.log(err);
//   });
// }
// getTodos();

// function displayTodo(todos) {
//   console.log(todos); // [{},{},{},......]

//   todos.forEach((ele) => {
//     document.writeln(`
//             <div>
//                   <h1>${ele.title} ${
//       ele.completed ? `<span>🟢</span>` : `<span> ❌ </span>`
//     } </h1>
//                   <button>Edit</button>
//                   <button>Delete</button>

//             </div>
//       `);
//   });
// }

// //! ASYNC AND AWAIT
// async function getPhotos() {
//   const URL = "https://jsonplaceholder.typicode.com/photos";

//   let response = await fetch(URL);
//   let data = await response.json();
//   console.log(data);
// }
// getPhotos();

// function displayPhotos(allPhotos) {
//   allPhotos.forEach((ele) => {
//     document.writeln(`<h2>${ele.title}</h2>`);
//   });
// }
