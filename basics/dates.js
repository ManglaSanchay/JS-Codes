// date represent single time in platform independent format 
//Its a built in object in javascript which is used to work with date and time.   
//It is from 1 January 1970 00:00:00 UTC to 31 December 9999 23:59:59 UTC.          
// Dates 

let myDate = new Date(); // current date and time
console.log(myDate);    
console.log(myDate.toString());
console.log(myDate.toDateString());     
console.log(myDate.toTimeString());     
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());   
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString()); // used to store the date in database
console.log(myDate.toJSON()); // used to store the date in database

let myCreatedDate = new Date("2023-06-01"); // date in string format

console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());  

