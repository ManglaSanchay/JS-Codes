console.log("Hello,Sanchay!");

const accountId = 12432;
let accountEmail = "sanchaymangla@gmail.com"
var accountPassword = "123343"
accountCity = " Jaipur"

// accountId =2 // Not Allowed 

console.log(accountId);

console.table([accountEmail,accountId,accountPassword])

/* Var is depricated bcz of issue in block and functional scope 

If we make a variable and do not initailse then it's value is undefined. 

*/

"use strict"; //treat alll JS code as newer version 

// alert( 3 + 3); we are using node js not browser , can be used in browser 


console.log (3 
    +
    3 // not a good practice , code should be readable 
)

let name = "sanchay" // string 
let age = 18 // number 
let isLoggedIn = false ; // boolean 


/* 
number -> 2 power 53  
bigInt 
String -> can be used in single or double quotes ""
boolean -> true /false
null => standalone value (empty ) 
undefined => not been initailised 
symbol => used to find uniqueness 

object 
*/
console.log(typeof null);  // gives object 
console.log(typeof undefined); // gives undefined 

