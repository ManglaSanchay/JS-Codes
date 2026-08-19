const score = 400;
console.log(score);


const balance = new Number(100);
console.log(balance);
 

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // used for e commerce websites to show the price in 2 decimal places  


const otherBalance = 100.2345;
console.log(otherBalance.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN")); // used to show the number in Indian format
console.log(hundreds.toLocaleString()); // used to show the number in US format

//! ************ maths s****************

Math.round(2.4); // 2     
Math.floor(2.9); // 2       
Math.ceil(2.1); // 3
Math.trunc(2.9); // 2   
Math.random(); // returns a random number between 0 and 1 
Math.abs(-4); // 4  
Math.sqrt(16); // 4
Math.pow(2,3); // 8 
Math.min(2,3,4,5,6); // 2   
Math.max(2,3,4,5,6); // 6

Math.random() * 10; // returns a random number between 0 and 10 

const min =10;
const max = 20; 

Math.floor(Math.random() * (max - min + 1)) + min; // returns a random number between 10 and 20