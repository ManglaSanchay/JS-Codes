let score = "33abc";
let score1 = null; // gives object in typeof and 0 on number conversion 
let score2 = undefined // gives nan on number conversion
console.log(typeof score);


let valueOfNumber = Number(score)
console.log(typeof valueOfNumber);
console.log(valueOfNumber);
// Give nan which means not a number ;

/* On conversion values 
"33" => 33 
"33abc " => NaN
true => 1 
false => 0

empty string also gives false 
else if soemthing in string boolean gives true 


*/ 
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
let num =33
let stringNumber = String(num)
console.log(typeof stringNumber) // gives String 

// *************** operations ****** 

let val =2 ;
letnegVal = -value

console.log(2+2)
console.log(2*2)
console.log(2-2)
console.log(2**2) // gives 2 power 2 
console.log(2/2);  // gives quotiont 
console.log(2%2); // modulous gives remainder 

let str1 = "hello";
let str2 = " sanchay"

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2) ; // both will be 12 
console.log(1 + "2"); // both will be 12 because if there is a string present in  between then the + sign would  meean concatination 

console.log(1+2+"2") // it will be 32 cz when js see string it contatinate the pervious and the literals after that 



