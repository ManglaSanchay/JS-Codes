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

