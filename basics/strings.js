const name = "sanchay"
//undefined
const repoCount = 50;
//undefined
console.log(name + repoCount);
//VM312:1 sanchay50
//undefined
// String Interpolation - modern way cz we can do many things on the go 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// VM452:1 Hello my name is sanchay and my repo count is 50
//undefined 
const getName = new String("sanchay"); 


console.log(getName.length);
console.log(getName.toUpperCase());
console.log(getName.charAt(2));
console.log(getName.indexOf('n'));


const name1 = getName.substring(0, 4); // last value is not included
console.log(name1);
const name2 = getName.slice(-8,4); // last value is not included 

const newString = "   sanchayyy    ";
console.log(newString.trim());  
const url = "https://www.sanchay.com/sanchay%20mangla";    
console.log(url.replace("%20","_"));
console.log(url.includes("%20"));


 const gameName = "GTA_5_game";
console.log(gameName.split("_")); // returns an array
console.log(gameName.split("_")[0]); // returns first element of the array
